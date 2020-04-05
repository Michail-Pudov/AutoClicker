import React from 'react';
import { connect } from 'react-redux';
import { vacansiesFetch } from '../../../allFetch/vacansiesFetch';
import { writeFilters } from '../../../redux/action';

class Vacansies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vacansies: [{ name: '' }],
    };
  }

  async componentDidMount() {
    const vacansies = await vacansiesFetch(this.props.filters);
    this.setState({
      vacansies,
    });
  }

  render() {
    return (
      <div>
        {this.state.vacansies.map((item, index) => (
          <div key={index}>
            <br />
            <a href={item.alternate_url}>{item.name}</a>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = {
  writeFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(Vacansies);
