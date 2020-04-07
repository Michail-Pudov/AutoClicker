import React from "react";
import { connect } from "react-redux";
import { vacansiesFetch } from "../../../allFetch/vacansiesFetch";
import { writeFilters } from "../../../redux/action";
import { recordsNewVacansiesSaga } from "../../../redux/action";
import Vacancy from "./components/Vacancy";

class Vacansies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vacansies: [{ name: "" }],
      certainVacancy: {
        index: 0,
        title: ""
      }
    };
  }

  async componentDidMount() {
    const vacansies = await vacansiesFetch(this.props.filters);
    this.setState({
      vacansies
    });
  }

  openModalWindow(index, title) {
    const certainVacancy = {
      index,
      title
    };
    this.setState({
      certainVacancy
    });
  }

  async closeModalWindowAndWriteVacansies(index, agreement) {
    const certainVacancy = {
      index: 0,
      title: ""
    };
    this.setState({
      modalWindow: false,
      certainVacancy
    });
    if (agreement) {
      const vacansies = this.state.vacansies[index];
      this.props.recordsNewVacansiesSaga({
        email: localStorage.email,
        vacansies: vacansies
      });
    }
  }

  render() {
    const { certainVacancy, vacansies } = this.state;
    return (
      <div>
        {vacansies.map((item, index) => (
          <Vacancy
            item={item}
            index={index}
            key={index}
            vacansies={certainVacancy}
            openModalWindow={this.openModalWindow.bind(this)}
            closeModalWindowAndWriteVacansies={this.closeModalWindowAndWriteVacansies.bind(
              this
            )}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  email: state.email,
  filters: state.filters,
  userJobs: state.userJobs
});

const mapDispatchToProps = {
  writeFilters,
  recordsNewVacansiesSaga
};

export default connect(mapStateToProps, mapDispatchToProps)(Vacansies);
