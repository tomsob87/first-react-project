import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listsReducer';
import columnsReducer from './columnsReducer';
import cardsReducer from './cardsReducer';
import searchStringReducer from './searchStringReducer';

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchValue: searchStringReducer
}

const reducer = combineReducers(subreducers);

// const reducer = (state, action) => {
//   const newState = {
//     lists: listsReducer(state.lists, action),
//     columns: columnsReducer(state.columns, action),
//     cards: cardsReducer(state.cards, action),
//     searchValue: searchStringReducer(state.searchValue, action)
//   };

//   return newState;
// };


// const reducer = (state = initialState, action) => {

//     switch(action.type) {
//         case 'ADD_COLUMN':
//             return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
//         case 'ADD_CARD':
//             return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};
//         case 'SEARCH_CARD':
//             return { ...state, searchValue: action.payload };
//         case 'RESET_SEARCH_VALUE':
//             return {
//                 ...state,
//                 searchValue: ''
//             };
//         case 'TOGGLE_CARD_FAVORITE':
//             return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };    
//         case 'ADD_LIST':
//           return { ...state, lists: [...state.lists, { ...action.payload, id: shortid() }]};    
//       default:
//         return state;
//     }
//   };
 

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

