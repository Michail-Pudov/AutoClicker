export const vacansiesFetch = async payload => {
  console.log(payload);
  
  let response = await fetch(
  `https://api.hh.ru/vacancies?salary=${payload.WageLevel ? payload.WageLevel : 10000}&employment=${payload.employment}&experience=${payload.experience}&profession=${payload.profession}&schedule=${payload.schedule}&specialization=${payload.specialization}&vacancy_label=${payload.vacancy_label}&vacancy_search_fields=${payload.vacancy_search_fields}&vacancy_type=${payload.vacancy_type}&text=${payload.keyWords}&per_page=100&area=1&vacancy_search_order=publication_time`
    );
console.log(response);

    let result = await response.json();
    console.log(result);
    
  return result.items;
  };
