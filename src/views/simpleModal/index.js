import { IoIosClose } from 'react-icons/io'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import './index.css'

const SimpleModal = ({
    modal,
    toggle,
    header,
    children,
    handleClose
}) => {

    return (
        <div
            style={{
                display: 'block',
                width: 1000,
                padding: 30,
            }}
        >
            <Modal isOpen={modal} toggle={toggle} modalTransition={{ timeout: 2000 }}>
                <ModalHeader style={{ backgroundColor: '#FAFBFC' }}>
                    <div className="d-flex align-items-center">
                        <IoIosClose size={30} className="mr-2" onClick={handleClose} />
                        <h4 className="m-0">{header}</h4>
                    </div>
                </ModalHeader>
                <ModalBody>{children}</ModalBody>
            </Modal>
        </div>
    )
}

export default SimpleModal
