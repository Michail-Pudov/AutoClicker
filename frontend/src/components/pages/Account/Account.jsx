import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { uploadUserJobsFetch } from "../../../allFetch/uploadUserJobsFetch";
import { getUserJobsSaga } from "../../../redux/action";

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    // let vacancies = await uploadUserJobsFetch(localStorage.email);
    // console.log(vacancies);
    this.props.getUserJobsSaga(localStorage.email);
  }

  render() {
    return (
      <>
        <div>
          <h2>Личный кабинет</h2>
        </div>
        <div>
          <Link to="/crm">Зайти в текущую базу</Link>
          <br></br>
          <b>Здесь будет статистика</b>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  email: state.email
});

const mapDispatchToProps = {
  getUserJobsSaga
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Account)
);
