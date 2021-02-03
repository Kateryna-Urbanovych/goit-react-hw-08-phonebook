import s from './HomeView.module.css';
import phoneBookHome from 'images/phone-book.jpg';

const HomeView = () => {
    return (
        <div className={s.container}>
            <h1 className={s.title}>Телефонная книга</h1>
            <img
                src={phoneBookHome}
                alt="Главная страница нашего сервиса"
                width="600"
            />
        </div>
    );
};

export default HomeView;
