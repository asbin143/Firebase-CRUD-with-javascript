
// Your web app's Firebase configuration
var config = {
    apiKey: "Your API Key",
    authDomain: "Your API Domain",
    databaseURL: "Your Database url",
    projectId: "Your Project ID",
    storageBucket: "Your Stogae Bucket",
    messagingSenderId: "Your messagingSenderId",
    appId: "Your App ID",
    measurementId: "Your measurementId"
  };
// Initialize Firebase
firebase.initializeApp(config);
dbRef = firebase.database().ref();

const usersRef = dbRef.child('users');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {

	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.name;
	$li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", userClicked)
	userListUI.append($li);

});


function userClicked(e) {

	var userID = e.target.getAttribute("child-key");

	const userRef = dbRef.child('users/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => {


		var $p = document.createElement("p");
		$p.innerHTML = snap.key  + " - " +  snap.val()
		userDetailUI.append($p);


	});

}

