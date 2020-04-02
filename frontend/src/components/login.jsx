import React from "react";
import { connect } from "react-redux";
import { addUser } from "../redux/action";
import { withRouter } from "react-router-dom";
import { loginFetch } from "../allFetch/loginFetch";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      status: false
    };
  }

  createData(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  userAuthorization = async () => {
    let result = await loginFetch(this.state.email, this.state.password);
    this.setState({
      status: result.logIn
    });
  };

  render() {
    return (
      <div className="log">
        <input
          name="email"
          placeholder="Email"
          onChange={e => this.createData(e)}
        ></input>
        <br />
        <input
          name="password"
          placeholder="Password"
          onChange={e => this.createData(e)}
        ></input>
        <br />
        <button
          onClick={async () => {
            await this.userAuthorization();
            if (this.state.status) {
              this.props.addUser(this.state.email);
              this.props.history.push(`/account`);
            } else {
              document.querySelector(".log").innerHTML += "Неверные данные";
            }
          }}
        >
          Авторизация
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addUser: email => dispatch(addUser(email))
});

export default withRouter(connect(null, mapDispatchToProps)(Login));
