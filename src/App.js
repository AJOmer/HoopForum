import React, { useEffect } from 'react';
import Quora from './components/Quora/Quora';
import { selectUser, login, logout } from './features/userSlice';
import Login from './components/auth/Login'
import { useSelector, useDispatch } from 'react-redux';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout())
      }
      console.log(authUser);
    });
  }, [dispatch])

  return (
    <div className="App">
      {
        user ? (<Quora/>) : (<Login/>)
      }

    </div>
  );
}

export default App;



// LINE 12: ternary expression if a user is logged in, display quora page otherwise login page \\