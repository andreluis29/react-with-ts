import React from "react";
import Button from "../Button";

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="nome">
          Digite seu nome:
          <input type="text" id="nome" />
        </label>
        <label htmlFor="tarefa">
          Digite o que deseja aprender:
          <input type="text" id="tarefa" />
        </label>
        <label htmlFor="tempo">
          Timer
          <input
            type="time"
            id="tempo"
            step="1"
            min="00:00:00"
            max="01:30:00"
            required />
        </label>
        <Button />
      </form>
    )
  }
}

export default Form;