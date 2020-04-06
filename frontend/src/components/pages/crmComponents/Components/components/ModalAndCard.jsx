import React, { PureComponent } from "react";
import M from "materialize-css";

class ModalAndCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
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

  render() {
    const { item, index } = this.props;
    console.log(item);

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
              <b>Компания: </b>{" "}
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
              {item.comment ? item.comment : "Вы пока не оставили комментарий"}
            </p>
            <p>
              <b>Контакты: </b>
              {item.contacts ? item.contacts : "Контакты отсутствуют"}
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
