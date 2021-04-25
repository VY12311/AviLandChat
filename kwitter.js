function addUser() {
    var iuser = localStorage.getItem("Username");
    var ipass = localStorage.getItem("Password");
    var user = document.getElementById("user_name").value;
    var pass = document.getElementById("Password").value;
    if (iuser == user && ipass == pass) {
        window.location = "kwitter_room.html";
    } else {
        localStorage.setItem("Username",user);
        localStorage.setItem("Password",pass);
        window.location = "kwitter_room.html";
    }
}