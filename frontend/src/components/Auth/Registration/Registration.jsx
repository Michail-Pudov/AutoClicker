import React from "react";
import { registrationFetch } from "../../../allFetch/registrationFetch";
import classes from "../auth.module.css";

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      status: false,
      invalid: ""
    };
  }

  createData(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  createUser = async () => {
    if (this.state.password.length > 5) {
      let result = await registrationFetch(
        this.state.email,
        this.state.password
      );
      this.setState({
        status: result.registration
      });
    } else {
      this.setState({
        invalid: "invalid"
      });
    }
  };

  render() {
    return (
      <div className={classes.authcardContainer}>
        <div className="">
          <div className={classes.authcard}>
            <div className="reg">
              <span className={classes.authcardTitle}>Регистрация</span>
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
                  className={this.state.invalid}
                  required
                  className="validate"
                  className={classes.authInput}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={e => this.createData(e)}
                />
              </div>
              <button
                className={classes.authcardButton}
                onClick={async () => {
                  await this.createUser();
                  if (this.state.status) {
                    this.props.history.push(`/login`);
                  } else {
                    if (this.state.password.length <= 5) {
                      document.querySelector(".reg").innerHTML +=
                        " Пароль слишком короткий (мин: 6)";
                    } else {
                      document.querySelector(".reg").innerHTML +=
                        "Пользователь с таким email уже существует";
                    }
                  }
                }}
              >
                Регистрация
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
