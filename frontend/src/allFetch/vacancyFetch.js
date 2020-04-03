export const vacancyFetch = async (email, password) => {
  let response = await fetch("http://localhost:5000/getvacancy", {
    method: "GET",
  });
  let result = await response.json();
  return result;
};
