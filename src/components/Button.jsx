import React from "react";
import PropTypes from 'prop-types';
import styles from "../styles.css/styles.module.css";

export default function Button({ onClick }) {
    return (
        <button type="button" onClick={onClick} className={styles.Button}>
            Load more
        </button>
    );  
};
    


Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};