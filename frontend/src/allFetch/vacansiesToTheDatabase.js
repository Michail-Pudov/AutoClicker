export const vacansiesToTheDatabase = async (email, vacansies) => {
  let response = await fetch("/account/newVacansy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({
      email: email,
      vacansies: vacansies
    })
  });
  let result = await response.json();
  return result;
};
