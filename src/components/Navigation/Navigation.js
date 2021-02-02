import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { authSelectors } from 'redux/auth';

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <nav>
            <NavLink
                exact
                to="/"
                className={s.link}
                activeClassName={s.activeLink}
            >
                Главная
            </NavLink>
            {isLoggedIn && (
                <NavLink
                    to="/contacts"
                    className={s.link}
                    activeClassName={s.activeLink}
                >
                    Контакты
                </NavLink>
            )}
        </nav>
    );
};

export default Navigation;
