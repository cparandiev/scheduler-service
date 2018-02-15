import React from 'react';
import { Modal } from 'react-bootstrap';

export const Dialog = ({title, show, body, buttons}) => (
    <div className="static-modal">
        <Modal show={show}>
            <Modal.Header>
            <Modal.Title>
                {title}
            </Modal.Title>
            </Modal.Header>
            {body && 
            <Modal.Body>
                {body}
            </Modal.Body>}

            <Modal.Footer>
                {buttons}
            </Modal.Footer>
        </Modal>
    </div>
);