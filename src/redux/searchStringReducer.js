import compareSearchValue from '../utils/strContains';

//selectors
export const getFilteredCards = ({cards, searchValue}, columnId) => cards
  .filter(card => card.columnId === columnId && compareSearchValue(card.title, searchValue));

//actions
const createActionName = actionName => `app/cards/${actionName}`;
const SEARCH_CARD = createActionName('SEARCH_CARD');
const RESET_SEARCH_VALUE = createActionName('RESET_SEARCH_VALUE');

//action creators
export const searchCard = payload => ({ type: SEARCH_CARD, payload });
export const resetSearchValue = () => ({type: RESET_SEARCH_VALUE});

const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case SEARCH_CARD:
        return action.payload;
      case RESET_SEARCH_VALUE:
        return '';
      default:
        return statePart;
    }
  }

  export default searchStringReducer;