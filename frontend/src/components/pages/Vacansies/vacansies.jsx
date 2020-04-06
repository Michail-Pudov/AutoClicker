import React from 'react';
import { connect } from 'react-redux';
import { vacansiesFetch } from '../../../allFetch/vacansiesFetch';
import { writeFilters } from '../../../redux/action';
import { vacansiesToTheDatabase } from '../../../allFetch/vacansiesToTheDatabase';
import Vacancy from './components/Vacancy';

class Vacansies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vacansies: [{ name: '' }],
      modalWindow: false,
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
    });
  }

  openModalWindow(index, title) {
    const certainVacancy = {
      index,
      title,
    };

    this.setState({
      modalWindow: true,
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
      const answerFetch = await vacansiesToTheDatabase(
        localStorage.email,
        vacansies,
      );
      console.log(answerFetch);
    }
  }

  render() {
    const { modalWindow, certainVacancy, vacansies } = this.state;
    return (
      <div>
        {modalWindow ? (
          <Vacancy

            vacansies={certainVacancy}
          />
        ) : null}
        {vacansies.map((item, index) => (
          <Vacancy
            onOpen={() => this.openModalWindow(index, item.name)}
            item={item}
            index={index}
            key={index}
            vacansies={certainVacancy}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.email,
  filters: state.filters,
});

const mapDispatchToProps = {
  writeFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(Vacansies);


// <div>
//
//   {this.state.modalWindow ? (
//     <ModalWindow
//       closeModalWindowAndWriteVacansies={this.closeModalWindowAndWriteVacansies.bind(
//         this,
//       )}
//       vacansies={this.state.certainVacancy}
//     />
//   ) : null}
//
//   {this.state.vacansies.map((item, index) => (
//     <div key={index}>
//       <br />
//
//       <a
//         href={item.alternate_url}
//         onClick={() => this.openModalWindow(index, item.name)}
//       >
//         {item.name}
//       </a>
//
//     </div>
//   ))}
// </div>
