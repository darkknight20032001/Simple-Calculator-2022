import React, { useState } from "react";

function ButtonNumber({ Toggle, setToggle }) {
  const [Result, setResult] = useState(``);
  const ClickHandler = (event) => {
    setResult(Result.concat(event.target.value));
  };
  const ClearDisplay = () => {
    setResult("");
  };
  const Calculate = () => {
    const myAns = eval(Result).toString();
    if (myAns !== `-Infinity` || myAns !== `Infinity`) {
      setResult(myAns);
    } else {
      setResult(`Error`);
    }
  };
  const Slicing = () => {
    setResult(Result.slice(0, -1));
  };
  const ChangeSign = () => {
    const myNum = -1 * eval(Result);
    const myAns = myNum.toString();

    if (myAns !== `Infinity` || myAns !== `-Infinity`) {
      setResult(myAns);
    } else {
      setResult(`Error`);
    }
  };
  return (
    <div className={Toggle ? `calc-toggle` : `calc`}>
      <input type="text" id="answer" value={Result} />
      <input
        type="button"
        value="9"
        className="button"
        onClick={ClickHandler}
        readOnly
      />
      <input
        type="button"
        value="8"
        className="button"
        onClick={ClickHandler}
        readOnly
      />
      <input
        type="button"
        value="7"
        className="button"
        onClick={ClickHandler}
        readOnly
      />
      <input
        type="button"
        value="6"
        className="button"
        onClick={ClickHandler}
        readOnly
      />
      <input
        type="button"
        value="5"
        className="button"
        onClick={ClickHandler}
        readOnly
      />
      <input
        type="button"
        value="4"
        className="button"
        onClick={ClickHandler}
        readOnly
      />
      <input
        type="button"
        value="3"
        className="button"
        onClick={ClickHandler}
        readOnly
      />
      <input
        type="button"
        value="2"
        className="button"
        onClick={ClickHandler}
        readOnly
      />
      <input
        type="button"
        value="1"
        className="button"
        onClick={ClickHandler}
        readOnly
      />
      <input
        type="button"
        value="0"
        className="button"
        onClick={ClickHandler}
        readOnly
      />
      <input
        type="button"
        value="."
        className="button"
        onClick={ClickHandler}
        readOnly
      />
      <input
        type="button"
        value="+"
        className="button"
        onClick={ClickHandler}
        readOnly
      />
      <input
        type="button"
        value="-"
        className="button"
        onClick={ClickHandler}
        readOnly
      />
      <input
        type="button"
        value="*"
        className="button"
        onClick={ClickHandler}
        readOnly
      />
      <input
        type="button"
        value="/"
        className="button"
        onClick={ClickHandler}
        readOnly
      />
      <input
        type="button"
        value="%"
        className="button"
        onClick={ClickHandler}
        readOnly
      />
      <input
        type="button"
        value="Backspace"
        className="button button1"
        onClick={Slicing}
        readOnly
      />
      <input
        type="button"
        value="Clear"
        className="button button1"
        onClick={ClearDisplay}
        readOnly
      />
      <input
        type="button"
        value="="
        className="button button1"
        onClick={Calculate}
        readOnly
      />
      <input
        type="button"
        value="+/-"
        className="button button1"
        onClick={ChangeSign}
        readOnly
      />
      <button
        title={Toggle ? `Light` : `Dark`}
        className="Toggling"
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          setToggle(!Toggle);
        }}
      >
        {Toggle ? `🌕` : `🌑`}
      </button>
    </div>
  );
}

export default ButtonNumber;
