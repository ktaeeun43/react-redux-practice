import { connect } from "react-redux";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import Todos from "../components/Todos";

const TodosContainer =
  () =>
  ({ input, todos, changeInput, insert, remove }) => {
    return (
      <Todos
        input={input}
        todos={todos}
        onChangeInput={changeInput}
        onInsert={insert}
        onToggle={toggle}
        onRemove={remove}
      />
    );
  };

export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todosm,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
)(TodosContainer);
