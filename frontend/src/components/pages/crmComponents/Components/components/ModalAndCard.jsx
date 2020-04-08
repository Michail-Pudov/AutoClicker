import React from "react";
import M from "materialize-css";
import { connect } from "react-redux";
import CardTitle from "./components/cardTitle";
import ModalTitle from "./components/ModalTitle";
import EmployerModal from "./components/EmployerModal";
import SalaryCard from "./components/SalaryCard";
import SalaryModal from "./components/SalaryModal";
import SnippetModal from "./components/SnippetModal";
import AddresModal from "./components/AddresModal";
import CommentModal from "./components/CommentModal";
import ContactsModal from "./components/ContactsModal";
import StatusModal from "./components/StatusModal";
import { vacancyStatusChangeSaga } from "../../../../../redux/action";

class ModalAndCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      writeComment: false,
      writeContacts: false,
      writeStatus: false,
      comment: "",
      contacts: "",
      status: ""
    };
  }

  componentDidMount() {
    this.setState({
      comment: this.props.item.comment,
      contacts: this.props.item.contacts,
      status: this.props.item.status
    });

    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "30%"
    };
    M.Modal.init(this.Modal, options);
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  iWantToRecordInformation(e) {
    this.setState({
      [e.target.name]: true
    });
  }

  writeData(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  saveData(e) {
    this.setState({
      [e.target.name]: false
    });
  }

  render() {
    const { item, index, keyArray, userJobs, indexInArray } = this.props;
    return (
      <div className="row">
        <div className="col s7">
          <div className="card grey lighten-4 ">
            <div className="log card-content grey-text text-darken-4">
              <br />
              <CardTitle item={item} index={index}></CardTitle>
              <SalaryCard item={item} index={index}></SalaryCard>
              <div
                ref={Modal => {
                  this.Modal = Modal;
                }}
                id={index}
                className="modal"
              >
                <div className="modal-content">
                  <ModalTitle item={item} index={index}></ModalTitle>
                  <EmployerModal item={item} index={index}></EmployerModal>
                  <SalaryModal item={item} index={index}></SalaryModal>
                  <SnippetModal item={item} index={index}></SnippetModal>
                  <AddresModal item={item} index={index}></AddresModal>
                  <CommentModal
                    state={this.state}
                    writeData={this.writeData.bind(this)}
                    iWantToRecordInformation={this.iWantToRecordInformation.bind(
                      this
                    )}
                    saveData={this.saveData.bind(this)}
                  ></CommentModal>
                  <ContactsModal
                    state={this.state}
                    writeData={this.writeData.bind(this)}
                    iWantToRecordInformation={this.iWantToRecordInformation.bind(
                      this
                    )}
                    saveData={this.saveData.bind(this)}
                  ></ContactsModal>
                  <StatusModal
                    state={this.state}
                    writeData={this.writeData.bind(this)}
                    iWantToRecordInformation={this.iWantToRecordInformation.bind(
                      this
                    )}
                    saveData={this.saveData.bind(this)}
                  ></StatusModal>
                </div>
                <div className="modal-footer">
                  <a
                    className="modal-close waves-effect waves-green btn-flat"
                    onClick={() => {
                      this.props.vacancyStatusChangeSaga({
                        email: localStorage.email,
                        vacancy: index,
                        keyArray: keyArray,
                        allArray: userJobs,
                        indexInArray: indexInArray,
                        changes: {
                          comment: this.state.comment,
                          contacts: this.state.contacts,
                          status: this.state.status
                        }
                      });
                    }}
                  >
                    okey
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  email: state.email,
  userJobs: state.userJobs
});

const mapDispatchToProps = {
  vacancyStatusChangeSaga
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalAndCard);
