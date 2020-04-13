import React from "react";
import { connect } from "react-redux";
import { addUser } from "../../../redux/action";
import { withRouter } from "react-router-dom";
import { loginFetch } from "../../../allFetch/loginFetch";
import classes from "../auth.module.css"



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
      <div className="row" style={{ marginTop: "15vh", marginBottom: "20vh" }}>
        <div className="">
        <div className={classes.authcard}>
      <div className="log">
        <span className={classes.authcardTitle}>Авторизация</span>
        <div className="input-field">
        <input
          required
          className="validate"
          className={classes.authInput}
          type="email"
          name="email"
          placeholder="Email"
          onChange={e => this.createData(e)}
        />
        </div>

        <div className="input-field">
        <input
          required
          type="password"
          className="validate"
          className={classes.authInput}
          name="password"
          placeholder="Password"
          onChange={e => this.createData(e)}
        />
        </div>

        <button
          className={classes.authcardButton}
          onClick={async () => {
            await this.userAuthorization();
            if (this.state.status) {
              this.props.addUser(this.state.email);
              localStorage.setItem("email", this.state.email);
              this.props.history.push(`/`);
            } else {
              document.querySelector(".log").innerHTML += "<b>Неверные данные</b>";
            }
          }}
        >
          Войти
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
