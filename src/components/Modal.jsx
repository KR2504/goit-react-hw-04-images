import {useEffect}from "react";
import styles from "../styles.css/styles.module.css";
import PropTypes from 'prop-types';

export default function Modal({ onClose, children }) {
    
    useEffect(() => {
        window.addEventListener('keydown', onClose);
        return () => {
            window.removeEventListener('keydown', onClose);
        }
    }, [onClose]);


    return (
        <div className={styles.Overlay} onClick={onClose}>
            <div className={styles.Modal}>
                <img src={children} alt="" width={900} height={600} />
            </div>
        </div>
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,    
    children: PropTypes.node.isRequired,
  };