import { Switch, Route} from 'react-router-dom';
import { Contacts } from '../pages/Contacts';
import { Dashboard } from '../pages/Dashboard';

export const App = () => {
    return (
        <Switch>
            <Route path="/" component={Dashboard} exact/>
            <Route path="/contacts" component={Contacts}/>
        </Switch>
    )
}