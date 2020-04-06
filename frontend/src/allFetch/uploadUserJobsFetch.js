export const uploadUserJobsFetch = async email => {
  let response = await fetch("http://localhost:5000/account/uploadJobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({
      email: email
    })
  });
  let result = await response.json();
  return result;
};
