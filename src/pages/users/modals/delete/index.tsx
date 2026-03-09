// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react-hooks/set-state-in-effect */
import Modal from "../../../../components/Modal";
import type { User } from "../../../../store/features/user/types";
import { setDeleteUserRequest } from "../../../../store/features/user/userSlice";
import { useDispatch } from "react-redux";

function Delete({
  visible,
  onClose,
  user,
}: {
  visible: boolean;
  onClose: () => void;
  user: User | null;
}) {
  const dispatch = useDispatch();

  const handleOnClose = () => {
    onClose();
  };

  const handleDelete = () => {
    if (!user) return;
    console.log(user);
    dispatch(setDeleteUserRequest({ id: user.id }));
  };

  if (!user) {
    return null;
  }

  return (
    <Modal title="Deletar usuario" onClose={handleOnClose} visible={visible}>
      <p>Você deseja deletar o usuário {user.name}?</p>

      <div style={{ marginTop: "50px" }}>
        <button
          style={{
            cursor: "pointer",
            borderRadius: "5px",
            border: "1px solid #c56cb8",
            backgroundColor: "#edaee4",
            color: "#080808",
            padding: "5px 10px",
          }}
          onClick={() => {
            handleDelete();
            handleOnClose();
          }}
        >
          Sim, deletar
        </button>
        <button
          style={{
            cursor: "pointer",
            borderRadius: "5px",
            border: "1px solid #c56cb8",
            backgroundColor: "#edaee4",
            color: "#080808",
            padding: "5px 10px",
            marginLeft: "10px",
          }}
          onClick={onClose}
        >
          Não, cancelar
        </button>
      </div>
    </Modal>
  );
}

export default Delete;
