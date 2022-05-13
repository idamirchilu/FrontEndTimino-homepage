import { Modal, Button } from "bootstrap";

export default function UploadImageModal(props) {
  const { onHandle, show } = props;
  return (
    <Modal show={show} onHide={onHandle}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHandle}>
          Close
        </Button>
        <Button variant="primary" onClick={onHandle}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
