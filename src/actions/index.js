export const USER = 'USER';
export const WALLET = 'WALLET';

export function actionUser(value) {
  return {
    type: USER,
    value,
  };
}

export function actionWallet(value) {
  return {
    type: WALLET,
    value,
  };
}
