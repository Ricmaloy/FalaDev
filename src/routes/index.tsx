import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import { App } from './app.routes';
import { Auth } from './auth.routes';

export const Routes = () => {
    const isUserAuthenticated = true;
    const { user } = useAuth();

    return (
        <BrowserRouter>
            { user ?  <App/> : <Auth />}
        </BrowserRouter>
    )
}