import './Modal.css';
import ReactDOM from 'react-dom';

export default function Modal({ children, handleClose }) {
    return ReactDOM.createPortal((
        <div className="modal-backdrop">
            <div className="modal">
                <div>{children}</div>
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    ), document.body);
}
