function validate(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  //   let error_message = document.getElementsByName("error_message");

  error_message.style.padding = "10px";

  let text;
  if (name.length < 5) {
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }

  if (isNaN(phone) || phone.length != 10) {
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 10) {
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }

  post("https://formspree.io/mwkrneyd");

  //   document.querySelector("form").action = "https://formspree.io/mwkrneyd";
  return true;
  //   action = "https://formspree.io/mwkrneyd";
  //   method="POST"
}

document.querySelector(".form-btn").addEventListener("click", validate);

function post(path, method = "post") {
  // The rest of this code assumes you are not using a library.
  // It can be made less wordy if you use one.

  form.method = method;
  form.action = path;
}
