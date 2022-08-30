import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import TodoItem from "./components/TodoItem";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
