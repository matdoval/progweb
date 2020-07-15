function submitForm(){
    const form = document.forms['contactForm']
    
    var name     = form["name"].value
    var company  = form["company"].value
    var email    = form["email"].value
    var phone    = form["phone"].value
    var message  = form["message"].value

    console.log(name)

    saveMessage(name, company, email, phone, message)

    afterSend();
    
    return false;
}

function saveMessage(name, company, email, phone, message){
    // DatabaseReference
    var newDatabaseReference = databaseReference.push();

    newDatabaseReference.set(
	{
	    name: name,
	    company: company,
	    email: email,
	    phone: phone,
	    message: message
	}
    )
}

function afterSend(){
    confirm = document.getElementById("confirm");
    confirm.className = "open";
    // Esperar 3 segundos
    setTimeout(
	() => {
	    confirm.className = "closed";
	}, 3000);
}

// Your web app's Firebase configuration
var firebaseConfig = {
		apiKey: "AIzaSyDrLMoV2Ag24sTXwmI_l-eaC4pqeiyatvc",
		authDomain: "doval-2020.firebaseapp.com",
		databaseURL: "https://doval-2020.firebaseio.com",
		projectId: "doval-2020",
		storageBucket: "doval-2020.appspot.com",
		messagingSenderId: "580048359447",
		appId: "1:580048359447:web:bfca79f644414537f68c52",
		measurementId: "G-1VCME8HDZ6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var databaseReference = firebase.database().ref("TT905_2020")
