import React from "react";
import { registrationFetch } from "../../../allFetch/registrationFetch";

class Registration extends React.Component {
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

  createUser = async ( ) => {
    let result = await registrationFetch(this.state.email, this.state.password);
    this.setState({
      status: result.registration
    });
  };

  render() {
    return (
      <div className="reg">
        <input
          name="email"
          placeholder="Email"
          onChange={e => this.createData(e)}
        />
        <br />
        <input
          name="password"
          placeholder="Password"
          onChange={e => this.createData(e)}
        />
        <br />
        <button
          onClick={async () => {
            await this.createUser();
            if (this.state.status) {
              this.props.history.push(`/login`);
            } else {
              document.querySelector(".reg").innerHTML +=
                "Пользователь с таким email уже существует";
            }
          }}
        >
          Регистрация
        </button>
      </div>
    );
  }
}

export default Registration;
