export const vacansiesFetch = async payload => {
  let test = `https://api.hh.ru/vacancies?${
    payload.WageLevel ? `salary=${payload.WageLevel}` : ""
  }&${payload.employment ? `employment=${payload.employment}` : ""}
  &${payload.experience ? `experience=${payload.experience}` : ""}&profession=${
    payload.profession
  }&${payload.schedule ? `schedule=${payload.schedule}` : ""}&specialization=${
    payload.specialization
  }&${payload.vacancy_label ? `vacancy_label=${payload.vacancy_label}` : ""}&${
    payload.vacancy_search_fields
      ? `vacancy_search_fields=${payload.vacancy_search_fields}`
      : ""
  }&${payload.vacancy_type ? `vacancy_type=${payload.vacancy_type}` : ""}&${
    payload.keyWords ? `text=${payload.keyWords}` : ""
  }&per_page=100&area=1&vacancy_search_order=publication_time`;
  let response = await fetch(test);

  let old = `https://api.hh.ru/vacancies?salary=${
    payload.WageLevel ? payload.WageLevel : 10000
  }&employment=${payload.employment}&experience=${
    payload.experience
  }&profession=${payload.profession}&schedule=${
    payload.schedule
  }&specialization=${payload.specialization}&vacancy_label=${
    payload.vacancy_label
  }&vacancy_search_fields=${payload.vacancy_search_fields}&vacancy_type=${
    payload.vacancy_type
  }&text=${
    payload.keyWords
  }&per_page=100&area=1&vacancy_search_order=publication_time`;

  let result = await response.json();
  return result.items;
};
