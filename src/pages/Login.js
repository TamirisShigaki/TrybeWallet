import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      btnDisable: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.validateInput);
  }

  validateInput = () => {
    // validação de e-mail - https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const { email, password } = this.state;
    const emailRegex = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+/i;
    const num = 6;
    if (emailRegex.test(email) && password.length >= num) {
      this.setState({ btnDisable: false });
    } else {
      this.setState({ btnDisable: true });
    }
  }

 handleClick = () => {
   const { emailToStore, history } = this.props;
   const { email } = this.state;
   emailToStore(email);
   history.push('/carteira');
 }

 render() {
   const { email, password, btnDisable } = this.state;
   return (
     <div>
       <form>
         <label htmlFor="email-input">
           <input
             type="email"
             data-testid="email-input"
             id="email-input"
             name="email"
             value={ email }
             placeholder="E-mail"
             onChange={ this.handleChange }
           />
         </label>

         <label htmlFor="password-input">
           <input
             type="password"
             data-testid="password-input"
             id="password-input"
             name="password"
             value={ password }
             placeholder="Senha"
             onChange={ this.handleChange }
           />
         </label>

         <button
           type="submit"
           disabled={ btnDisable }
           onClick={ this.handleClick }
         >
           Entrar
         </button>
       </form>
     </div>);
 }
}

const mapDispatchToProps = (dispatch) => ({
  emailToStore: (value) => dispatch(actionUser(value)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  emailToStore: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

// PropTypes.shape - https://stackoverflow.com/questions/45764746/react-proptypes-objectof-vs-shape#:~:text=on%20this%20post.-,PropTypes.,are%20all%20the%20same%20type.&text=(PropTypes.number)-,PropTypes.,and%20may%20represent%20different%20types.
