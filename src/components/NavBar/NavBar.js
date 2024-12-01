import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';


const  NavBar = () => {
    return (
        <nav>
            <Container>
                <div className={styles.main__nav}>
                    <div className={styles.icon}><span className={'fa fa-tasks'}></span>
                    </div>
                    <div className={styles.top__menu}>
                        <ul>
                            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
                        </ul>
                    </div>
                </div>
            </Container>    
        </nav>
    );
}

export default NavBar;