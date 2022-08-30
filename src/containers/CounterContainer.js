import Counter from "../components/Counter";
import { connect } from "react-redux";
import { decrease, increase } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} OnDecrease={decrease} />
  );
};

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer);
