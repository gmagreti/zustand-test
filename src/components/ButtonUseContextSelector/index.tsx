import { Button } from "@nextui-org/react";
import { useCounterSelector } from "../../context/CounterUseSelectorProvider";

export function ButtonUseContextSelector() {
  const { counter, increment } = useCounterSelector();

  return (
    <div className="card">
      <Button
        color="primary"
        auto
        onClick={increment}
        css={{
          width: "100%",
        }}
      >
        count with Use Context Selector - {counter}
      </Button>
    </div>
  );
}
