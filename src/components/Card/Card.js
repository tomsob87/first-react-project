import styles from './Card.module.scss'
import { toggleCardFavorite, deleteCard } from '../../redux/cardsReducer';
import { useDispatch } from 'react-redux';

const Card = props => {

    const dispatch = useDispatch();

    const handleToggleFavorite = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id));
    }

    const handleDeleteCard = e => {
        e.preventDefault();
        dispatch(deleteCard(props.id));
    }

    return (
        
        <li className={styles.card} >
        <p>{props.title} </p>
        <span className={`fa fa-star-o ${props.isFavorite ? styles.favorite : ''}`} 
        onClick={handleToggleFavorite} ></span>
        <span className={'fa fa-trash-o'} onClick={handleDeleteCard}></span>
        </li>
    );
};

export default Card;
