import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends React.Component {
  render() {
    const { emailUser } = this.props;
    return (
      <header>
        <div>
          <p data-testid="email-field">{ emailUser }</p>
          <p data-testid="total-field">0</p>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  emailUser: PropTypes.string,
}.isRequired;
