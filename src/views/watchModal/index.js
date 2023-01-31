import SimpleModal from "../simpleModal"
import './index.css'

const WatchModal = ({
    modalIsOpen,
    modalToggle,
    handleClose,
    currentUrl,
}) => {

    return (
        <div>
            <SimpleModal
                header="Assistir video"
                modal={modalIsOpen}
                toggle={modalToggle}
                handleClose={handleClose}
            >
                <div className="frame-container">
                    <iframe
                        title={currentUrl}
                        width="640"
                        height="480"
                        src={currentUrl}
                        frameborder="0"
                        marginheight="0"
                        marginwidth="0"
                    >
                    </iframe>
                </div>
            </SimpleModal>
        </div>
    )
}

export default WatchModal