export const fetchAreas = async () => {
  let response = await fetch("https://api.hh.ru/areas");
  let result = await response.json();
  return result[0];
};

export const fetchDictionaries = async () => {
  let response = await fetch("https://api.hh.ru/dictionaries");
  let result = await response.json();
  return result;
};
export const fetchSpecializations = async () => {
  let response = await fetch("https://api.hh.ru/specializations");
  let result = await response.json();
  return result;
};
