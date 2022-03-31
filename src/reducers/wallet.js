import { WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return { ...state, currencies: action.value, expenses: action.value };
  default:
    return state;
  }
};

export default wallet;
