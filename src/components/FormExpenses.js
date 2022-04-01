import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormExpenses extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <div>
          <label htmlFor="value-input">
            Valor
            <input
              type="text"
              data-testid="value-input"
              id="value-input"
            />
          </label>

          <label htmlFor="description-input">
            Descrição
            <input
              type="text"
              data-testid="description-input"
              id="description-input"
            />
          </label>

          <label htmlFor="currency">
            Moeda
            <select
              id="currency"
            >
              {
                currencies.map((currency, index) => (
                  <option key={ index } value={ currency }>{currency}</option>
                ))
              }
            </select>
          </label>

          <label htmlFor="method-pay">
            Forma de Pagamento
            <select
              data-testid="method-input"
              id="method-pay"
            >
              <option name="dinheiro">Dinheiro</option>
              <option name="credito">Cartão de crédito</option>
              <option name="dedito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag-input">
            Categoria
            <select
              data-testid="tag-input"
              id="tag-input"
            >
              <option name="alimentacao">Alimentação</option>
              <option name="lazer">Lazer</option>
              <option name="trabalho">Trabalho</option>
              <option name="transporte">Transporte</option>
              <option name="saude">Saúde</option>
            </select>
          </label>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(FormExpenses);

FormExpenses.propTypes = {
  currencies: PropTypes.string,
}.isRequired;
