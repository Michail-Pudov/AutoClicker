import React, { PureComponent } from "react";

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

  // componentDidMount() {
  //   let status = [...this.state.status];
  //   status = status.filter(item => item != this.props.state.status);
  //   this.setState({
  //     status
  //   });
  // }

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
      status = status.filter(item => item != this.props.state.status);
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
              style={{ display: "block" }}
              name="status"
              onChange={e => writeData(e)}
            >
              <option value={state.status}>{state.status}</option>
              {this.state.status.map(item => {
                return <option value={item}>{item}</option>;
              })}
            </select>
            <a
              name="writeStatus"
              onClick={e => {
                saveData(e);
              }}
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
