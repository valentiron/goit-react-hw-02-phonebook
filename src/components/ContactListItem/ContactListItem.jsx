import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({contact: {id,name,number}, onDelete}) => {
    return (
        <li key={id} className={css.item}>
            <span>{name}</span>
            <span>{number}</span>
            <button type='button' onClick={() => onDelete(id)}>Delete</button>

        </li>
    );
};

ContactListItem.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };
  
  export default ContactListItem;