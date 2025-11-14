document.getElementById("youthForm").addEventListener("submit", function (e) {
    e.preventDefault();

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
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(response => {
        document.getElementById("msg").innerText = "Saved successfully!";
        document.getElementById("successModal").style.display = "block";
        document.getElementById("youthForm").reset();
    })
    .catch(err => {
        document.getElementById("msg").innerText = "Error saving!";
    });
});

document.getElementById("closeModalBtn").addEventListener("click", function () {
    document.getElementById("successModal").style.display = "none";
});

