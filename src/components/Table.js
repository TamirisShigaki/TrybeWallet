import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';
import './Table.css';

class Table extends React.Component {
  render() {
    const { expenses, expenseDelete } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>

        <tbody>
          {
            expenses.map((expense) => {
              const { id,
                value,
                description,
                currency,
                method,
                tag,
                exchangeRates,
              } = expense;
              const converter = (value * exchangeRates[currency].ask).toFixed(2);
              const currencyName = exchangeRates[currency].name.split('/');
              const cambio = exchangeRates[currency].ask;
              return (
                <tr key={ id } className="item-table">
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>{ Number(value).toFixed(2) }</td>
                  <td>{ currencyName[0] }</td>
                  <td>{ Number(cambio).toFixed(2) }</td>
                  <td>{ converter }</td>
                  <td>Real</td>
                  <td>
                    <button
                      data-testid="delete-btn"
                      type="button"
                      name="delete-btn"
                      id="delete-btn"
                      onClick={ () => expenseDelete(id) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  expenseDelete: (expenseId) => dispatch(deleteExpense(expenseId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.number,
  value: PropTypes.string,
  description: PropTypes.string,
  currency: PropTypes.string,
  method: PropTypes.string,
  tag: PropTypes.string,
  exchangeRates: PropTypes.object,
  expenseDelete: PropTypes.func,
}.isRequired;

// Table - https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/table
