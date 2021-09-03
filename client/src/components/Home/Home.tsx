import React, { useState } from 'react';

export function Home() {
  const [input, setInput] = useState({
    Username: '',
    Password: '',
  });

  function handleInput(event: any) {
    setInput({
      ...input,
      [event.target.name]: [event.target.value],
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    return;
  }

  console.log('input.Username', input.Username);
  console.log('input.Password', input.Password);

  return (
    <div>
      <div>Troquelcart</div>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label className="label">User: </label>
          <input
            className="User"
            type="text"
            name="Username"
            onChange={handleInput}
          ></input>
        </div>
        <div>
          <label className="label">Pass: </label>
          <input
            className="User"
            type="password"
            name="Password"
            onChange={handleInput}
          ></input>
        </div>
        <div>
          <button type="submit">Ingresar</button>
        </div>
      </form>
    </div>
  );
}
