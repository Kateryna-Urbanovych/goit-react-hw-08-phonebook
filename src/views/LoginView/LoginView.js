import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './LoginView.module.css';
// import { authOperations } from 'redux/auth';

const LoginView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        const { name, value } = target;

        switch (name) {
            case 'email':
                setEmail(value);
                break;

            case 'password':
                setPassword(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        // dispatch(authOperations.logIn({ email, password }));
        reset();
    };

    const reset = () => {
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <h1 className={s.title}>Страница логина</h1>

            <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
                <label className={s.label}>
                    Почта
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>
                <label className={s.label}>
                    Пароль
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                <button
                    type="submit"
                    disabled={email === '' || password === ''}
                >
                    Войти
                </button>
            </form>
        </>
    );
};

export default LoginView;
