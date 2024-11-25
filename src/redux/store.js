import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import compareSearchValue from '../utils/strContains';

//selectors
export const getFilteredCards = ({cards, searchValue}, columnId) => cards
  .filter(card => card.columnId === columnId && compareSearchValue(card.title, searchValue));

export const getAllColumns = ({columns}) => columns;

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCart = payload => ({ type: 'ADD_CARD', payload });
export const searchCard = payload => ({ type: 'SEARCH_CARD', payload });

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ADD_COLUMN':
            return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
        case 'ADD_CARD':
            return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};
        case 'SEARCH_CARD':
            return { ...state, searchValue: action.payload };
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

