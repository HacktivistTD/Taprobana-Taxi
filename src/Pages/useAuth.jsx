// src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import { auth } from '../firebase'; // Import your Firebase auth instance

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return { user };
};

export default useAuth;
