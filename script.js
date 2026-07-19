import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
getAuth,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAyTw1czFX8uR4rnJOP7cVxCr55_nhOHG0",
  authDomain: "arfgames-staff.firebaseapp.com",
  projectId: "arfgames-staff",
  storageBucket: "arfgames-staff.firebasestorage.app",
  messagingSenderId: "705112766623",
  appId: "1:705112766623:web:455c3c3b2f14c37b5b4aaa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginBtn").addEventListener("click", () => {

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

signInWithEmailAndPassword(auth,email,password)
.then(() => {

window.location.href="friends.html";

})
.catch((error)=>{

alert(error.message);

});

});
