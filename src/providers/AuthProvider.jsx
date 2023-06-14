import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signIn = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
  const profile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}

  const logOut =() =>{
    setLoading(true);
    return signOut(auth)
  }

  useEffect(() => {
   const unSub = onAuthStateChanged(auth,currentUser =>{ 
      setUser(currentUser);
      console.log('curUser',currentUser)
      setLoading(false);
    });
    return () =>{
      return unSub();
    }
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,signIn,
    logOut,profile
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
