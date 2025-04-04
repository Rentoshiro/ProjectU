import { render } from "react-dom";
import { Counter } from "./components/Counter";

render(
  <>
    <h1>Hello, world!qq</h1>
    <Counter />
  </>,
  document.getElementById("root" as string) as HTMLElement
);
