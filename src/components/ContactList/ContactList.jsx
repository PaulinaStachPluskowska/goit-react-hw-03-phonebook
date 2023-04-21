import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ onDelete, filterContacts}) => {
    return (
        <ul className={css.list}>
            {filterContacts().map(contact => (
                <li className={css.item} key={contact.id}>
                    <p className={css.name}>
                        {contact.name}:
                    </p>
                    <p className={css.number}>
                        {contact.number}  
                    </p>
                    <button className={css.button} type="button" onClick={()=> onDelete(contact.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    filterContacts: PropTypes.func.isRequired,
};