export const uploadUserJobsFetch = async email => {
  let response = await fetch("/account/uploadJobs", {
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
