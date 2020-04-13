export const registrationFetch = async (email, password) => {
  const response = await fetch("/registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  const result = await response.json();
  return result;
};
