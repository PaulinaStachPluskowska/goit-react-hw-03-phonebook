import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import css from './ContactForm.module.css';
import { Component } from 'react';

export class ContactForm extends Component {
    state = {
        id: '',
        name: '',
        number: '',
    };

    elementID = nanoid(10);

    render() {
        return (
            <form className={css.form} htmlFor={this.elementID} onSubmit={this.props.onSubmit}>
                <label className={css.label}>
                    Name
                    <input className={css.input} id={this.elementID} 
                      type="text"
                      name="name"
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      required/>
                </label>
                <label className={css.label}>
                    Number
                    <input className={css.input} id={this.elementID}
                      type="tel"
                      name="number"
                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required/>
                </label>
                <button className={css.button} type="submit">
                    Add contact
                </button>
            </form>
        );
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};