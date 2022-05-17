import React from "react";
// import PropTypes from 'prop-types';
import s from './Contacts.module.css';

function Contacts({contacts}) {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Contacts;