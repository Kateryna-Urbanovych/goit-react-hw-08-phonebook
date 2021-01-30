import userDefaultAvatar from 'images/user-default-avatar.png';
import s from './UserMenu.module.css';

const UserMenu = () => {
    return (
        <div className={s.container}>
            <img
                src={userDefaultAvatar}
                alt="Аватар"
                width="32"
                className={s.avatar}
            />
            <span className={s.name}>Добро пожаловать, User</span>
            {/* <span className={s.name}>Добро пожаловать, {name}</span> */}
            <button
                type="button"
                // onClick={() => dispatch(authOperations.logOut())}
            >
                Выйти
            </button>
        </div>
    );
};

export default UserMenu;
