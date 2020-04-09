import React from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import CardTitle from './components/cardTitle';
import ModalTitle from './components/ModalTitle';
import EmployerModal from './components/EmployerModal';
import SalaryCard from './components/SalaryCard';
import SalaryModal from './components/SalaryModal';
import SnippetModal from './components/SnippetModal';
import AddresModal from './components/AddresModal';
import CommentModal from './components/CommentModal';
import ContactsModal from './components/ContactsModal';
import StatusModal from './components/StatusModal';
import { vacancyStatusChangeSaga } from '../../../../../redux/action';

class ModalAndCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      writeComment: false,
      writeContacts: false,
      writeStatus: false,
      comment: '',
      contacts: '',
      status: '',
    };
  }

  componentDidMount() {
    this.setState({
      comment: this.props.item.comment,
      contacts: this.props.item.contacts,
      status: this.props.item.status,
    });

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
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  iWantToRecordInformation(e) {
    this.setState({
      [e.target.name]: true,
    });
  }

  writeData(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  saveData(e) {
    this.setState({
      [e.target.name]: false,
    });
  }

  render() {
    const {
      item, index, keyArray, userJobs, indexInArray,
    } = this.props;
    return (

      <li className="collection-item">

        <CardTitle item={item} index={index} />
        <SalaryCard item={item} index={index} />
        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id={index}
          className="modal"
        >
          <div className="modal-content">
            <ModalTitle item={item} index={index} />
            <EmployerModal item={item} index={index} />
            <SalaryModal item={item} index={index} />
            <SnippetModal item={item} index={index} />
            <AddresModal item={item} index={index} />
            <CommentModal
              state={this.state}
              writeData={this.writeData.bind(this)}
              iWantToRecordInformation={this.iWantToRecordInformation.bind(
                this,
              )}
              saveData={this.saveData.bind(this)}
            />
            <ContactsModal
              state={this.state}
              writeData={this.writeData.bind(this)}
              iWantToRecordInformation={this.iWantToRecordInformation.bind(
                this,
              )}
              saveData={this.saveData.bind(this)}
            />
            <StatusModal
              state={this.state}
              writeData={this.writeData.bind(this)}
              iWantToRecordInformation={this.iWantToRecordInformation.bind(
                this,
              )}
              saveData={this.saveData.bind(this)}
            />
          </div>
          <div className="modal-footer">
            <a
              className="modal-close waves-effect waves-green btn-flat"
              onClick={() => {
                this.props.vacancyStatusChangeSaga({
                  email: localStorage.email,
                  vacancy: index,
                  keyArray,
                  allArray: userJobs,
                  indexInArray,
                  changes: {
                    comment: this.state.comment,
                    contacts: this.state.contacts,
                    status: this.state.status,
                  },
                });
              }}
            >
              okey
            </a>
          </div>
        </div>
      </li>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.email,
  userJobs: state.userJobs,
});

const mapDispatchToProps = {
  vacancyStatusChangeSaga,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalAndCard);
