import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currenciesThunk } from '../actions/index';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { currencies } = this.props;
    currencies();
  }

  render() {
    return (
      <Header />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  currencies: (currencies) => dispatch(currenciesThunk(currencies)),
});

export default connect(null, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  currencies: PropTypes.func,
}.isRequired;
