import { Component } from "react";
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import css from './App.module.css';
import {ContactForm} from './ContactForm/ContactForm'; 
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";


// const INITIAL_STATE = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

export class App extends Component {
  // state = {...INITIAL_STATE};

  state = {
    contacts: [],
    filter: '',
  }

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const newContact = {id: nanoid(6), name: name, number: number};
    const namesArray = this.state.contacts.map(({name}) => name);

    if (namesArray.includes(name)) {
      Notiflix.Notify.warning(`${name} is already in contacts.`,{
        position: 'center-top',
        closeButton: true,
        timeout: 1500,
        width: '350px',
      });
      // alert(`${name} is already in contacts.`);
      // return true;
    } else {
      this.setState(({contacts}) => ({contacts: [...contacts, newContact],
      }));
      form.reset();
    }
  };

    
  filterChange = event => {
    const {name, value} = event.target;
    this.setState({ [name]: value});
  };
  
  deleteContact = contactID => {
    const index = this.state.contacts.findIndex(contact => 
      contact.id === contactID
      );

      const generateElement = () => {
        const array = this.state.contacts;
        let newArray = [];
        for ( const el of array) {
          if (array.indexOf(el) !== index) {
            newArray.push(el);
          }
        }
        return newArray;
      };

      this.setState(({ contacts }) => ({contacts: generateElement() }));
  };

  filterContacts = () => {
    const newArray = this.state.contacts.filter(contact => {
      const lowerValue = this.state.filter.toLowerCase();
      return contact.name.toLowerCase().includes(lowerValue);
    });
    return newArray;
  };


  render() {
    return (
      <div className={css.container}>
        <h1 className={css.header}>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2 className={css.secondHeader}>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.filterChange} />
        <ContactList filterContacts={this.filterContacts} onDelete={this.deleteContact}/>
      </div>
    );
  }

};






