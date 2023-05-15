import { useState } from "react";
import "./App.css";

import { ButtonContextAPI } from "./components/ButtonContextAPI";
import { ButtonUseContextSelector } from "./components/ButtonUseContextSelector";
import { ButtonZustand } from "./components/ButtonZustand";
import { ButtonZustand2 } from "./components/ButtonZustand2";
import useTodoListStore from "./stores/todo-list";
import {
  Button,
  Card,
  Checkbox,
  Container,
  Grid,
  Input,
  Spacer,
  Text,
} from "@nextui-org/react";

function App() {
  const [text, setText] = useState("");

  const {
    data,
    todoActive,
    errorMessage,
    clear,
    create,
    handleTodoActive,
    remove,
    update,
    handleErrorMessage,
  } = useTodoListStore();

  const onSubmit = () => {
    if (text === "") {
      handleErrorMessage("Please enter a todo item");
      return;
    }

    create({
      text,
      completed: false,
      date: new Date().toISOString(),
    });
    setText("");
  };

  console.log('data',data)

  return (
    <div className="App">
      <div className="card">
        <Button
          bordered
          color="default"
          auto
          onClick={() => handleTodoActive(!todoActive)}
          css={{
            width: "100%",
          }}
        >
          Toggle to-do
        </Button>
      </div>

      {!todoActive && (
        <>
          <ButtonContextAPI />

          <ButtonUseContextSelector />

          <ButtonZustand />

          <ButtonZustand2 />
        </>
      )}



      {todoActive && (
        <div className="section">
          <Button
            onClick={clear}
            className="clear-all"
            bordered
            color="error"
            auto
            css={{
              width: "100%",
              marginBottom: "50px",
            }}
          >
            Clear all
          </Button>

          <form
            className="todo-item new"
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit();
            }}
          >
            <Input
              shadow={false}
              labelPlaceholder="Name"
              status="primary"
              type="text"
              value={text}
              onChange={(event) => {
                if (errorMessage) handleErrorMessage("");
                setText(event.target.value);
              }}
              css={{
                width: "100%",
              }}
            />

            <Spacer y={1} />

            <Button color="primary" auto type="submit">
              Add item
            </Button>
          </form>

          {data.map((item, index) => (
            <div
              key={index}
              className={`todo-item ${item.completed ? "completed" : ""}`}
            >
              <Checkbox
                lineThrough
                defaultSelected={data[index].completed}
                onClick={() => {
                  update(item.id, {
                    ...item,
                    completed: !item.completed,
                  });
                }}
                id={`checkbox-${index}`}
                css={{
                  width: "100%",
                }}
              >
                <Text color="#FFFF">{item.text}</Text>
              </Checkbox>

              <Button
                bordered
                color="error"
                auto
                onClick={() => remove(item.id)}
              >
                Remove item
              </Button>
            </div>
          ))}
          <Card css={{ $$cardColor: "#F21E1E", borderRadius: "8px"}}>
            <Text color="#FFFF" >{errorMessage}</Text>
          </Card>
        </div>
      )}
    </div>
  );
}

export default App;
