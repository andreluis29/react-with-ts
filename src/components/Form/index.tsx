import React from "react";
import Button from "../Button";
import style from './style.module.scss';

class Form extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="nome" className={style.label}>
            Digite seu nome:
            <input type="text" id="nome" className={style.input} />
          </label>
          <label htmlFor="tarefa"  className={style.label}>
            Digite o que deseja aprender:
            <input type="text" id="tarefa" className={style.input} />
          </label>
          <label htmlFor="tempo"className={style.label}>
            Timer
            <input
              type="time"
              id="tempo"
              step="1"
              min="00:00:00"
              max="01:30:00"
              className={style.input}
              required />
          </label>
        </div>
        <Button />
      </form>
    )
  }
}

export default Form;