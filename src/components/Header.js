import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends React.Component {
  handleTotal = () => {
    const { getExpenses } = this.props;
    let total = 0;
    if (getExpenses.length > 0) {
      getExpenses.forEach((item) => {
        const converter = item.exchangeRates[item.currency].ask;
        total += item.value * converter;
      });
    }
    return total.toFixed(2);
  }

  render() {
    const { emailUser } = this.props;
    return (
      <header>
        <div>
          <p data-testid="email-field">{ emailUser }</p>
          <p data-testid="total-field">
            { this.handleTotal() }
          </p>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  getExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  emailUser: PropTypes.string,
  getExpenses: PropTypes.func,
}.isRequired;
