import React from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';
import { vacansiesFetch } from '../../../allFetch/vacansiesFetch';
import { writeFilters } from '../../../redux/action';
import ModalWindow from './components/modalWindow';
import { vacansiesToTheDatabase } from '../../../allFetch/vacansiesToTheDatabase';

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
    const options = {
      onOpenStart: () => {
        console.log('Open Start');
      },
      onOpenEnd: () => {
        console.log('Open End');
      },
      onCloseStart: () => {
        console.log('Close Start');
      },
      onCloseEnd: () => {
        console.log('Close End');
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: '4%',
      endingTop: '30%',
    };
    M.Modal.init(this.Modal, options);
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
    return (
      <div>

        {this.state.vacansies.map((item, index) => (
          <div key={index}>
            <br />

            <a href={item.alternate_url}>
              <a
                className="modal-trigger"
                data-target="modal1"
              >
                {item.name}
              </a>
            </a>

            <div
              ref={(Modal) => {
                this.Modal = Modal;
              }}
              id="modal1"
              className="modal"
            >
              <div className="modal-content">
                <h4>{item.name}</h4>
                <p>A bunch of text</p>
              </div>
              <div className="modal-footer">
                <a className="modal-close waves-effect waves-red btn-flat">
                  Disagree
                </a>
                <a className="modal-close waves-effect waves-green btn-flat">
                  Agree
                </a>
              </div>
            </div>

          </div>
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
