// JS p/ login.html//
// alert('Ya está enlazado');

// function registro() {
//   console.log('diste un click');
//   let nombre = document.getElementById('nombre').value;
//   let email = document.getElementById('correo').value;
//   let contraseña = document.getElementById('contraseña1').value;
//   console.log(nombre, email, contraseña);

//   firebase.auth().createUserWithEmailAndPassword(email, contraseña).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorCode);
//     console.log(errorMessage);
//     // ...
//   });
// }

// function entrar() {
//   let correo1 = document.getElementById('correo1').value;
//   let contraseña1 = document.getElementById('contraseña1').value;

//   firebase.auth().signInWithEmailAndPassword(correo1, contraseña1).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorCode);
//     console.log(errorMessage);
//     // ...
//   });
// }

let names = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password1');
let btnAddMember = document.getElementById('newMember');


btnAddMember.addEventListener('click', (event) => {  
  console.log(event);
  let nm = names.value;
  console.log(nm);
  let pass = password.value;
  console.log(pass);
  let ml = email.value;
  console.log(ml);
  
  const auth = firebase.auth();
  
  const promise = auth.createUserWithEmailAndPassword(ml, pass);

  promise.then(function(docRef) {
    console.log('document write with ID:', docRef.id); // falta que me lance el id
    // se pide que cuando ejecute la funcion deje los campos vacios una vez que se envie la info
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password1').value = '';
  })
    .catch(function(error) {
      console.error('Error adding document:', error);
    });
});


