import { useState } from "react";

export function Button(name) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        className="RevealButton"
        onClick={() => {
          setShow(!show);
        }}
      >
        {!show ? name : "Esconder"}
      </button>
      {show ? <p>Hello World!</p> : null}
    </div>
  );
}
