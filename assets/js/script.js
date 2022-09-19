//----------------------------
//designate global variables
var formEl = $("#btn-submit");
var restaurantCard = $(".card");
var navSelector = $("#genrePicker");
var cardholder = $("#cardholder");

var introPage = $("#intro-page");
var reviewModal = $("#reviewModal");
var h2El = $("#h2El");
var h3El = $("#h3El");
var selectedGenre;

function getRestaurants() {
  $("#cardholder").empty();
  var optionValue = $("#genrePicker").val();
  var apiUrl = baseUrl + apiKey + "&with_genres=" + optionValue;
  console.log(apiUrl);

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.results.length > 3) data.results.length = 3;
      showRestaurant(data);

      cardholder.show();
      introPage.hide();
    });
}
//create a function to show restaurant info
function showRestaurant(data) {
  cardholder.innerHTML = "";
  console.log(data.results);
  data.results.forEach((restaurant) => {
    var { name, food_image, ovrRating } = restaurant;
    var restaurantEl = document.createElement("div");
    restaurantEl.classList.add("restaurant");
    restaurantEl.innerHTML = `
    <section id="cardholder" class="row justify-content-center row-cols-lg-2 row-cols-md-1 g-4">
          <div class="card justify-content-center" style="min-height: 285px; width:575px; padding:4px">
      <div class="row">
        <div class="col-md-12">
          <img src="${restaurant_image}" class="rounded-start" alt="${title}">
      </div>
      <div class="col-md-12">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${overview}</p> <button alt=${title} class="btn btn-outline-danger justify-content-flex-end" data-bs-target="#"
    data-bs-toggle="modal">Click here to view restaurant</button>
        </div>`;
    cardholder.append(restaurantEl);
  });
}

//select which elements will be hidden on initial page load
cardholder.hide();
reviewModal.hide();
//----------------------------

//-----------------------------
//create a function to generate a modal containing a review form
function getReviewModal() {
  //---------------------------
  $("#reviewModal").show;
  $("reviewModal").click(function () {});
}
//---------------------------
//add event listener to the restaurant card to open up that specific restaurant's menu when clicked
$("#cardholder").on("click", ".card", function (e) {
  console.log("test");
  console.log(e.target);
});
//---------------------------

//---------------------------
//add event listener to the nav bar on the top of the page to take the selected genre and generate the cards within that genre

submitBtn.on("click", function (event) {
  event.preventDefault();
  var searchInput = navSelector.val();

  generateCards(searchInput);
  introPage.hide();
});
//--------------------------

navSelector.on("change", showRestaurant);
//--------------------------
