import React, { Component } from 'react';
import classes from './Filters.module.css';

const { selector, buttonSearch } = classes;


// class Filters extends Component {
//   render() {
//     return (
//       <div>
//         <span className="select">
//           <select className={selector}>
//             <option value="1" defaultChecked>Выберете сферу</option>
//             <option value="2">IT</option>
//             <option value="3">KFC</option>
//           </select>
//           <select className={selector}>
//             <option value="4" defaultChecked>Выберете специальность</option>
//             <option value="5">1</option>
//             <option value="6">2</option>
//           </select>
//         </span>
//         <button type="button" className={buttonSearch}>Search</button>
//       </div>
//     );
//   }
// }


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
        vacancy_search_fields: [],
      },
      filters: {
        specialization: '',
        profession: '',
        employment: '',
        experience: '',
        schedule: '',
        vacancy_type: '',
        vacancy_label: '',
        vacancy_search_fields: '',
      },
    };
  }

  componentDidMount() {
    this.fetchAreas();
    this.fetchSpecializations();
    this.fetchDictionaries();
  }

  // /местоположение
  async fetchAreas() {
    const response = await fetch('https://api.hh.ru/areas');
    const result = await response.json();
    this.setState({
      areas: result[0],
    });
  }

  // /доп настройки
  async fetchDictionaries() {
    const response = await fetch('https://api.hh.ru/dictionaries');
    const result = await response.json();
    this.setState({
      dictionaries: result,
    });
  }

  // /специализация
  async fetchSpecializations() {
    const response = await fetch('https://api.hh.ru/specializations');
    const result = await response.json();
    this.setState({
      specializations: result,
    });
  }

  professions() {
    const specializationsIndex = document.querySelector(
      '.select__specializations',
    ).value;
    const specializationsIndexZero = specializationsIndex.split(' ');
    const profArray = this.state.specializations[+specializationsIndexZero[0]]
      .specializations;
    this.setState({
      blockProfessions: true,
      professions: profArray,
    });
  }

  saveData() {
    const specialization = document.querySelector('.select__specializations')
      .value;
    const specializationsIndexOne = specialization.split(' ');
    const profession = document.querySelector('.select__professions').value;
    const employment = document.querySelector('.select__employment').value;
    const experience = document.querySelector('.select__experience').value;
    const schedule = document.querySelector('.select__schedule').value;
    const vacancy_type = document.querySelector('.select__vacancy_type').value;
    const vacancy_label = document.querySelector('.select__vacancy_label').value;
    const vacancy_search_fields = document.querySelector(
      '.select__vacancy_search_fields',
    ).value;
    const keyWords = document.querySelector('.keyWords').value;
    const data = {
      specialization: specializationsIndexOne[1],
      profession,
      employment,
      experience,
      schedule,
      vacancy_type,
      vacancy_label,
      vacancy_search_fields,
      keyWords,
    };
    this.setState({
      filters: data,
    });
  }

  render() {
    console.log(this.state.filters);
    return (
      <div>
        <h3>Ключевые слова</h3>
        <input type="text" name="keyWords" className="keyWords" />
        <select name="" className="select__vacancy_search_fields">
          {this.state.dictionaries.vacancy_search_fields
            .map((item) => <option value={item.id}>{item.name}</option>)}
        </select>
        <div className="block__specializations">
          <h3>Выбор специализации</h3>
          <select className="select__specializations">
            {this.state.specializations.map((item, index) => (
              <option value={`${index} ${item.id}`} name={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <button onClick={() => this.professions()}>Подтвердить</button>
        </div>
        {this.state.blockProfessions ? (
          <div className="block__profissions">
            <h3>Выбор профессии</h3>
            <select className="select__professions">
              {this.state.professions
                .map((item, index) => <option value={item.id}>{item.name}</option>)}
            </select>
          </div>
        ) : null}

        <div className="block__dictionaries">
          <h3>Tип занятости</h3>
          <select name="" className="select__employment">
            {this.state.dictionaries.employment
              .map((item) => <option value={item.id}>{item.name}</option>)}
          </select>
          <h3>Опыт работы</h3>
          <select name="" className="select__experience">
            {this.state.dictionaries.experience
              .map((item) => <option value={item.id}>{item.name}</option>)}
          </select>
          <h3>График работы</h3>
          <select name="" className="select__schedule">
            {this.state.dictionaries.schedule
              .map((item) => <option value={item.id}>{item.name}</option>)}
          </select>
          <h3>Tип вакансии</h3>
          <select name="" className="select__vacancy_type">
            {this.state.dictionaries.vacancy_type
              .map((item) => <option value={item.id}>{item.name}</option>)}
          </select>
          <h3>Метки вакансии</h3>
          <select name="" className="select__vacancy_label">
            {this.state.dictionaries.vacancy_label
              .map((item) => <option value={item.id}>{item.name}</option>)}
          </select>
        </div>
        <button onClick={() => this.saveData()}>Сохранить</button>
      </div>
    );
  }
}

export default Filters;
