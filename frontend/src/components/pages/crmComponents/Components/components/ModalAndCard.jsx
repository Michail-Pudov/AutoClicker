import React, { PureComponent } from "react";
import M from "materialize-css";

class ModalAndCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      writeComment: false,
      writeContacts: false,
      writeStatus: false
    };
  }

  componentDidMount() {
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

  render() {
    const { item, index } = this.props;
    return (
      <div>
        <br />
        <a
          className="modal-trigger"
          data-target={index}
          href={item.vacancy.alternate_url}
        >
          {item.vacancy.name}
        </a>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id={index}
          className="modal"
        >
          <div className="modal-content">
            <h4>
              {" "}
              <a href={item.vacancy.alternate_url}>{item.vacancy.name}</a>
            </h4>
            <p>
              <b>Работодатель: </b>{" "}
              <a href={item.vacancy.employer.alternate_url}>
                {item.vacancy.employer.name}
              </a>
            </p>
            <p>
              <b>Зарплата: </b>
              {item.vacancy.salary
                ? ` От ${
                    item.vacancy.salary.from ? item.vacancy.salary.from : "..."
                  } ${
                    item.vacancy.salary.currency
                      ? item.vacancy.salary.currency
                      : "..."
                  } до ${
                    item.vacancy.salary.to ? item.vacancy.salary.to : "..."
                  } ${
                    item.vacancy.salary.currency
                      ? item.vacancy.salary.currency
                      : "..."
                  }`
                : "Не указано"}
            </p>
            <p>
              {" "}
              <b>Описание: </b> {item.vacancy.snippet.responsibility}
            </p>
            <p>
              <b>Комментарий: </b>
              {this.state.writeComment ? (
                <input type="text" defaultValue={item.comment} />
              ) : (
                <div>
                  {item.comment
                    ? item.comment
                    : "Вы пока не оставили комментарий"}
                  <a
                    name="writeComment"
                    onClick={e => {
                      this.iWantToRecordInformation(e);
                    }}
                  >
                    {" "}
                    ✏️
                  </a>{" "}
                </div>
              )}
            </p>
            <p>
              <b>Контакты: </b>
              {this.state.writeContacts ? (
                <input type="text" defaultValue={item.contacts} />
              ) : (
                <div>
                  {item.contacts ? item.contacts : "Контакты отсутствуют"}
                  <a
                    name="writeContacts"
                    onClick={e => {
                      this.iWantToRecordInformation(e);
                    }}
                  >
                    {" "}
                    ✏️
                  </a>{" "}
                </div>
              )}
            </p>
            <p>
              <b>Статус: </b>
              {item.status}
            </p>
          </div>
          <div className="modal-footer">
            <a className="modal-close waves-effect waves-green btn-flat">
              save
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalAndCard;
