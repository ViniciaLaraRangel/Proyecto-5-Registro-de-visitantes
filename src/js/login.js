// JS p/ login.html//
//alert('Ya está enlazado');
var config = {
  apiKey: 'AIzaSyBBL2vG5GR2GZnUkLrpPZ-mDbyKie8nxgM',
  authDomain: 'registro-de-visitantes-a0747.firebaseapp.com',
  databaseURL: 'https://registro-de-visitantes-a0747.firebaseio.com',
  projectId: 'registro-de-visitantes-a0747',
  storageBucket: 'registro-de-visitantes-a0747.appspot.com',
  messagingSenderId: '629215938937'
};
firebase.initializeApp(config);

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


