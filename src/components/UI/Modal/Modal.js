import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import './modal.css';

const ModalContainer = (props) => {
    const { modal, toggle, title, modalBody } = props
    const closeBtn =
        <button className="closeBtn" onClick={toggle}>
            &times;
        </button>

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} close={closeBtn}>
                {title}
            </ModalHeader>
            <ModalBody>
                {modalBody}
            </ModalBody>
        </Modal>
    )
}

export default ModalContainer;
