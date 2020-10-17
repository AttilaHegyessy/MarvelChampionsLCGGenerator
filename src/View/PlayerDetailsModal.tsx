import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

interface IPlayerDetailsModal {
  isVisible: boolean;
  handleClose: () => void;
}

export default function PlayerDetailsModal({
  isVisible,
  handleClose,
}: IPlayerDetailsModal) {
  return (
    <Modal show={isVisible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>
              Number of additional encounter sets (in addition to
              standard/expert)
            </Form.Label>
            <Form.Control type="number" min={0} max={5} />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}
