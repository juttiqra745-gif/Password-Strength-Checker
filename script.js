const Password = document.getElementById("password");
const Result = document.getElementById("result");

Password.addEventListener("input" , function(){
    let pass = Password.value;
    if(pass.length === 0){
        Result.textContent = "";
    }else
    if(pass.length < 4){
    Result.textContent = "weak";
    Result.style.color = "red";
    }else if(pass.length < 8){
        Result.textContent = "Medium";
        Result.style.color = "orange";
    }else{
        Result.textContent = "Strong"
        Result.style.color = "green";
    }
});