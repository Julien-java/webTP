function sayHelloWorld(){
    alert("hello world!");
}


function SwitchButtons(buttonId) {
    var hideBtn, showBtn;
    if (buttonId == 'Ex2Button1') {
      showBtn = 'Ex2Button2';
      hideBtn = 'Ex2Button1';
    } else {
      showBtn = 'Ex2Button1';
      hideBtn = 'Ex2Button2';
    }
    document.getElementById(hideBtn).style.display = 'none'; //step 1 :additional feature hide button
    document.getElementById(showBtn).style.display = ''; //step 2:additional feature show button
}

function isPrim() {
  var num = document.getElementById("num").value;
  var flag = true;
  console.log(num)
  for(var i = 2; i < num; i++)
    if(num % i === 0) {
      flag = false;
      break;
    }
    if(flag == true)
      alert(num + " is prime"); 
    else
      alert(num + " is not prime"); 
}


axios
.post("https://localhost:8081/", {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

