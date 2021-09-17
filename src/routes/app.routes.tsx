import { Switch, Route} from 'react-router-dom';
import { Contacts } from '../pages/Contacts';
import { Dashboard } from '../pages/Dashboard';
import { SignIn } from '../pages/SignIn';

export const App = () => {
    return (
        <Switch>
            <Route path="/" component={SignIn} exact/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/contacts" component={Contacts}/>
        </Switch>
    )
}