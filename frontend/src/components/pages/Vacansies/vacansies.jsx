import React, { PureComponent } from "react";
import { vacansiesFetch } from "../../../allFetch/vacansiesFetch";
import { connect } from "react-redux";
import { writeFilters } from "../../../redux/action";

class Vacansies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vacansies: [{ name: "" }]
    };
  }

  async componentDidMount() {
    let vacansies = await vacansiesFetch(this.props.filters);
    this.setState({
      vacansies
    });
  }

  render() {
    return (
      <div>
        {this.state.vacansies.map(item => {
          return (
            <>
              <br />
              <a href={item.alternate_url}>{item.name}</a>
            </>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = {
  writeFilters
};

export default connect(mapStateToProps, mapDispatchToProps)(Vacansies);
