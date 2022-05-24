import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todo';
import styles from "./components/todo.module.css"

function App() {
  return (
    <div className={styles.mainDivSet}>
      <Todo />
    </div>
  );
}

export default App;
