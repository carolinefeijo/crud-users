import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  setCreateUserRequest,
  setCreateUserSuccess,
} from "./userSlice";
import api from "../../../api";
import type { UserResponse, CreateUserPayload } from "./types";
import type { PayloadAction } from "@reduxjs/toolkit";

function* fetchUsersSaga(): Generator {
  // listar todos os usuários
  try {
    const { data: response }: { data: UserResponse } = yield call(
      api.get,
      "/users",
    );
    yield put(fetchUsersSuccess(response));
  } catch (error) {
    console.log(error);
  }
}

// criar usuário
function* setCreateUserSaga(
  action: PayloadAction<CreateUserPayload>,
): Generator {
  yield console.log("Criar usuário:", action.payload);
  try {
    const { data: response }: { data: UserResponse } = yield call(
      api.post,
      "/users",
      action.payload,
    );
    yield put(setCreateUserSuccess(response));
    yield put(fetchUsersRequest());
  } catch (error) {
    console.log(error);
  }
}

export default function* userSaga() {
  yield takeLatest(fetchUsersRequest.type, fetchUsersSaga);
  yield takeLatest(setCreateUserRequest.type, setCreateUserSaga);
}
