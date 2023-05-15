import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { NextUIProvider } from "@nextui-org/react";

import { CounterProvider } from "./context/CounterProvider";
import { CounterUseSelectorProvider } from "./context/CounterUseSelectorProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider>
      <CounterUseSelectorProvider>
        <CounterProvider>
          <App />
        </CounterProvider>
      </CounterUseSelectorProvider>
    </NextUIProvider>
  </React.StrictMode>
);
