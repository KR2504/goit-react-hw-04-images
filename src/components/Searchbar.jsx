import { useState } from "react";
import PropTypes from 'prop-types';
import styles from "../styles.css/styles.module.css";
import { VscSearch } from "react-icons/vsc";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function Searchbar({onSubmit}) {
    const [value, setValue] = useState('');

    const handleChangeName = e => {
        setValue(e.currentTarget.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (value.trim() === '') {
            Notify.warning("Please enter something!")
            return;
        }
        onSubmit(value);
        setValue('')
    };

    return (
        <header className={styles.Searchbar}>
                <form onSubmit={handleSubmit} className={styles.SearchForm}>
                    <button type="submit" className={styles.SearchForm_button}>
                        <span><VscSearch className={styles.SearchForm_icon} /></span>
                    </button>

                    <input
                        value={value}
                        onChange={handleChangeName}
                        className={styles.SearchForm_input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
    )
}

Notify.init({
    width: '280px',
    position: 'right-top',
    distance: '30px',
    borderRadius: '10px',
    timeout: 2000,
    cssAnimationStyle: 'from-right',
})

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,    
  };