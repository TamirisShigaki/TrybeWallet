import fetchCurrencies from '../service/fetchCurrencies';

export const USER = 'USER';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_EXPENSES = 'GET_EXPENSES';

export function actionUser(value) {
  return {
    type: USER,
    value,
  };
}

export function actionCURRENCIES(currencies) {
  return {
    type: GET_CURRENCIES,
    currencies,
  };
}

export function actionExpenses(expenses) {
  return {
    type: GET_EXPENSES,
    expenses,
  };
}

export function currenciesThunk() {
  return async (dispatch) => {
    try {
      const response = await fetchCurrencies();

      dispatch(actionCURRENCIES(response));
    } catch (error) {
      console.log(error);
    }
  };
}
