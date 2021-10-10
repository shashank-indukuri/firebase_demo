import { React, useState, useEffect } from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import Welcome from "./Welcome";

function App() {
  const [user, setUser] = useState(null);

  //Google Authentication implemented for Login
  const handleLogin = () => {
    signInWithPopup(auth, provider);
  };

  //LogOut
  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log("signed out");
      setUser(null);
    })
  };
  //Saving the username after sucessfull login
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user !== null) {
        setUser(user.displayName);
      }
    });
  }, []);
  
  return (
    <div className="App">
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {user && <Welcome user={user} />}
    </div>
  );
}

export default App;
