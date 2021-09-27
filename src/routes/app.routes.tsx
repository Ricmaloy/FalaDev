import { Switch, Route} from 'react-router-dom';
import { Analytics } from '../pages/Analytics';
import { Bookmarkeds } from '../pages/Bookmarkeds';
import { Configurations } from '../pages/Configurations';
import { Contacts } from '../pages/Contacts';
import { Dashboard } from '../pages/Dashboard';
import { Help } from '../pages/Help';
import { Messages } from '../pages/Mensagens';
import { Notifications } from '../pages/Notifications';

export const App = () => {
    return (
        <Switch>
            <Route path="/" component={Dashboard} exact/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/notifications" component={Notifications}/>
            <Route path="/messages" component={Messages}/>
            <Route path="/bookmarked" component={Bookmarkeds}/>
            <Route path="/configurations" component={Configurations}/>
            <Route path="/help" component={Help}/>
            <Route path="/analytics" component={Analytics}/>
            <Route path="/*" component={Dashboard}/>
        </Switch>
    )
}