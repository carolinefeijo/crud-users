import Modal from "../../../../components/Modal";

function Edit({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  return (
    <Modal title="Editar usuario" onClose={onClose} visible={visible}>
      <p>editar Conteúdo do Modal</p>
    </Modal>
  );
}
export default Edit;
