import { useState, useEffect } from "react";
export default function Messages() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    async function LoadData() {
      const responce = await fetch("http://192.168.0.148:3000/messages");
      const json = await responce.json();
      setMessages(json);
    }
    setInterval(LoadData, 2000);
  }, []);
  return (
    <ul>
      {messages.map((message) => (
        <li key={message.time}>
          <img src={message.user?.avatar} alt="avatar" />
          <time>{message.time}</time>
          <p>{message.text}</p>
        </li>
      ))}
    </ul>
  );
}
