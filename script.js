document.getElementById("youthForm").addEventListener("submit", function(event){
  event.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    gender: document.getElementById("gender").value,
    age: document.getElementById("age").value,
    outstation: document.getElementById("outstation").value,
    kin: document.getElementById("kin").value,
    contact: document.getElementById("contact").value
  };

  fetch("https://script.google.com/macros/s/AKfycbw29sh9miicDFBJI9kE62RGNfqfhP6Jix0XUttNy7HZmaThId_aOIU0FkfTskMFB5LsyA/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(() => {
    // SHOW SUCCESS MODAL
    document.getElementById("successModal").style.display = "block";
    document.getElementById("youthForm").reset();
  })
  .catch(err => alert("Error: " + err));
});

document.getElementById("closeModalBtn").addEventListener("click", function(){
  document.getElementById("successModal").style.display = "none";
});
