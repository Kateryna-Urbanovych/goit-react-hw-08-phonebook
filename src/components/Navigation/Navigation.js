import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
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
            <NavLink
                to="/contacts"
                className={s.link}
                activeClassName={s.activeLink}
            >
                Контакты
            </NavLink>
        </nav>
    );
};

export default Navigation;