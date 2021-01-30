import { Switch, Route } from 'react-router-dom';
import Container from 'components/Container';
import AppBar from 'components/AppBar';

// Статические импорты
import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import ContactsView from 'views/ContactsView';

const App = () => (
    <Container>
        {/* import {ToastContainer} from 'react-toastify'; */}
        {/* <ToastContainer /> */}
        <AppBar />
        <Switch>
            <Route exact path="/">
                <HomeView />
            </Route>
            <Route path="/register">
                <RegisterView />
            </Route>
            <Route path="/login">
                <LoginView />
            </Route>
            <Route path="/contacts">
                <ContactsView />
            </Route>
        </Switch>
    </Container>
);

export default App;
