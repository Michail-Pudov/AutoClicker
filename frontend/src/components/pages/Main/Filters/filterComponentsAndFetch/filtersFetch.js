export const fetchAreas = async () => {
  const response = await fetch('https://api.hh.ru/areas');
  const result = await response.json();
  return result[0];
};

export const fetchDictionaries = async () => {
  const response = await fetch('https://api.hh.ru/dictionaries');
  const result = await response.json();
  return result;
};
export const fetchSpecializations = async () => {
  const response = await fetch('https://api.hh.ru/specializations');
  const result = await response.json();
  return result;
};
