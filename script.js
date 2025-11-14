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

  fetch("https://script.google.com/macros/s/AKfycbxPFio2UftR7mn3b7VItPFJyDweQDx9hcy_lS9uHg1sgGdLRpOheZo_VR5V_SO5avUKIQ/exec", {
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
<script>
document.getElementById("yscForm").addEventListener("submit", function(e){
    e.preventDefault();

    let form = document.getElementById("yscForm");
    let formData = new FormData(form);

    let jsonData = {};
    formData.forEach((value, key) => jsonData[key] = value);

    fetch("https://sheetdb.io/api/v1/g2ds660j9ycts", {
        method: "POST",
        body: JSON.stringify({ data: jsonData }),
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("message").innerText = "Saved successfully!";
        form.reset(); 
    })
    .catch(error => {
        document.getElementById("message").innerText = "Error saving data!";
    });
});
</script>

