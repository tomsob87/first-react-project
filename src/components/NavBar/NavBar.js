import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const  NavBar = () => {
    return (
        <nav>
            <Container>
                <div className={styles.main__nav}>
                    <div className={styles.icon}><span className={'fa fa-tasks'}></span>
                    </div>
                    <div className={styles.top__menu}>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/favorite">Favorite</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </div>
                </div>
            </Container>    
        </nav>
    );
}

export default NavBar;