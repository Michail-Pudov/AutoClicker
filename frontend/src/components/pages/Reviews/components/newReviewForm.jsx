import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { writeNewReviews } from "../../../../redux/action";

class NewReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      URL: ""
    };
  }

  writeURL(e) {
    this.setState({
      URL: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h4>Добавить новый отзыв:</h4>
        <input
          type="text"
          placeholder="Вставьте URL вакансии"
          onChange={e => this.writeURL(e)}
        />
        <Link
          to="/newReviews"
          onClick={() => this.props.writeNewReviews({ url: this.state.URL })}
        >
          Создать
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  writeNewReviews
};

export default connect(mapStateToProps, mapDispatchToProps)(NewReviewForm);
