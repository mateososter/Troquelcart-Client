import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { adminSession, userSession } from '../../actions';
import { rootState } from '../../constants/types';

export function Login() {
  /*   const adminLogged = useSelector((state: rootState) => state.adminSession);
  const userLogged = useSelector((state: rootState) => state.userSession); */
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    Username: '',
    Password: '',
  });
  const history = useHistory();

  /*   console.log('adminLogged: ', adminLogged); */

  function handleInput(event: any) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    event.stopPropagation();
    // Log in as ADMIN
    if (input.Username === 'admin' && input.Password === '1234') {
      console.log('Entre a ADMIN');
      dispatch(adminSession());
      history.push('/home');
      return;
    }
    // Log in as USER
    if (input.Username === 'user' && input.Password === '1234') {
      dispatch(userSession());
      console.log('Entro al USER');
      history.push('/home');
      return;
    }
    // Failed log in
    alert('Datos incorrectos, intente nuevamente');
    console.log(input.Username);
    console.log(input.Password);
    return;
  }

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
            /* type="password" */
            type="text"
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
