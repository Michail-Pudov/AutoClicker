import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ModalAndCard from './components/ModalAndCard';

class ListStatus extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { text, list } = this.props;
    return (
      <div className="col s4 ">
        <ul className="collection with-header">
          <div className={list}>
            <li className="collection-header"><h5>{text}</h5></li>
            {this.props.userJobs[list].map((item, index) => (
              <ModalAndCard
                item={item}
                index={item.vacancy.id}
                keyArray={list}
                indexInArray={index}
                key={uuidv4()}
              />
            ))}
          </div>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userJobs: state.userJobs,
  email: state.email,
});

const mapDispatchToProps = {};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ListStatus),
);
