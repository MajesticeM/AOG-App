import React, { createContext } from 'react';
import { auth, db, storage } from './firebaseConfig';

export const FirebaseContext = createContext({ auth: null, db: null, storage: null });

export function FirebaseProvider({ children }) {
  return (
    <FirebaseContext.Provider value={{ auth, db, storage }}>
      {children}
    </FirebaseContext.Provider>
  );
}
