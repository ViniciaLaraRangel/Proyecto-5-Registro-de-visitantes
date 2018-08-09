// JS p/ registro.html//
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBBL2vG5GR2GZnUkLrpPZ-mDbyKie8nxgM',
  authDomain: 'registro-de-visitantes-a0747.firebaseapp.com',
  databaseURL: 'https://registro-de-visitantes-a0747.firebaseio.com',
  projectId: 'registro-de-visitantes-a0747',
  storageBucket: 'registro-de-visitantes-a0747.appspot.com',
  messagingSenderId: '629215938937'
};
firebase.initializeApp(config);

var db = firebase.firestore();

document.getElementById('safeinfo').addEventListener('click', event => {
  event.preventDefault();
  const nombre = document.getElementById('username').value;

  const correo = document.getElementById('useremail').value;

  const fecha = document.getElementById('registerdate').value;

  const hora = document.getElementById('registertime').value;

  const anfitrion = document.getElementById('member').value;

  // const hora = document.getElementById('registertime').value;
  console.log(anfitrion);
  db.collection('register').add({
    name: nombre,
    email: correo,
    date: fecha,
    time: hora,
    member: anfitrion
  }).then(result => {
    location.reload(true);
  }).catch(error => {
    console.log('noooooo');
  });
});

// window.

