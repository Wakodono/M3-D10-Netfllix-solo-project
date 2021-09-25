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

displayMovies = (movies) => {
    const movieSection = document.querySelectorAll(".container-fluid .pl-lg-5 .mt-3")
    const movieRow = document.querySelectorAll(".row .m-n1")

    const singleMovie = `<div class="col px-1">
    <img
      src="/assets/netflix_logo.png"
      class="netflix-logo"
      height="40px"
      alt="Netflix Logo"
    />
    <img src=${movies.name} alt=${movies.name} />
  </div>`

    if (movies.length > 0) {
        movies.forEach(movie => {
            
        });
    }
}
{/* <div class="container-fluid pl-lg-5 mt-3">
      <!--Container 1 row 1 trending -->

      <div class="row m-n1">
        <h3>Trending Now</h3>
        <div class="d-flex flex-nowrap">
          <div class="col px-1">
            <img
              src="/assets/netflix_logo.png"
              class="netflix-logo"
              height="40px"
              alt="Netflix Logo"
            />
            <img src="/assets/media/media0.webp" alt="Sherlock" />
          </div>

          <div class="col px-1">
            <img src="/assets/media/media1.jpg" alt="American Factory" />
          </div>

          <div class="col px-1">
            <img
              src="/assets/netflix_logo.png"
              class="netflix-logo"
              height="40px"
              alt="Netflix Logo"
            />
            <img src="/assets/media/media2.webp" alt="The Good Place" />
          </div>

          <div class="col px-1">
            <img src="/assets/media/media4.jpg" alt="Cuba" />
          </div>

          <div class="col px-1">
            <img
              src="/assets/netflix_logo.png"
              class="netflix-logo"
              height="40px"
              alt="Netflix Logo"
            />
            <img src="/assets/media/media3.webp" alt="Genius" />
          </div>

          <div class="col px-1">
            <img src="/assets/media/media6.jpg" alt="Social Dilemma" />
          </div>

          <div class="col px-1">
            <img
              src="/assets/netflix_logo.png"
              class="netflix-logo"
              height="40px"
              alt="Netflix Logo"
            />
            <img src="/assets/media/media5.webp" alt="The China Hustle" />
          </div>
        </div>
      </div>
    </div> */}

window.onload = () => {
    getCategories()
}