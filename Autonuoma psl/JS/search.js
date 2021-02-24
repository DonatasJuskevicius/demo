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
jQuery('#selectContainer select').on('change', function() {
  var cars = jQuery('#custom-select').val();
 
  
    jQuery('div.card').hide();
    
    jQuery('div.card').each(function() {
      if(jQuery(this).hasClass(cars)){
      jQuery(this).show();
      }
    });
    
  });