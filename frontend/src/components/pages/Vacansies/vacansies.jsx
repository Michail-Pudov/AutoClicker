import React from 'react';
import { connect } from 'react-redux';
import { vacansiesFetch } from '../../../allFetch/vacansiesFetch';
import { writeFilters, recordsNewVacansiesSaga } from '../../../redux/action';

import Vacancy from './components/Vacancy';
import Preloader from '../../Preloader/Preloader';

class Vacansies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false,
      vacansies: [{ name: '' }],
      certainVacancy: {
        index: 0,
        title: '',
      },
    };
  }

  async componentDidMount() {
    const vacansies = await vacansiesFetch(this.props.filters);
    this.setState({
      vacansies,
      isReady: true,
    });
  }

  openModalWindow(index, title) {
    const certainVacancy = {
      index,
      title,
    };
    this.setState({
      certainVacancy,
    });
  }

  async closeModalWindowAndWriteVacansies(index, agreement) {
    const certainVacancy = {
      index: 0,
      title: '',
    };
    this.setState({
      modalWindow: false,
      certainVacancy,
    });
    if (agreement) {
      const vacansies = this.state.vacansies[index];
      this.props.recordsNewVacansiesSaga({
        email: localStorage.email,
        vacansies,
      });
    }
  }

  render() {
    const { certainVacancy, vacansies, isReady } = this.state;

    if (!isReady) return <Preloader />;
    return (
      <div id="vacansiesCollection" className="vacansiesCollection">

        {vacansies.map((item, index) => (
          <Vacancy
            item={item}
            index={index}
            key={index}
            vacansies={certainVacancy}
            openModalWindow={this.openModalWindow.bind(this)}
            closeModalWindowAndWriteVacansies={this.closeModalWindowAndWriteVacansies.bind(
              this,
            )}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.email,
  filters: state.filters,
  userJobs: state.userJobs,
});

const mapDispatchToProps = {
  writeFilters,
  recordsNewVacansiesSaga,
};

export default connect(mapStateToProps, mapDispatchToProps)(Vacansies);
