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

  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var trainTime = moment($("#train-time-input").val().trim(), "HH:mm").format("HH:mm");
  var frequency = $("#frequency-input").val().trim();

  var newTrain = {
    trainName: trainName,
    destination: destination,
    trainTime: trainTime,
    frequency: frequency
  };

database.ref().push(newTrain);

});
  //Store variables and handle push

  //Store snapshot

  //Grab onchild events and store

  //Display to HTML

  
