import { Button } from "@nextui-org/react";
import { useCounter } from "../../stores/counter";

export function ButtonZustand() {
  const counter = useCounter((state) => state.count);
  const increment = useCounter((state) => state.increment);

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
        count with Zustand - {counter}
      </Button>
    </div>
  );
}
