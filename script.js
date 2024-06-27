const buttonEle = document.querySelectorAll("button");
const inputEl = document.getElementById("result");
console.log(buttonEle);

for(let i =0 ; i<buttonEle.length;i++){
  buttonEle[i].addEventListener("click" , ()=>{
    let buttonValue =buttonEle[i].textContent;
    if(buttonValue=='C'){
      clearResult();
    }
    else if(buttonValue == "="){
      calResult();
    }else{
      appendVl(buttonValue);
    }
  });
}

function clearResult() {
  
  inputEl.value="";
}

function calResult(){
  inputEl.value=eval(inputEl.value);
}

function appendVl(buttonValue) {
  inputEl.value+=buttonValue;
}
