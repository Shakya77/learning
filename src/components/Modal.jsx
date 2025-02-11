import './Modal.css';
import ReactDOM from 'react-dom';

export default function Modal({ children, handleClose }) {
    return ReactDOM.createPortal((
        <div className="modal-backdrop">
            <div className="modal">
                <h2>
                    {children}
                    </h2>
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    ), document.body);
}
