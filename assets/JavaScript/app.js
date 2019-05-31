  var firebaseConfig = {
    apiKey: "AIzaSyB0ktPSVdR0igfrrDpbpMh-5vkbPiFT0CY",
    authDomain: "train-schedule-4f9d5.firebaseapp.com",
    databaseURL: "https://train-schedule-4f9d5.firebaseio.com",
    projectId: "train-schedule-4f9d5",
    storageBucket: "train-schedule-4f9d5.appspot.com",
    messagingSenderId: "170144088159",
    appId: "1:170144088159:web:20f0978536282769"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Set up Database
  var database = firebase.database();

  //Grab the button click, on click event
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  var trainName   = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var trainTime   = moment($("#train-time-input").val().trim(), "HH:mm").format("HH:mm");
  var frequency   = $("#frequency-input").val().trim();

  var newTrain = {
    trainName: trainName,
    destination: destination,
    trainTime: trainTime,
    frequency: frequency
  };

database.ref().push(newTrain);

$("#train-name-input").val("");
$("#destination-input").val("");
$("#train-time-input").val("");
$("#frequency-input").val("");

});

database.ref().on("child_added", function(snapshot){

  var trainName   = snapshot.val().trainName;
  var destination = snapshot.val().destination;
  var trainTime   = snapshot.val().trainTime;
  var frequency   = snapshot.val().frequency;

  //calculate the next train time
  var firstTrainTime = moment(trainTime, "HH:mm").subtract(1, "years");
  console.log(firstTrainTime);

  var currentTime = moment();
  
  var timeBetween = currentTime.diff(moment(firstTrainTime), "minutes");
  console.log(timeBetween);
    
  var minutesRemainder = timeBetween % frequency;
  console.log(minutesRemainder);

  var minutesUntilNextTrain = frequency - minutesRemainder;

  var nextTrain = moment().add(minutesUntilNextTrain, "minutes").format("hh:mm A");

  var row = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(frequency),
    $("<td>").text(nextTrain),
    $("<td>").text(minutesUntilNextTrain)
  );

  $("#time-table").append(row);

});
  //Store variables and handle push

  //Store snapshot

  //Grab onchild events and store

