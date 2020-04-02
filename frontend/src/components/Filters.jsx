import React, { PureComponent } from "react";

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blockProfessions: false,
      areas: { areas: [] },
      specializations: [],
      professions: [],
      dictionaries: {
        employment: [],
        experience: [],
        schedule: [],
        vacancy_type: [],
        vacancy_label: [],
        vacancy_search_fields: []
      },
      filters: {
        specialization: "",
        profession: "",
        employment: "",
        experience: "",
        schedule: "",
        vacancy_type: "",
        vacancy_label: "",
        vacancy_search_fields: ""
      }
    };
  }

  componentDidMount() {
    this.fetchAreas();
    this.fetchSpecializations();
    this.fetchDictionaries();
  }

  ///местоположение
  async fetchAreas() {
    let response = await fetch("https://api.hh.ru/areas");
    let result = await response.json();
    this.setState({
      areas: result[0]
    });
  }

  ///доп настройки
  async fetchDictionaries() {
    let response = await fetch("https://api.hh.ru/dictionaries");
    let result = await response.json();
    this.setState({
      dictionaries: result
    });
  }

  ///специализация
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
    let specializationsIndexZero = specializationsIndex.split(" ");
    let profArray = this.state.specializations[+specializationsIndexZero[0]]
      .specializations;
    this.setState({
      blockProfessions: true,
      professions: profArray
    });
  }

  saveData() {
    let specialization = document.querySelector(".select__specializations")
      .value;
    let specializationsIndexOne = specialization.split(" ");
    let profession = document.querySelector(".select__professions").value;
    let employment = document.querySelector(".select__employment").value;
    let experience = document.querySelector(".select__experience").value;
    let schedule = document.querySelector(".select__schedule").value;
    let vacancy_type = document.querySelector(".select__vacancy_type").value;
    let vacancy_label = document.querySelector(".select__vacancy_label").value;
    let vacancy_search_fields = document.querySelector(
      ".select__vacancy_search_fields"
    ).value;
    let keyWords = document.querySelector(".keyWords").value;
    let data = {
      specialization: specializationsIndexOne[1],
      profession,
      employment,
      experience,
      schedule,
      vacancy_type,
      vacancy_label,
      vacancy_search_fields,
      keyWords
    };
    this.setState({
      filters: data
    });
  }

  render() {
    console.log(this.state.filters);
    return (
      <div>
        <h3>Ключевые слова</h3>
        <input type="text" name="keyWords" className="keyWords" />
        <select name="" className="select__vacancy_search_fields">
          {this.state.dictionaries.vacancy_search_fields.map(item => {
            return <option value={item.id}>{item.name}</option>;
          })}
        </select>
        <div className="block__specializations">
          <h3>Выбор специализации</h3>
          <select className="select__specializations">
            {this.state.specializations.map((item, index) => {
              return (
                <option value={`${index} ${item.id}`} name={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <button onClick={() => this.professions()}>Подтвердить</button>
        </div>
        {this.state.blockProfessions ? (
          <div className="block__profissions">
            <h3>Выбор профессии</h3>
            <select className="select__professions">
              {this.state.professions.map((item, index) => {
                return <option value={item.id}>{item.name}</option>;
              })}
            </select>
          </div>
        ) : null}

        <div className="block__dictionaries">
          <h3>Tип занятости</h3>
          <select name="" className="select__employment">
            {this.state.dictionaries.employment.map(item => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </select>
          <h3>Опыт работы</h3>
          <select name="" className="select__experience">
            {this.state.dictionaries.experience.map(item => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </select>
          <h3>График работы</h3>
          <select name="" className="select__schedule">
            {this.state.dictionaries.schedule.map(item => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </select>
          <h3>Tип вакансии</h3>
          <select name="" className="select__vacancy_type">
            {this.state.dictionaries.vacancy_type.map(item => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </select>
          <h3>Метки вакансии</h3>
          <select name="" className="select__vacancy_label">
            {this.state.dictionaries.vacancy_label.map(item => {
              return <option value={item.id}>{item.name}</option>;
            })}
          </select>
        </div>
        <button onClick={() => this.saveData()}>Сохранить</button>
      </div>
    );
  }
}

export default Filters;
