import '../../styles/settings.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import styles from './Favorite.module.scss';

const Favorite = props => {

    const favoriteCards = useSelector(state => getFavoriteCards(state, props.id));

    return (
        <>
        <PageTitle>Favorite</PageTitle>
        <p>Lorem ipsum.</p>
        <article className={styles.column}>
            <ul className={styles.cards}>
                {favoriteCards.map(card => <Card key={card.id} id={card.id} title={card.title} />)}
            </ul>
        </article>
        </>

    );
};

export default Favorite;