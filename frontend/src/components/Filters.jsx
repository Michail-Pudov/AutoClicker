import React, { PureComponent } from "react";

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blockOne: false,
      blockTwo: false,
      areas: { areas: [] },
      specializations: [],
      filters: {
        profession: ""
      },
      professions: [],
      dictionaries: {
        employment: [],
        experience: [],
        schedule: [],
        vacancy_type: [],
        vacancy_label: [],
        vacancy_search_fields: []
      }
    };
  }

  componentDidMount() {
    this.fetchAreas();
    this.fetchSpecializations();
    this.fetchDictionaries();
  }

  async fetchAreas() {
    let response = await fetch("https://api.hh.ru/areas");
    let result = await response.json();
    this.setState({
      areas: result[0]
    });
  }

  async fetchDictionaries() {
    let response = await fetch("https://api.hh.ru/dictionaries");
    let result = await response.json();
    this.setState({
      dictionaries: result
    });
  }

  async fetchSpecializations() {
    let response = await fetch("https://api.hh.ru/specializations");
    let result = await response.json();
    this.setState({
      specializations: result
    });
  }

  professions() {
    let specializationsIndex = document.querySelector(
      ".select__specializations"
    ).value;
    let profArray = this.state.specializations[+specializationsIndex]
      .specializations;
    this.setState({
      blockOne: true,
      professions: profArray
    });
  }

  saveData() {
    // let specialization = document.querySelector(".select__specializations")
    let profession = document.querySelector(".select__professions").value;
    let data = {
      profession: profession
    };
    this.setState({
      filters: data
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="block__specializations">
          <h3>Выбор специализации</h3>
          <select className="select__specializations">
            {this.state.specializations.map((item, index) => {
              return (
                <option value={index} name={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <button onClick={() => this.professions()}>Подтвердить</button>
        </div>
        {this.state.blockOne ? (
          <div className="block__profissions">
            <h3>Выбор профессии</h3>
            <select className="select__professions">
              {this.state.professions.map((item, index) => {
                return <option value={item.id}>{item.name}</option>;
              })}
            </select>
            <button onClick={() => this.saveData()}>Подтвердить</button>
          </div>
        ) : null}

        <div className="block__dictionaries">
          <h3>Tип занятости</h3>
          <select name="" id="">
            {this.state.dictionaries.employment.map(item => {
              return <option>{item.name}</option>;
            })}
          </select>
          <h3>Опыт работы</h3>
          <select name="" id="">
            {this.state.dictionaries.experience.map(item => {
              return <option>{item.name}</option>;
            })}
          </select>
          <h3>График работы</h3>
          <select name="" id="">
            {this.state.dictionaries.schedule.map(item => {
              return <option>{item.name}</option>;
            })}
          </select>
          <h3>Tип вакансии</h3>
          <select name="" id="">
            {this.state.dictionaries.vacancy_type.map(item => {
              return <option>{item.name}</option>;
            })}
          </select>
          <h3>Метки вакансии</h3>
          <select name="" id="">
            {this.state.dictionaries.vacancy_label.map(item => {
              return <option>{item.name}</option>;
            })}
          </select>
          <h3>Метки вакансии</h3>
          <select name="" id="">
            {this.state.dictionaries.vacancy_search_fields.map(item => {
              return <option>{item.name}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default Filters;
