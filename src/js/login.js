// JS p/ login.html//
//alert('Ya está enlazado');
var config = {
    apiKey: "AIzaSyBBL2vG5GR2GZnUkLrpPZ-mDbyKie8nxgM",
    authDomain: "registro-de-visitantes-a0747.firebaseapp.com",
    databaseURL: "https://registro-de-visitantes-a0747.firebaseio.com",
    projectId: "registro-de-visitantes-a0747",
    storageBucket: "registro-de-visitantes-a0747.appspot.com",
    messagingSenderId: "629215938937"
  };
  firebase.initializeApp(config);

  function registro(){
      console.log('diste un click')
      let nombre = document.getElementById('nombre').value;
      let email = document.getElementById('correo').value;
      let contraseña = document.getElementById('contraseña').value;
      console.log(nombre, email, contraseña)

      firebase.auth().createUserWithEmailAndPassword(email, contraseña).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
  }

  function entrar(){
    let correo1 = document.getElementById('correo1').value;
    let contraseña1 = document.getElementById('contraseña1').value;

    firebase.auth().signInWithEmailAndPassword(correo1, contraseña1).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
  }
