import React, { PureComponent } from "react";

class SalaryCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { item } = this.props;

    return (
      <p>
        <b>Зарплата: </b>
        {item.vacancy.salary
          ? ` От ${
              item.vacancy.salary.from ? item.vacancy.salary.from : "..."
            } ${
              item.vacancy.salary.currency
                ? item.vacancy.salary.currency
                : "..."
            } до ${item.vacancy.salary.to ? item.vacancy.salary.to : "..."} ${
              item.vacancy.salary.currency
                ? item.vacancy.salary.currency
                : "..."
            }`
          : "Не указано"}
      </p>
    );
  }
}

export default SalaryCard;
