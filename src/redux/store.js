import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import compareSearchValue from '../utils/strContains';

//selectors
export const getFilteredCards = ({cards, searchValue}, columnId) => cards
  .filter(card => card.columnId === columnId && compareSearchValue(card.title, searchValue));

export const getFavoriteCards = ({cards}) => cards.filter(card => card.isFavorite);  

export const getAllColumns = ({columns}) => columns;

export const getAllLists = ({lists}) => lists;

export const getListById = ({lists}, listId) => lists.find(list => list.id === listId) ;

export const getColumnsByList = ({columns}, listId) => columns.filter(column => column.listId === listId);

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCart = payload => ({ type: 'ADD_CARD', payload });
export const searchCard = payload => ({ type: 'SEARCH_CARD', payload });
export const resetSearchValue = () => ({type: 'RESET_SEARCH_VALUE'});
export const addList = payload => ({type: 'ADD_LIST', payload});
export const toggleCardFavorite = payload => ({type: 'TOGGLE_CARD_FAVORITE', payload});

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ADD_COLUMN':
            return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
        case 'ADD_CARD':
            return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};
        case 'SEARCH_CARD':
            return { ...state, searchValue: action.payload };
        case 'RESET_SEARCH_VALUE':
            return {
                ...state,
                searchValue: ''
            };
        case 'TOGGLE_CARD_FAVORITE':
            return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };    
        case 'ADD_LIST':
          return { ...state, lists: [...state.lists, { ...action.payload, id: shortid() }]};    
      default:
        return state;
    }
  };

  

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

