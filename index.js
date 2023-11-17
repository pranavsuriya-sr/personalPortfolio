import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, push, get } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE9mfKYGvPv4yHlz204_BVwkEZe8iCj9I",
  authDomain: "portfeed-873cd.firebaseapp.com",
  projectId: "portfeed-873cd",
  storageBucket: "portfeed-873cd.appspot.com",
  messagingSenderId: "782424343269",
  appId: "1:782424343269:web:4ba20f07d18a216d330a0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const name = document.getElementById("name1");
const email = document.getElementById("email1");
const comm = document.getElementById("comm1");


form1.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission
  
    // Get values from the form
    const name1 = name.value;
    const email1 = email.value;
    const comm1 = comm.value;
  
    // Push the data to the Firebase Realtime Database
    const feedbackRef = ref(database, 'users');
    push(feedbackRef, {
      name: name1,
      email: email1,
      comments: comm1
    }).then(() => {
      // Data has been successfully pushed
      alert("Thanks for connecting with us!");
      // You can add any further actions or UI updates here
    }).catch((error) => {
      // Handle errors if data push fails
      alert("Error recording responses: ", error);
    });
  
    // Clear the form fields
    name.value = '';
    email.value = '';
    comm.value = '';
  });