function search() {
  const searchInput = document.getElementById('input').value
  document.querySelectorAll(".Car").forEach(car => {
    const title = car.querySelector(".card-title").innerText;
    const matched = title.toLowerCase().includes(searchInput.toLowerCase());
    console.log(title, matched);
    if (!matched) {
      car.style.display = "none";
    } else {
      car.style.display = "block";
    }
  })
}
