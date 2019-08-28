// Business Logic for ticket ---------
function Ticket(movieName, movietime, age) {
  this.movieName = movieName,
  this.movietime = movietime,
  this.age = age,
  this.price = 20
}


Ticket.prototype.calculatePrice = function() {
  if(this.movieName === "Spiderman" && (this.))
}




$(document).ready(function() {

  $("form#movies").submit(function(event) {
    event.preventDefault();
    var inputtedMovieName = $("input:radio[name=movie]:checked").val();
    var inputtedMovieTime = $("input:radio[name=movie]:checked").val();
    var inputtedAge = $("input:radio[name=movie];checked").val();
  console.log(inputtedage);






var newTicket = new Ticket(inputtedMovieName,inputtedMovieTime, inputtedAge);
  newTicket.calculeatePrice();
  console.log(newTicket.price);

$("#result-price").show();
