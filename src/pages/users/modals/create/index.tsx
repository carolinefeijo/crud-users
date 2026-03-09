import { useState } from "react";
import { setCreateUserRequest } from "../../../../store/features/user/userSlice";
import { useDispatch } from "react-redux";
import Modal from "../../../../components/Modal";
import "./styles.css";

function Create({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  // função para formatacao do telefone
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.substring(0, 11);
    const formattedValue = value
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
    setPhone(formattedValue);
  };

  const handleOnClose = () => {
    setName("");
    setEmail("");
    setPhone("");
    setError("");
    onClose();
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPhoneComplete = phone.replace(/\D/g, "").length === 11;
  const canSubmit = name.trim() !== "" && isEmailValid && isPhoneComplete;

  const handleCreate = () => {
    if (!canSubmit) {
      setError("Por favor, preencha os campos corretamente.");
      return;
    }
    dispatch(
      setCreateUserRequest({
        name,
        email,
        phone,
      }),
    );
  };

  return (
    <Modal title="Criar usuario" onClose={handleOnClose} visible={visible}>
      <p>Conteúdo do Modal</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
        />

        {!isEmailValid && email.length > 0 && (
          <span style={{ color: "pink", fontSize: "13px" }}>
            Email inválido.
          </span>
        )}

        <input
          type="tel"
          placeholder="Telefone (DDD + Número)"
          value={phone}
          onChange={handlePhoneChange}
        />

        {!isPhoneComplete && phone.length > 0 && (
          <span style={{ color: "pink", fontSize: "13px" }}>
            Digite o DDD e os 9 dígitos.
          </span>
        )}
      </div>

      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>{error}</span>
      )}

      <button
        disabled={!canSubmit}
        style={{
          marginTop: "10px",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: canSubmit ? "pointer" : "not-allowed",
          opacity: canSubmit ? 1 : 0.5,
        }}
        onClick={() => {
          handleCreate();
          handleOnClose();
        }}
      >
        Criar
      </button>
    </Modal>
  );
}

export default Create;
