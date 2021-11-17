import React, { useEffect, useState } from 'react';
import { authService } from "fbase";
import AppRouter from 'components/Router';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });

    console.log(init);
  }, []);

  return (
    <>

      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : 'Initailizing...'}
      <footer>&copy;  {new Date().getFullYear()} Nwitter</footer>
    </>

  );
}

export default App;
