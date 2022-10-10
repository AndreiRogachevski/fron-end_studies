import { useState } from "react";
export default function Form(props) {
  const [text, setText] = useState();
  function sendMessage(e) {
    e.preventDefault();
    fetch("http://192.168.0.148:3000/messages", {
      method: "POST",
      body: JSON.stringify({
        text,
        user: props.userId,
      }),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    setText("");
  }
  return (
    <form onSubmit={sendMessage}>
      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            value={text}
            class="form-control"
          />
        </div>
        <div class="col-auto">
          <input type="submit" value="send" class="btn btn-primary" />
        </div>
      </div>
    </form>
  );
}
