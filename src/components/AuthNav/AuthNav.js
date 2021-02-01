import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
    return (
        <div>
            <NavLink
                to="/register"
                className={s.link}
                activeClassName={s.activeLink}
            >
                Регистрация
            </NavLink>
            <NavLink
                to="/login"
                className={s.link}
                activeClassName={s.activeLink}
            >
                Логин
            </NavLink>
        </div>
    );
};

export default AuthNav;
