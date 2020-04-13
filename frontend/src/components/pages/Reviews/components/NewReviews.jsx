import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link, withRouter, Redirect } from "react-router-dom";
import { newReviewFetch } from "../../../../allFetch/newReview";
import { writeNewReviewInReduxSaga } from "../../../../redux/action";

class NewReviews extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      review: "",
      incorrectUrl: false,
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
      this.setState({
        incorrectUrl: true
      });
    } else {
      this.setState({
        vacancy: result
      });
    }
  }

  async writeReviewInDatabase() {
    const allReviewAndNewReview = {
      allReviews: [...this.props.allReviews],
      newReview: {
        email: localStorage.email,
        review: this.state.review,
        vacancy: this.state.vacancy
      }
    };
    this.props.writeNewReviewInReduxSaga(allReviewAndNewReview);
  }

  writeReview(e) {
    this.setState({
      review: e.target.value
    });
  }

  render() {
    const { vacancy } = this.state;

    return (
      <>
        {this.state.incorrectUrl ? (
          <>
            <Redirect to="/reviews"></Redirect>;
          </>
        ) : (
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
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  email: state.email,
  urlNewReviews: state.urlNewReviews,
  allReviews: state.allReviews
});

const mapDispatchToProps = {
  writeNewReviewInReduxSaga
};

export default connect(mapStateToProps, mapDispatchToProps)(NewReviews);
