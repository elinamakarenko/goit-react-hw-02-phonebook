import { Component } from 'react';
import shortid from 'shortid';
import Form from './Form/Form';
import Contacts from './Contacts';

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmit = ({ name }) => {
    this.setState(prevState => {
      const { contacts } = prevState;
      return { contacts: [...contacts, { id: shortid.generate(), name }] };
    });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.formSubmit} />
        <Contacts contacts={this.state.contacts}/>
      </>
    );
  }
}
export default App;
