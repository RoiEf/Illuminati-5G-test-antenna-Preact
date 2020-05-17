import { h, render } from "preact";
import { useState, useEffect } from "preact/hooks";

const App = () => {
  const [textArr, setTextArr] = useState([">"]);
  const mesagges = [
    "> line 1",
    "> line 2",
    "> line 3",
    "> line 4",
    "> line 5",
    "> line 6",
    "> line 7",
    "> line 8",
    "> line 9",
    "> line 10",
    "> line 11",
    "> line 12",
    "> line 13",
    "> line 14",
    "> line 15",
  ];
  let tempArr = [];
  let index = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      tempArr = [];
      for (let a = index; a < index + 7; a++) {
        tempArr.push(mesagges[a]);
      }
      tempArr.push(">_");
      if (index < 5) {
        index++;
      } else {
        index = 0;
      }
      setTextArr(tempArr);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
