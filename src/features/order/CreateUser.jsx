import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../ui/Button";
import { updateName } from "../user/UserSlice.jsx";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  // it is not a good practise to directly use redux with input fields, it is recommended to use it on formsubmit or btn
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-6 text-lg text-stone-700">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-7 w-72"
      />

      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
