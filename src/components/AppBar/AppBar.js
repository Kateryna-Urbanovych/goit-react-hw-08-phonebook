import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import s from './AppBar.module.css';

const AppBar = () => {
    return (
        <header className={s.header}>
            <Navigation />
            <AuthNav />
            <UserMenu />
        </header>
    );
};

export default AppBar;
