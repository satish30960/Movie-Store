import React, { Component } from "react";
import {Modal,Button} from "react-bootstrap";
class ModalPop extends Component {

  handleDelClose = (e,id) => {
      e.preventDefault();
    this.props.removeMovie(id);
  }
  render() {
      const{
        modalIsOpen,
        closeModal,
        id,
      }=this.props;
    return (
      <Modal show={modalIsOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure, You want to Delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            No
          </Button>
          <Button variant="primary" onClick={(e)=>this.handleDelClose(e,id)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default ModalPop;
