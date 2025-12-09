
import Button from "components/Button/Button";
import { type CounterProps } from "./types";
import { ButtonControl, Count, CounterWrapper } from "./styles";



function Counter({ count, onMinus, onPlus}: CounterProps) {

  return (
    <CounterWrapper >
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count>{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
