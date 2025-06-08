// Movies data

const avengersMovies = [
  {
    title: "The Avengers",
    image: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
  },
  {
    title: "Avengers: Age of Ultron",
    image: "https://m.media-amazon.com/images/I/71Q7IoFjDjL._AC_SY679_.jpg",
  },
  {
    title: "Avengers: Infinity War",
    image: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
  },
  {
    title: "Avengers: Endgame",
    image: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
  },
  {
    title: "Captain America: The First Avenger",
    image: "https://m.media-amazon.com/images/I/71y+2mTgSJL._AC_SY679_.jpg",
  },
  {
    title: "Captain America: The Winter Soldier",
    image: "https://m.media-amazon.com/images/I/81-CB-YyhbL._AC_SY679_.jpg",
  },
  {
    title: "Captain America: Civil War",
    image: "https://m.media-amazon.com/images/I/81b8wlGajvL._AC_SY679_.jpg",
  },
];

const f1Movies = [
  {
    title: "Formula 1: Drive to Survive",
    image: "https://m.media-amazon.com/images/I/81wQK1nknvL._AC_SY679_.jpg",
  },
  {
    title: "Rush",
    image: "https://m.media-amazon.com/images/I/71IRY6o4kDL._AC_SY679_.jpg",
  },
  {
    title: "Senna",
    image: "https://m.media-amazon.com/images/I/81-S27zXjrL._AC_SY679_.jpg",
  },
  {
    title: "Grand Prix",
    image: "https://m.media-amazon.com/images/I/71QhNMRZ75L._AC_SY679_.jpg",
  },
  {
    title: "Williams",
    image: "https://m.media-amazon.com/images/I/81CLVLW18bL._AC_SY679_.jpg",
  },
  {
    title: "Le Mans",
    image: "https://m.media-amazon.com/images/I/81tC3xKkMfL._AC_SY679_.jpg",
  },
];

// Render movie grids
function renderMovies(gridId, movies) {
  const container = document.getElementById(gridId);
  container.innerHTML = "";

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "movie-card";

    const img = document.createElement("img");
    img.src = movie.image;
    img.alt = movie.title;
    img.title = movie.title;

    card.appendChild(img);
    container.appendChild(card);
  });
}

// Profile dropdown logic
const profileBtn = document.getElementById("profile-btn");
const profileDropdown = document.getElementById("profile-dropdown");

profileBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  profileDropdown.classList.toggle("show");
});

window.addEventListener("click", () => {
  profileDropdown.classList.remove("show");
});

// On load render movies
window.onload = () => {
  renderMovies("avengers-grid", avengersMovies);
  renderMovies("f1-grid", f1Movies);
};
const signoutLink = document.getElementById("signout-link");
signoutLink.addEventListener("click", (e) => {
  e.preventDefault();
  alert("You have signed out!");
  // Optional: Redirect to login page
  // window.location.href = "login.html";
});
