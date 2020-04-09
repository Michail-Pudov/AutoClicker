import React from "react";
import { connect } from "react-redux";
import { addUser } from "../../../redux/action";
import { withRouter } from "react-router-dom";
import { loginFetch } from "../../../allFetch/loginFetch";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      status: false,
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
      status: result.logIn,
    });
  };

  render() {
    return (
      <div className="row" style={{marginTop: "7vh"}}>
        <div className="col s5 offset-s3">
        <div className="card grey lighten-4 ">
      <div className="log card-content grey-text text-darken-4">
        <span className="card-title">Авторизация</span>
        <div className="input-field">
        <input
          className="validate"
          name="email"
          placeholder="Email"
          onChange={e => this.createData(e)}
        />
        </div>

        <div className="input-field">
        <input
          type="password"
          className="validate"
          name="password"
          placeholder="Password"
          onChange={e => this.createData(e)}
        />
        </div>

        <button
          className="btn grey lighten-4 grey-text text-darken-4"
          onClick={async () => {
            await this.userAuthorization();
            if (this.state.status) {
              this.props.addUser(this.state.email);
              localStorage.setItem("email", this.state.email);
              this.props.history.push(`/`);
            } else {
              document.querySelector(".log").innerHTML += "Неверные данные";
            }
          }}
        >
          Авторизация
        </button>
          </div>
        </div>
       </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addUser: email => dispatch(addUser(email))
});

export default withRouter(connect(null, mapDispatchToProps)(Login));
