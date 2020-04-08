import React, { PureComponent } from "react";
import NewReviewForm from "./components/newReviewForm";

class AllReviews extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <NewReviewForm></NewReviewForm>
        <p>Список отзывов...</p>
      </div>
    );
  }
}

export default AllReviews;
