import { h, render } from "preact";
import { useState, useEffect } from "preact/hooks";

const App = () => {
  const [textArr, setTextArr] = useState([">"]);
  const mesagges = [];

  useEffect(() => {}, [mesagges]);

  return (
    <div id="app">
      <div id="box">
        {textArr.map((val) => (
          <p>{val}</p>
        ))}
      </div>
    </div>
  );
};

render(<App />, window.preact_root);
