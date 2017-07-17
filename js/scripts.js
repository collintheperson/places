//business logic
function Place(location, landmark, season, note) {
  this.location = location;
  this.landmark = landmark;
  this.season = season;
  this.note = note;
}

Place.prototype.description = function() {
  return this.landmark + " located in " + this.location + " was visited in " + this.season;
}

// user interface logic
$(document).ready(function(){
  $("form#new-place").submit(function(event){
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedSeason = $("input#new-season").val();
    var inputtedNote = $("input#new-note").val();
    var newPlace = new Place(inputtedLocation, inputtedLandmark, inputtedSeason, inputtedNote);
    $("ul#places").append("<li><span class='landmarkName'>" + newPlace.landmark + "</span></li>");


      $(".landmarkName").last().click(function() {
      $("#show-places").show();
      $("#show-places h4").text(newPlace.description());
      $(".noteName").text(newPlace.note);
      });

      $("input#new-landmark").val("");
      $("input#new-location").val("");
      $("input#new-season").val("");
      $("input#new-note").val("");
  });

});
