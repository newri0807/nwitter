import React, { useEffect, useState } from 'react';
import { authService } from "fbase";
import AppRouter from 'components/Router';
import { onAuthStateChanged, updateProfile } from "@firebase/auth";



function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  // 작성법 1.
  //  useEffect(() => {
  //   authService.onAuthStateChanged((user) => {
  //     if (user) {
  //       setIsLoggedIn(true);
  //       setUserObj(user);
  //     } else {
  //       setIsLoggedIn(false);
  //     }
  //     setInit(true);
  //     }); 
  //   }, []);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
    });
  };


  // 작성법 2. - 예외처리 추가
  // 이메일로 가입해서 로그인시 displayName이 null로 나와서 에러처리
  // useEffect(() => {
  //   onAuthStateChanged(authService, user => {
  //     if (user) {
  //       setIsLoggedIn(true);
  //       setUserObj({
  //         displayName: authService.currentUser.displayName
  //           ? authService.currentUser.displayName
  //           : 'Anonymous',
  //         uid: authService.uid,
  //       });
  //     } else {
  //       setIsLoggedIn(false);
  //     }

  //     setInit(true);
  //   })
  //}, []);




  return (
    <>

      {init ? <AppRouter
        refreshUser={refreshUser}
        isLoggedIn={Boolean(userObj)}
        userObj={userObj}
      /> : 'Initailizing...'}
      <footer>&copy;  {new Date().getFullYear()} Nwitter</footer>
    </>

  );
}

export default App;
