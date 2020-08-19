const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount() {
  const seletedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = seletedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// movie select event listener
movieSelect.addEventListener("change", (e) => {
  ticketPrice = e.target.value;
  updateSelectedCount();
});

// seat click event listener
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});
