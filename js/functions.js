function submitForm(){
    const form = document.forms['contactForm']
    
    var name     = form["name"].value
    var company  = form["company"].value
    var email    = form["email"].value
    var phone    = form["phone"].value
    var message  = form["message"].value

    console.log(name)

    saveMessageBackend(name, company, email, phone, message)

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

function saveMessageBackend(name, company, email, phone, message){
    // DatabaseReference
    const addRequest = firebase.functions().httpsCallable("addRequest")
    addRequest(
	{
	    name: name,
	    company: company,
	    email: email,
	    phone: phone,
	    message: message
	}
    ).then( () => {
	alert("Mensagem enviada com sucesso");
    }).catch( (error) => {
	alert("Um erro ocorreu");
    })
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

var databaseReference = firebase.database().ref("TT905_2020")


/*
  Say Hello
*/

function sayHelloToFirebase() {
    const form = document.forms['sayHello']
    
    var name     = form["name"].value

    // Criando uma referência para a função que está no servidor.
    const sayHello = firebase.functions().httpsCallable("sayHello");
    sayHello(
	{
	    name : name 
	}
    ).then(
	(result) => {
	    alert(result.data);
	}
    );
    
    return false;
}


//////////////////////////////////////////////////
//////////////////////////////////////////////////

firebase.auth().onAuthStateChanged( (user) => {
    header_form = document.getElementById("header_form");
    logged_user = document.getElementById("logged_user");

    if (user) {
	header_form.className="closed"
	logged_user.className="open"

	user_span = document.getElementById("user_span")
	user_span.innerHTML = user.email
    } else {
	header_form.className="open"
	logged_user.className="closed"
    }

});

function signOut(){        
    firebase.auth().signOut().then(
	() => {
	    console.log('signedOut')
	}
    )
}

function submitAuthentication(e){
    e.preventDefault();

    console.log("ulisses");
    
    
    const form = document.forms["login_form"];

    const email = form.email.value;
    const pass  = form.senha.value;

    
    firebase.auth().signInWithEmailAndPassword(email, pass).then(
    	(user) => {
	    form.reset()
    	}
    ).catch( (error) => {
	alert(error.message);
    });
}


function submitRegistro(e){
    e.preventDefault();
    const form = document.forms["login_form"];

    const email = form.email.value;
    const pass  = form.senha.value;

    firebase.auth().createUserWithEmailAndPassword(email, pass).then(
	(user) => {
	    console.log('registered', user);
	    form.reset();
	}
    ).catch( (error) => {
	alert(error.message);
    });
}
