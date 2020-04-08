import React, { PureComponent } from "react";
import { connect } from "react-redux";

class NewReviews extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      vacancy: {}
    };
  }

  async componentDidMount() {
    let oldUrl = this.props.urlNewReviews.split("/");
    let idVacancy = oldUrl.pop();
    let response = await fetch(`https://api.hh.ru/vacancies/${idVacancy}`);
    let result = await response.json();
    this.setState({
      vacancy: result
    });
  }

  render() {
    return (
      <div>
        <h2>Работодатель</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  email: state.email,
  urlNewReviews: state.urlNewReviews
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewReviews);
