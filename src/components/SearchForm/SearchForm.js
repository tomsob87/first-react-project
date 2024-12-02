import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchCard } from '../../redux/store';


const SearchForm = () => {

    const dispatch = useDispatch();

    const [searchInput, setSearchInput] = useState('');
    

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(searchCard(searchInput));
        setSearchInput('');  
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput 
            placeholder='Search...' 
            value={searchInput}
            onChange={e => setSearchInput(e.target.value) } />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;