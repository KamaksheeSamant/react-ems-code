import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');
class Modal extends React.Component {
    render() {
        return ReactDOM.createPortal(
            <div
                className="modal-container"
                onClick={this.props.onClose}>
                <div className="modal">
                    <div>
                        {this.props.children}
                    </div>
                    <button onClick={this.props.onClose}>Close</button>
                </div>

            </div>,
            modalRoot
        );
    }
}


Modal.propTypes = {
    children: PropTypes.any.isRequired
};

export default Modal;