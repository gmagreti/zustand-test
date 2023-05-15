import { useContext } from "react";
import { CounterContext } from "../../context/CounterProvider";
import { Button } from "@nextui-org/react";

export function ButtonContextAPI() {
  const { counter, increment } = useContext(CounterContext);

  return (
    <div className="card">
      <Button
        color="primary"
        onClick={increment}
        css={{
          width: "100%",
        }}
      >
        count with Context API - {counter}
      </Button>
    </div>
  );
}
