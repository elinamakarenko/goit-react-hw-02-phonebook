import { Component } from "react";
import shortid from 'shortid';
import s from './Form.module.css';


class Form extends Component {
  state = {
    name: '',
  };

  nameInputId = shortid.generate();
  
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  }; 

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset =()=> {
    this.setState( {name: ''});
  }

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default Form;