export const newReviewFetch = async payload => {
  const { email, review, vacancy } = payload;
  let response = await fetch("/account/newReview", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({
      email: email,
      review: review,
      vacancy: vacancy
    })
  });
  let result = await response.json();
  return result;
};
