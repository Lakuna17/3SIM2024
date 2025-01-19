function showWelcomeMessage() {
    alert("Selamat Datang!");
}

function displayFormData() {
    var name = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    alert("Nama: " + name + "\nEmail: " + email + "\nPassword: " + password);
}