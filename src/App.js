import logo from "./logo.svg";
import "./App.css";

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
