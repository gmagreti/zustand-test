import { Button } from "@nextui-org/react";
import { useCounter } from "../../stores/counter";

export function ButtonZustand2() {
  const counterTwo = useCounter((state) => state.counTwo);
  const incrementTwo = useCounter((state) => state.incrementTwo);

  return (
    <div className="card">
      <Button
        color="primary"
        auto
        onClick={incrementTwo}
        css={{
          width: "100%",
        }}
      >
        countTwo with Zustand2 - {counterTwo}
      </Button>
    </div>
  );
}
