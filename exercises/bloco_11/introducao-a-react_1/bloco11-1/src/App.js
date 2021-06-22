import './App.css';
import Task from './Task';

const tarefas = ['Estudar', 'Tomar café', 'Escovar os dentes', 'Comer'];

function App() {
  return (
    <ul>{tarefas.map((tarefa) => <Task value={tarefa}/>)}</ul>
  );
}

export default App;
