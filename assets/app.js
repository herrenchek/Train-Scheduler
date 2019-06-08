// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD1NEd3NUHsO2vfDU3AIVB7-n6r3hLm6bk",
    authDomain: "train-scheduler-507fc.firebaseapp.com",
    databaseURL: "https://train-scheduler-507fc.firebaseio.com",
    projectId: "train-scheduler-507fc",
    storageBucket: "train-scheduler-507fc.appspot.com",
    messagingSenderId: "157556942673",
    appId: "1:157556942673:web:e517bda842b2c04e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

var train = "";
var destination = "";
var arrival = "";
var frequency = "";
//<th scope="col">Minutes Away</th>

$("#add-train").on("click", function () {
    event.preventDefault();

    // Capture user input
    train = $("#train-name-input").val().trim();
    destination = $("#destination-input").val().trim();
    arrival = $("#first-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    // Push user input to database
    database.ref().push({
        train: train,
        destination: destination,
        frequency: frequency,
        arrival: arrival
    })
})

database.ref().on("child_added", function (snapshot) {
    var train = snapshot.val().train;
    var destination = snapshot.val().destination;
    var frequency = snapshot.val().frequency;
    var arrival = snapshot.val().arrival;

    // Add new row to table
    var row = $("tr").append(
        $("<td>").text(train),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(arrival),
        $("<td>")
    );

    $("tbody").append(row);
})

