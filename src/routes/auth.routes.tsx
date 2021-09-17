import { Switch, Route} from 'react-router-dom';
import { SignIn } from '../pages/SignIn';

export const Auth = () => {
    return (
        <Switch>
            <Route path="/" component={SignIn} exact/>
            <Route path='/*' component={SignIn} />
        </Switch>
    )
}