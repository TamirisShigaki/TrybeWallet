import { GET_CURRENCIES, GET_EXPENSES, DELETE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: Object.keys(action.currencies)
        .filter((currency) => currency !== 'USDT'),
    };
  case GET_EXPENSES:
    return {
      ...state, expenses: [...state.expenses, action.expenses],
    };
  case DELETE_EXPENSES:
    return {
      ...state, expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  default:
    return state;
  }
};

export default wallet;
