import Modal from "../../../../components/Modal";

function Delete({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  return (
    <Modal title="Deletar usuario" onClose={onClose} visible={visible}>
      <p>deletar Conteúdo do Modal</p>
      <p>
        Voce sabe que apagara o usuario definitivamente, tem certeza que deseja
        deletar?
      </p>
      <button
        style={{
          cursor: "pointer",
          borderRadius: "5px",
          border: "1px solid #c56cb8",
          backgroundColor: "#edaee4",
          color: "#080808",
          padding: "5px 10px",
        }}
        onClick={onClose}
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
    </Modal>
  );
}
export default Delete;
