const getCategories = async (url) => {
  try {
      const response = await fetch(url, {
        headers: {
          "Authorization":
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMDkxOTJkNTI2MjAwMTViNmRjZjgiLCJpYXQiOjE2MzI2ODA1MDksImV4cCI6MTYzMzg5MDEwOX0.MSSPVBa94MWIusyZ2_pN1QNSAUlWbdOOJfPPjC9mX_4"
        }
      })

      if (!response.ok) { throw "Something went wrong with the fetch" }

      const categories = await response.json()
      console.log("CATEGORIES ARRAY", categories)
      return categories

  } catch (err) {
      alert("WE HAVE AN ISSUE: " + err)
  }
}

const getMovies = async (url, categories) => {
  try {
    const movies = await Promise.all(categories.map(async (category) => {
      const r = await fetch(url + category, {
        headers: {
          "Authorization":
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMDkxOTJkNTI2MjAwMTViNmRjZjgiLCJpYXQiOjE2MzI2ODA1MDksImV4cCI6MTYzMzg5MDEwOX0.MSSPVBa94MWIusyZ2_pN1QNSAUlWbdOOJfPPjC9mX_4"
        }
      })
      return await r.json()
    })
    )
    console.log(movies)
  } catch (error) {
    console.log(error)
  }
}

/* const displayEvents = (array, containerNode) => {

  console.log("TEST NODE", containerNode)

  containerNode.innerHTML = ""

  if (array.length > 0) {
      array.forEach(event => {

          const li = document.createElement("li")
          li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
          li.innerHTML = `<span>${event.name}</span><div><span class="badge badge-dark mr-3">${event.price}€</span><a href="./detail.html?eventId=${event._id}">VIEW DETAILS</a></div>`

          containerNode.appendChild(li)
      })
  }
} */

{/* <div class="row m-n1">
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
      </div> */}

window.onload = async () => {
  const url = "https://striveschool-api.herokuapp.com/api/movies/";
  const movieSection = document.querySelector("div.row.m-n1")

  try {
      const categoriesArr = await getCategories(url)
      
      // displayEvents(events, eventsList)

  } catch (err) {
      console.log(err)
  }

}