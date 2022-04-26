import React, { Component } from "react";
import Container from "./container/container";
import Input from "./form/form";
import ContactsList from "./contactsList/contactsList";
import Filter from "./filterContacts/filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addValidContacts = (value) => {
    const contacts = this.state.contacts;
    const arrey = [...contacts, value];

    if (
      contacts.every((e) => e.name !== value.name) &&
      contacts.every((e) => e.number !== value.number)
    ) {
      this.setState({ contacts: arrey });
    } else {
      alert(`"${value.name}" is already in contact!`);
    }
  };

  onInputFilter = (value) => {
    this.setState({ filter: value });
  };

  filterVisibleEl = () => {
    const { contacts, filter } = this.state;
    const filterLowCace = filter.toLowerCase();

    return contacts.filter((el) => {
      return el.name.toLowerCase().includes(filterLowCace);
    });
  };
  removeContacts = (id) => {
    this.setState((preState) => {
      return { contacts: preState.contacts.filter((el) => el.id !== id) };
    });
  };

  render() {
    const visibleContacts = this.filterVisibleEl();
    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <Input addContacts={this.addValidContacts} />

          <Filter onInputFilter={this.onInputFilter} />
        </div>
        <ContactsList
          contacts={visibleContacts}
          removeContacs={this.removeContacts}
        />
      </Container>
    );
  }
}

export default App;
