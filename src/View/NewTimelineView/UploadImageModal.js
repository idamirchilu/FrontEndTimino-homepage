import { Modal, Button } from "react-bootstrap";
import { useRef } from "react";

export default function UploadImageModal(props) {
  const { onHandle, show } = props;
  const selectedFileInputRef = useRef();

  const uploadImageHandler = () => {
    var formdata = new FormData();
    formdata.append("file", selectedFileInputRef.current.files[0]);

    console.log(selectedFileInputRef.current.files[0]);

    // var requestOptions = {
    //   method: "POST",
    //   body: formdata,
    //   redirect: "follow",
    // };

    // fetch("https://timino-app-2.iran.liara.run//upload/file", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));
    // onHandle();
  };

  return (
    <Modal show={show} onHide={onHandle}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p>Min: 200KB</p>
          <p>Max: 1MB</p>
          <p>Type: jpeg, jpg, png, gif</p>
          <input
            accept="image/png, image/jpeg, image/jpg, image/gif"
            type="file"
            ref={selectedFileInputRef}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHandle}>
          Close
        </Button>
        <Button variant="primary" onClick={uploadImageHandler}>
          send
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
