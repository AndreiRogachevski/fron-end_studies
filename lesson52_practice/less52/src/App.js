import { useState } from "react";
import Form from "./Form.js";
import Messages from "./Messages.js";
import Auth from "./Auth.js";
function App() {
  const [user, setUser] = useState();
 
  return (
    <div>
      {!user && <Auth onSelectUser={setUser} />}
      {user && <Messages />}
      {user && <Form userId={user.id}/>}
    </div>
  );
}

export default App;
