import React from "react";
import "./ModalWindow.css";

class ModalWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="modalWindow">
        <h3>Хотите добавить эту вакансию в личный кабинет?</h3>
        <p>{this.props.vacansies.title}</p>
        <button
          onClick={() =>
            this.props.closeModalWindowAndWriteVacansies(
              this.props.vacansies.index,
              false
            )
          }
        >
          No
        </button>
        <button
          onClick={() =>
            this.props.closeModalWindowAndWriteVacansies(
              this.props.vacansies.index,
              true
            )
          }
        >
          Yes
        </button>
      </div>
    );
  }
}

export default ModalWindow;
