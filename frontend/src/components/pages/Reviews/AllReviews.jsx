import React, { PureComponent } from "react";
import NewReviewForm from "./components/newReviewForm";
import { connect } from "react-redux";
import CardAndModal from "./components/cardAndModal";
import { getAllReviewInDatabaseSaga } from "../../../redux/action";

class AllReviews extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getAllReviewInDatabaseSaga();
  }

  render() {
    return (
      <div>
        <NewReviewForm></NewReviewForm>
        {this.props.allReviews.map((item, index) => {
          return <CardAndModal item={item} index={index}></CardAndModal>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allReviews: state.allReviews
});

const mapDispatchToProps = { getAllReviewInDatabaseSaga };

export default connect(mapStateToProps, mapDispatchToProps)(AllReviews);
