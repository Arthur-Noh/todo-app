import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
