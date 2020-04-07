import React, { Component } from "react";
import M from "materialize-css";

class Vacancy extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
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
    const {
      item,
      index,
      openModalWindow,
      closeModalWindowAndWriteVacansies
    } = this.props;

    return (
      <div>
        <div>
          <br />
          <a
            onClick={() => {
              openModalWindow(index, item.name);
              window.open(item.alternate_url);
            }}
            className="modal-trigger"
            data-target={index}
            href={item.alternate_url}
          >
            {item.name}
          </a>

          <div
            ref={Modal => {
              this.Modal = Modal;
            }}
            id={index}
            className="modal"
          >
            <div className="modal-content">
              <h4>{item.name}</h4>
              <br />
              <p>Хотите добавить эту вакансию в личный кабинет?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={() => closeModalWindowAndWriteVacansies(index, false)}
                className="modal-close grey lighten-4 grey-text text-darken-4 waves-effect waves-red btn"
              >
                Нет
              </button>
              <button
                type="button"
                onClick={() => closeModalWindowAndWriteVacansies(index, true)}
                className="modal-close grey lighten-4 grey-text text-darken-4 waves-effect waves-green btn"
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Vacancy;
