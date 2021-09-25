import { useState, createContext, useEffect, ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';
import { auth, database, firebase } from '../services/firebase';

type FirebaseUsers = Record<string, {
  id: string;
  name: string;
  avatar: string;
  occupation?: string | undefined;
  company?: string | undefined;
  contact: string;
}>

type User = {
    id: string;
    name: string;
    avatar: string;
    occupation?: string | undefined;
    company?: string | undefined;
    contact: string;
}
  
type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider( props: AuthContextProviderProps ) {
  const data = useAuth();
  const userData = data.user;
  
  
  const [user, setUser] = useState<User>();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        const { displayName, photoURL, uid, email } = user;
        
        if(!displayName || !photoURL || !email) {
          throw new Error('Missing information from Google Account!');
        };

        const usersRef = database.ref(`users`);
        usersRef.on('value', user => {

          const databaseUsers = user.val();
          const firebaseUsers: FirebaseUsers = databaseUsers ?? {};

          const parsedUsers = Object.entries(firebaseUsers).map(([key, value]) => {
            return {
              avatar: value.avatar,
              occupation: value.occupation,
              company: value.company,
              contact: value.contact,
              id: value.id,
              name: value.name
            }
          });

          const selectedUser = parsedUsers.filter(user => user.id === uid)[0];

          if(selectedUser?.company && selectedUser?.occupation) {
            setUser({
              id: uid,
              name: displayName,
              avatar: photoURL,
              occupation: selectedUser.occupation,
              company: selectedUser.company,
              contact: email
            })
          } else {
            setUser({
              id: uid,
              name: displayName,
              avatar: photoURL,
              occupation: undefined,
              company: undefined,
              contact: email
            })
          }

          
        })
        }
      });
  
      return() => {
        unsubscribe();
      }
    }, [userData]);
  
    async function signInWithGoogle() {
    
      const provider = new firebase.auth.GoogleAuthProvider();
  
      const result = await auth.signInWithPopup(provider);
  
      if(result.user) {
        const { displayName, photoURL, uid, email } = result.user;
  
        if(!displayName || !photoURL || !email) {
          throw new Error('Missing information from Google Account!');
        };

        const usersRef = database.ref(`users`);
        usersRef.on('value', user => {

          const databaseUsers = user.val();
          const firebaseUsers: FirebaseUsers = databaseUsers ?? {};

          const parsedUsers = Object.entries(firebaseUsers).map(([key, value]) => {
            return {
              avatar: value.avatar,
              occupation: value.occupation,
              company: value.company,
              contact: value.contact,
              id: value.id,
              name: value.name
            }
          });

          const selectedUser = parsedUsers.filter(user => user.id === uid)[0];
          
          if(selectedUser?.company && selectedUser?.occupation) {
            setUser({
              id: uid,
              name: displayName,
              avatar: photoURL,
              occupation: selectedUser.occupation,
              company: selectedUser.company,
              contact: email
            })
          } else {
            setUser({
              id: uid,
              name: displayName,
              avatar: photoURL,
              occupation: undefined,
              company: undefined,
              contact: email
            })
          }
          
        })
      }
    }

    async function signOut() {
      setUser(undefined)
      auth.signOut()
    }

    return (
      <AuthContext.Provider value={{ user, signInWithGoogle, signOut }}>
          {props.children}
      </AuthContext.Provider>
    );
}