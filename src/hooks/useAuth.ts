import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

export function useAuth() {
    const value = useContext(AuthContext);  

    return value;
}