import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import NewReviewForm from './components/newReviewForm';
import CardAndModal from './components/cardAndModal';
import { getAllReviewInDatabaseSaga } from '../../../redux/action';

class AllReviews extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m10 l8 offset-l1 offset-m1">
          <NewReviewForm />
          {this.props.allReviews.map((item, index) => <CardAndModal item={item} index={index} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allReviews: state.allReviews,
});

const mapDispatchToProps = { getAllReviewInDatabaseSaga };

export default connect(mapStateToProps, mapDispatchToProps)(AllReviews);
