import '../../styles/settings.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsReducer';
import styles from './Favorite.module.scss';
import SearchForm from '../SearchForm/SearchForm';

const Favorite = props => {

    const favoriteCards = useSelector(state => getFavoriteCards(state, props.id));
    // console.log('Favorite Cards: ', favoriteCards);

    return (
        <>
            <PageTitle>Favorite</PageTitle>
            <p className={styles.description}>Lorem ipsum.</p>

            {favoriteCards.length === 0 ? (
                <p className={styles.description}>No favorite cards to show</p>
            ) : (
                <article className={styles.column}>
                    <h2 className={styles.title}>My Favorite</h2>
                    <ul className={styles.cards}>
                        {favoriteCards.map(card => 
                        <Card key={card.id} 
                        id={card.id} 
                        title={card.title} 
                        isFavorite={card.isFavorite}
                        />)}
                    </ul>
                </article> 
            )}
    
        </>

    );
};

export default Favorite;