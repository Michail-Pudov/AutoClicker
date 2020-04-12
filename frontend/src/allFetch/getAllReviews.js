export const getAllReviews = async () => {
  let response = await fetch("/account/getAllReviews", {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    }
  });
  let result = await response.json();
  return result;
};
