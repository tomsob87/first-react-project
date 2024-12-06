import styles from './Card.module.scss'
import { toggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';

const Card = props => {

    const dispatch = useDispatch();

    const handleToggleFavorite = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id));
    }

    return (
        
        <li className={styles.card} >{props.title} 
        <span 
        
        className={`fa fa-star-o ${props.isFavorite ? styles.favorite : ''}`} 
        onClick={handleToggleFavorite}
        
        ></span>
        </li>
    );
};

export default Card;
