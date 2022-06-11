import React from "react";
import style from './style.module.scss';


function Lista() {
  const tarefas = [{
    tarefa: 'React',
    tempo: '02:00:00'
  },
  {
    tarefa: 'JavaScript',
    tempo: '01:00:00'
  }
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map(({ tarefa, tempo }, index) => (
          <li key={index} className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Lista;
