import React, { PureComponent } from "react";
import { v4 as uuidv4 } from "uuid";

class StatusModal extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      status: [
        "Жду ответа",
        "Прислали тестовое задание",
        "Пригласили на интервью",
        "Нужно перезвонить",
        "Поступил оффер",
        "Вакансия закрыта"
      ]
    };
  }

  componentDidUpdate(props) {
    if (this.props.state !== props.state) {
      let status = [
        "Жду ответа",
        "Прислали тестовое задание",
        "Пригласили на интервью",
        "Нужно перезвонить",
        "Поступил оффер",
        "Вакансия закрыта"
      ];
      // status = status.filter(item => item !== this.props.state.status);
      for (let i = 0; i < status.length; i++) {
        if (status[i] === this.props.state.status) {
          let value = status.splice(i, 1);
          status.unshift(value);
        }
      }
      this.setState({
        status
      });
    }
  }

  render() {
    const { state, writeData, saveData, iWantToRecordInformation } = this.props;

    return (
      <p>
        <b>Статус: </b>
        {state.writeStatus ? (
          <>
            <select
              style={{ display: "block", cursor: "pointer" }}
              name="status"
              onChange={e => writeData(e)}
            >
              {/* <option value={state.status}>{state.status}</option> */}
              {this.state.status.map(item => {
                return (
                  <option value={item} key={uuidv4()}>
                    {item}
                  </option>
                );
              })}
            </select>
            <a
              name="writeStatus"
              onClick={e => {
                saveData(e);
              }}
              style={{ cursor: "pointer" }}
            >
              ✅
            </a>
          </>
        ) : (
          <>
            {state.status}{" "}
            <a
              name="writeStatus"
              onClick={e => {
                iWantToRecordInformation(e);
              }}
              style={{ cursor: "pointer" }}
            >
              ✏️
            </a>
          </>
        )}
      </p>
    );
  }
}

export default StatusModal;
