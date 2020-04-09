import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { newReviewFetch } from "../../../../allFetch/newReview";
import { getAllReviewInDatabaseSaga } from "../../../../redux/action";
class NewReviews extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      review: "",
      vacancy: {
        name: "",
        employer: {
          name: "",
          alternate_url: ""
        }
      }
    };
  }

  async componentDidMount() {
    let oldUrl = this.props.urlNewReviews.split("/");
    let idVacancy = oldUrl.pop();
    let response = await fetch(`https://api.hh.ru/vacancies/${idVacancy}`);
    let result = await response.json();
    delete result.branded_description;
    if (result.errors || result.items) {
      console.log("неверный url");
    } else {
      this.setState({
        vacancy: result
      });
    }
  }

  async writeReviewInDatabase() {
    let response = await newReviewFetch(
      localStorage.email,
      this.state.review,
      this.state.vacancy
    );
    this.props.getAllReviewInDatabaseSaga();
  }

  writeReview(e) {
    this.setState({
      review: e.target.value
    });
  }

  render() {
    const { vacancy } = this.state;

    return (
      <div>
        <h2>Создание нового отзыва:</h2>
        <h5>Работодатель:</h5>
        <a href={vacancy.employer.alternate_url}>{vacancy.employer.name}</a>
        <h5>Вакансия:</h5>
        <a href={this.props.urlNewReviews}>{vacancy.name}</a>
        <h5>Отзыв:</h5>
        <input type="text" onChange={e => this.writeReview(e)} />
        <Link to="/reviews" onClick={() => this.writeReviewInDatabase()}>
          Создать
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  email: state.email,
  urlNewReviews: state.urlNewReviews
});

const mapDispatchToProps = {
  getAllReviewInDatabaseSaga
};

export default connect(mapStateToProps, mapDispatchToProps)(NewReviews);
