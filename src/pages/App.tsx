import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './style.module.scss';

function App() {
  return (
    <div className={style.appStyle}>
      <Form />
      <List />
    </div>
  );
}

export default App;
