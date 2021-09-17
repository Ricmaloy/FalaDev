import { BrowserRouter } from 'react-router-dom';

import { App } from './app.routes';
import { Auth } from './auth.routes';

export const Routes = () => {
    const isUserAuthenticated = true;

    return (
        <BrowserRouter>
            { isUserAuthenticated ?  <App/> : <Auth />}
        </BrowserRouter>
    )
}