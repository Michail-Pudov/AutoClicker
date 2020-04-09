import React from 'react';
import { connect } from 'react-redux';
import { writeFilters } from '../../../../redux/action';
import {
  fetchAreas,
  fetchDictionaries,
  fetchSpecializations,
} from './filterComponentsAndFetch/filtersFetch';
import KeyWords from './filterComponentsAndFetch/KeyWords';
import SpecializationsAndProfissions from './filterComponentsAndFetch/specializationsAndProfissions';
import Dictionaries from './filterComponentsAndFetch/dictionaries';
import WageLevel from './filterComponentsAndFetch/WageLevel';
import Vacansies from '../../Vacansies/vacansies';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vacansies: false,
      blockProfessions: true,
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
    };
  }

  async componentDidMount() {
    const areas = await fetchAreas();
    const specializations = await fetchSpecializations();
    const dictionaries = await fetchDictionaries();
    this.setState({
      areas,
      specializations,
      dictionaries,
      professions: [...specializations[0].specializations],
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
    const employment = document.querySelector('.select__employment').value;
    const experience = document.querySelector('.select__experience').value;
    const schedule = document.querySelector('.select__schedule').value;
    const vacancy_type = document.querySelector('.select__vacancy_type').value;
    const vacancy_label = document.querySelector('.select__vacancy_label')
      .value;
    const vacancy_search_fields = document.querySelector(
      '.select__vacancy_search_fields',
    ).value;
    let keyWords = document.querySelector('.keyWords').value;
    keyWords = keyWords.replace(/\s/, '&');
    const WageLevel = document.querySelector('.WageLevel').value;
    let profession = '1.395';
    if (document.querySelector('.select__professions')) {
      profession = document.querySelector('.select__professions').value;
    }
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
      WageLevel,
    };
    this.props.writeFilters(data);
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <KeyWords dictionaries={this.state.dictionaries} />
          <SpecializationsAndProfissions
            professions={this.professions.bind(this)}
            state={this.state}
          />
          <Dictionaries state={this.state} />
          <WageLevel />
          <button
            type="button"
            onClick={() => {
              this.saveData();
              this.setState({
                vacansies: true,
              });
            }}
            className="col s6 offset-l3 btn grey lighten-4 grey-text text-darken-4"
          >
            Сохранить
          </button>
          {this.state.vacansies ? <Vacansies /> : null}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  writeFilters,
};

export default connect(null, mapDispatchToProps)(Filters);
