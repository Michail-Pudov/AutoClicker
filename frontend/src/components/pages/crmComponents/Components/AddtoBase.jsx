import React from "react";
import { connect } from "react-redux";
import { writeFilters } from "../../../../redux/action";
import {
  fetchAreas,
  fetchDictionaries,
  fetchSpecializations
} from "../../Main/Filters/filterComponentsAndFetch/filtersFetch";
import KeyWords from "../../Main/Filters/filterComponentsAndFetch/KeyWords";
import SpecializationsAndProfissions from "../../Main/Filters/filterComponentsAndFetch/specializationsAndProfissions";
import Dictionaries from "../../Main/Filters/filterComponentsAndFetch/dictionaries";
import WageLevel from "../../Main/Filters/filterComponentsAndFetch/WageLevel";
import Vacansies from '../../Vacansies/vacansies'
import GetVacancy from './GetVacancy'


class AddtoBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vacansies: false,
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
      }
    };
  }

  async componentDidMount() {
    let areas = await fetchAreas();
    let specializations = await fetchSpecializations();
    let dictionaries = await fetchDictionaries();
    this.setState({
      areas,
      specializations,
      dictionaries
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
    let employment = document.querySelector(".select__employment").value;
    let experience = document.querySelector(".select__experience").value;
    let schedule = document.querySelector(".select__schedule").value;
    let vacancy_type = document.querySelector(".select__vacancy_type").value;
    let vacancy_label = document.querySelector(".select__vacancy_label").value;
    let vacancy_search_fields = document.querySelector(
      ".select__vacancy_search_fields"
    ).value;
    let keyWords = document.querySelector(".keyWords").value;
    keyWords = keyWords.replace(/\s/, "&");
    let WageLevel = document.querySelector(".WageLevel").value;
    let profession = "1.395";
    if (document.querySelector(".select__professions")) {
      profession = document.querySelector(".select__professions").value;
    }
    let data = {
      specialization: specializationsIndexOne[1],
      profession,
      employment,
      experience,
      schedule,
      vacancy_type,
      vacancy_label,
      vacancy_search_fields,
      keyWords,
      WageLevel
    };
    this.props.writeFilters(data);
  }

  render() {
    return (
      <div>
        <KeyWords dictionaries={this.state.dictionaries}></KeyWords>
        <SpecializationsAndProfissions
          professions={this.professions.bind(this)}
          state={this.state}
        ></SpecializationsAndProfissions>
        <Dictionaries state={this.state}></Dictionaries>
        <WageLevel></WageLevel>
        <button
          onClick={() => {
            this.saveData();
            this.setState({
              vacansies: true
            });
          }}
        >
          Найти
        </button>
        {this.state.vacansies ? <GetVacancy/> : null}
      </div>
    );
  }
}

const mapDispatchToProps = {
  writeFilters
};

export default connect(null, mapDispatchToProps)(AddtoBase);
