import styles from './index.module.css';

const Header = () => {

    return <header className={styles.header}>
        <h1>多喝热水</h1>
        <nav className={styles.nav}>
        <a href="/">首页</a>
        <a href="/about">关于我</a>
        </nav>
    </header>
};

export default Header;