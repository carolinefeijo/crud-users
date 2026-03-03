import { BsXCircleFill } from "react-icons/bs";

function Modal({
  children,
  onClose,
  visible,
  title,
}: {
  children: React.ReactNode;
  onClose: () => void;
  visible: boolean;
  title?: string;
}) {
  if (!visible) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "5px",
          minWidth: "300px",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <div
          style={{
            cursor: "pointer",
            alignItems: "flex-end",
            display: "flex",
            justifyContent: "flex-end",
          }}
          onClick={onClose}
        >
          <BsXCircleFill size={22} color="#000" />
        </div>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;
