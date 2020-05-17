import { h, render } from "preact";
import { useState, useEffect } from "preact/hooks";

const App = () => {
  const [textArr, setTextArr] = useState([">"]);
  const mesagges = [
    "> Cycle START",
    "> Searching...",
    "> Found 3 people",
    "> MAC ADDRESS 10BXFF33H5",
    "> Saveing data.",
    "> Updating Dada Base",
    "> Send Preamble 2400.5",
    "> Found MAC ADDRESS AA.49.CF.80.11x",
    "> Prepair Transmit",
    "> Transmitting Test Signal",
    "> Found 1 Device",
    "> Set Packat size = Jambo",
    "> line 13",
    "> line 14",
    "> line 15",
  ];
  let tempArr = [];
  let index = 0;
  let a = 0;
  let i = 1;
  useEffect(() => {
    const interval = setInterval(() => {
      tempArr = [];
      for (a; a < i; a++) {
        tempArr.push(mesagges[a]);
      }
      tempArr.push(">_");
      setTextArr(tempArr);
      i++;
      index++;
      if (index < 7) {
        a = 0;
      } else if (index >= 7) {
        a = index - 7;
        i = index;
      }
      if (index > mesagges.length) {
        index = 0;
        i = 1;
        a = 0;
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="app">
      <h1>5G System Logger</h1>
      <div id="box">
        {textArr.map((val) => (
          <p>{val}</p>
        ))}
      </div>
    </div>
  );
};

render(<App />, window.preact_root);
