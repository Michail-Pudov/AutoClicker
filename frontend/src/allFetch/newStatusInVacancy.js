export const newStatusInVacancy = async (email, arrayVacancies) => {
  let response = await fetch("http://localhost:5000/account/newStatus", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({
      email: email,
      arrayVacancies: arrayVacancies
    })
  });
  let result = await response.json();
  return result;
};
