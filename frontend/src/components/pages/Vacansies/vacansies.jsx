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

  async componentDidUpdate(props) {
    if (this.props.filters !== props.filters) {
      const vacansies = await vacansiesFetch(this.props.filters);
      this.setState({
        vacansies,
        isReady: true,
      });
    }
  }

  async componentDidMount() {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });
    const vacansies = await vacansiesFetch(this.props.filters);
    for (let i = 0; i < this.props.userJobs.allVacansies.length; i++) {
      for (let j = 0; j < vacansies.length; j++) {
        if (
          this.props.userJobs.allVacansies[i].vacancy.id === vacansies[j].id
        ) {
          vacansies.splice(j, 1);
        }
      }
    }

    this.setState({
      vacansies,
      isReady: true,
    });
    window.scrollTo({
      top: 1400,
      behavior: 'smooth',
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
