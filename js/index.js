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

//2- Handler Function Logic
const handlerDataSubmit = (e) => {
  e.preventDefault();
  data.email = email.value;
  data.farmName = farmName.value;
  data.phoneNumber = phoneNumber.value;
  console.log(data);

  const myHttp = new XMLHttpRequest();
   myHttp.open("POST", "http://farmxpertapi.runasp.net/api/ClientRequest/Submit");
//   myHttp.open(
//     "POST",
//     "http://farmxpertapi.runasp.net/api/ClientRequest/Submit"
//   );

  myHttp.setRequestHeader("Content-Type", "application/json");

  myHttp.onreadystatechange = function () {
    if (myHttp.readyState === 4) {
      if (myHttp.status === 200) {
        myHttp.send(JSON.stringify(data));
        console.log("Done ✅", myHttp.responseText);
      } else {
        console.error("Error ❌", myHttp.status, myHttp.responseText);
      }
    }
  };

 
//Reset Data
  email.value="";
  farmName.value="",
  phoneNumber.value="",

};

//3-Add Function To Buttons && Run

submitDataContact.addEventListener("click", handlerDataSubmit);
