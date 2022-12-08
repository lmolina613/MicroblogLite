function validateForm() {
  var fn = document.forms["regform"]["username"].value;
  var ln = document.forms["regform"]["password"].value;
  var gn = document.forms["regform"]["gender"].value;
  var ctry = document.forms["regform"]["country"].value;

  if (fn == null || fn == "") {
    alert("First name cannot be blank");
    return false;
  } else if (ln == null || ln == "") {
    alert("Last name cannot be blank");
    return false;
  } else if (gn[0].checked == false && gn[1].checked == false) {
    alert("please enter your gender");
    return false;
  } else if (ctry.selectedIndex == 0) {
    alert("Enter your Country");
    return false;
  }
  return true;
}
document.addEventListener("DOMContentLoaded", () => {
  const register = document.getElementById("register");
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  register.addEventListener("click", () => {
    console.log(username.value);
    console.log(password.value);

    if (!validateForm()) {
      return;
    }
    const baseURL = "https://microbloglite.herokuapp.com";
    const endpoint = "/api/users";
    fetch(baseURL + endpoint, {
      method: "POST",
      body: JSON.stringify({
        username: username.value,
        password: password.value,
        fullName: "Kevin Long",
      }),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.loginData = data;
        window.location.href = "/login/index.html";
        // alert("Registration Success. Please Login.")//
      });
  });
});
