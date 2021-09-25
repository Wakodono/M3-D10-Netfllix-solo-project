const BASE_URL = "https://striveschool-api.herokuapp.com/api/movies/";

const myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMDkxOTJkNTI2MjAwMTViNmRjZjgiLCJpYXQiOjE2MzI0Nzg3OTcsImV4cCI6MTYzMzY4ODM5N30.evD1KyzoHTgpd_-9K0jNIWrZLufLLsVH3EQex6Gnpbw"
);

const getCategories = async () => {
  try {
    const response = await fetch(BASE_URL, {
        method: 'GET', 
        headers: myHeaders});
    if (response.ok) {
        const categories = await response.json();
        console.log("CATEGORIES ARR", categories);
        const movies = await Promise.all(categories.map(async (category) => {
            const resp = await fetch(BASE_URL + category, {
                headers: myHeaders
            })
            return await resp.json()
        }))
        console.log("MOVIES", movies)
    }
  } catch (error) {
    console.log("WE HAD A PROBLEM WITH THE FETCH: ", error);
  }
};

window.onload = () => {
    getCategories()
}