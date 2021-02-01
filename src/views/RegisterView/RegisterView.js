import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './RegisterView.module.css';
import { authOperations } from 'redux/auth';

const RegisterView = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        const { name, value } = target;

        switch (name) {
            case 'name':
                setName(value);
                break;

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
        dispatch(authOperations.register({ name, email, password }));
        reset();
    };

    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <h1>Страница регистрации</h1>

            <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
                <label className={s.label}>
                    Имя
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </label>
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
                    disabled={name === '' || email === '' || password === ''}
                >
                    Зарегистрироваться
                </button>
            </form>
        </>
    );
};

export default RegisterView;
