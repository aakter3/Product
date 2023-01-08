//Seach
function getValue(){
    let text = document.getElementById("text");
    let textValue = text.value;
    let result = document.getElementById("result");
    result.innerText = textValue;
}

//Button color change
function myFunction(event){
    let btn = event.target;
    let btnClass = btn.getAttribute("class");
    if(btnClass == "btn btn-outline-secondary"){
        btn.innerText= "Dismissed";
        btn.setAttribute("class","btn btn-outline-danger");
    } else{
        btn.innerText = "Dismiss";
        btn.setAttribute("class","btn btn-outline-secondary");
    }

}
