"use strict";

const output = document.getElementById("output");

axios.get("http://localhost:4494/kitten/getAll")
    .then(res => console.log("RESPONSE: ", res))
    .catch(err => console.error(err));