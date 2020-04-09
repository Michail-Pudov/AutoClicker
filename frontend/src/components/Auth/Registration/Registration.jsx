import React from "react";
import { registrationFetch } from "../../../allFetch/registrationFetch";


class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      status: false,
      invalid: '',
    };
  }

  createData(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  createUser = async () => {
    if (this.state.password.length > 5) {
      let result = await registrationFetch(this.state.email, this.state.password);
      this.setState({
        status: result.registration
      });
    } else {
      this.setState({
        invalid: "invalid"
      })
    }
  };

  render() {

    return (
      <div className="row" style={{ marginTop: "15vh", marginBottom: "20vh" }}>
        <div className="col s5 offset-s3">
          <div className="card grey lighten-4 ">
            <div className="reg card-content grey-text text-darken-4">
              <span className="card-title">Регистрация</span>
              <div className="input-field">
                <input
                  required
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
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={e => this.createData(e)}
                />
              </div>
                <button
                   className="btn grey lighten-4 grey-text text-darken-4"
                  onClick={async () => {
                    await this.createUser();
                    if ( this.state.status ) {
                      this.props.history.push(`/login`);
                    } else {
                      if (this.state.password.length <= 5) {
                        document.querySelector(".reg").innerHTML +=
                         " Пароль слишком короткий (мин: 6)"
                      } else {
                      document.querySelector(".reg").innerHTML +=
                          "Пользователь с таким email уже существует"
                    }
                  }}}
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
