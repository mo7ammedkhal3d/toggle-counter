import { useRef } from 'react';
import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authentication';

const Auth = () => {

  const emailRef = useRef();
  const passwordRef = useRef();

  const authDispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    if(emailRef.current.value !== '' && passwordRef.current.value !== ''){
      authDispatch(authActions.login());

      emailRef.current.value = '';
      passwordRef.current.value = '';
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input ref={emailRef} type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input ref={passwordRef} type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
