import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from '../../components/SearchForm/SearchForm'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { resetSearchValue } from '../../redux/searchStringReducer';
import { useParams, Navigate } from 'react-router';
import { getListById } from '../../redux/listsReducer';
import { getColumnsByList } from '../../redux/columnsReducer';


const List = () => {

    const dispatch = useDispatch();
    const { listId } = useParams();

    const listData = useSelector(state => getListById(state, listId));
    const columns = useSelector(state => getColumnsByList(state, listId));

    useEffect(() => {
      dispatch(resetSearchValue());
  }, [dispatch]);


  if(!listData) return <Navigate to="/" />;
    return (
        <div className={styles.list}>
          <header className={styles.header}>
            <h2 className={styles.title}>{listData.title}<span>soon!</span></h2>
          </header>
          <p className={styles.description}> {listData.description}</p>
          <SearchForm />
          <section className={styles.columns}>
            {columns.map(column =>
              <Column
                key={column.id}
                {...column}  />
            )}
          </section>
          <ColumnForm listId={listId} />
        </div>
      );
};

export default List;