import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './form.module.css';

class Input extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  onChenge = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value, id: nanoid(5) });
  };

  onSubmit = () => {
    this.props.addContacts(this.state);
    this.removeState();
  };

  removeState() {
    this.setState({ name: '', number: '' });
  }

  render() {
    const { name, number } = this.state;
    return (
      <form
        className={s.form}
        onSubmit={e => {
          e.preventDefault();
          this.onSubmit();
        }}
      >
        <label>
          <p className={s.text}>Name</p>
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onChenge}
            value={name}
          />
        </label>
        <label>
          <p className={s.text}>Number</p>
          <input
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onChenge}
            value={number}
          />
        </label>
        <button className={s.button} type="sabmit">
          add contact <span className={s.unicode}></span>
        </button>
      </form>
    );
  }
}
export default Input;

Input.propTypes = { addContacts: PropTypes.func.isRequired };
