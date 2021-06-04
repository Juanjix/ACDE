import Modal from "react-bootstrap/Modal";

const modalBox = (title, body, modal) => {
  return (
    <div>
      <Modal dialogClassName="modal-90w" modal={modal}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{body}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default modalBox;