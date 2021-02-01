import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from 'redux/auth';
import s from './UserMenu.module.css';
import userDefaultAvatar from 'images/user-default-avatar.png';
import { authOperations } from 'redux/auth';

const UserMenu = () => {
    const userName = useSelector(authSelectors.getUserName);
    const dispatch = useDispatch();

    return (
        <div className={s.container}>
            <img
                src={userDefaultAvatar}
                alt="Аватар"
                width="32"
                className={s.avatar}
            />
            <span className={s.name}>Добро пожаловать, {userName}</span>
            <button
                type="button"
                onClick={() => dispatch(authOperations.logOut())}
            >
                Выйти
            </button>
        </div>
    );
};

export default UserMenu;
