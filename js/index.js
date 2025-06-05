//All Variable
const data = {
  farmName: "",
  phoneNumber: "",
  email: "",
  cowCount: 89,
};
let email = document.querySelector('[type="email"]');
let farmName = document.getElementById("farmName");
let phoneNumber = document.getElementById("phoneNumber");
const submitDataContact = document.getElementById("submitDataContact");

function showToast(message, duration = 3000) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;

  const container = document.getElementById("toast-container");
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => {
      toast.remove();
    }, 300); 
  }, duration);
}


//2- Handler Function Logic
const handlerDataSubmit = (e) => {
  e.preventDefault();
  data.email = email.value;
  data.farmName = farmName.value;
  data.phoneNumber = phoneNumber.value;
  console.log(data);

  const myHttp = new XMLHttpRequest();
   myHttp.open("POST", "https://cors-anywhere.herokuapp.com/http://farmxpertapi.runasp.net/api/ClientRequest/Submit");
//   myHttp.open(
//     "POST",
//     "http://farmxpertapi.runasp.net/api/ClientRequest/Submit"
//   );

  myHttp.setRequestHeader("Content-Type", "application/json");

  myHttp.onreadystatechange = function () {
    if (myHttp.readyState === 4) {
      if (myHttp.status === 200) {
        showToast("Success ✅");
      } else {
       showToast("Error Not Add ❌");
      }
    }
  };

  myHttp.send(JSON.stringify(data));

  email.value="";
  farmName.value="";
  phoneNumber.value="";

};

//3-Add Function To Buttons && Run

submitDataContact.addEventListener("click", handlerDataSubmit);
