let inputName=document.getElementById("name");
let inputEmail=document.getElementById("email");
let inputPassword=document.getElementById("password");
let inputRepeatPassword=document.getElementById("pas");
let inputChecked=document.getElementById("checked");
let inputDropDown=document.getElementById("dropDown");
let reg=document.getElementById("reg");
//////////////////////////////////////////////////////////////////////////////FOR INPUT NAME
inputName.onfocus=function(){
    inputName.style.border="2px solid blue"
}

inputName.onblur=function(){
    inputName.style.border="2px solid gray"
    validateName()
}
////////////////////////////////////////////////////////////////////////////


function validateName(){
    let error=document.getElementById("error")
    if(inputName.value.length <3 || inputName.value==""){
error.style.display="block";
inputName.style.border="2px solid blue"

    }else{
        error.style.display="none" 
        inputName.style.border="2px solid gray" 
    }
}
///////////////////////////////////////////////////////////////////////////FOR PASSWORD INPUT 




function requiredPass(inputVal){
    let errorPass=document.getElementById("errorPass")
    if(inputVal == ""){
errorPass.style.display="block";

    }else{
        errorPass.style.display="none";
       
    }
}


function  equality(){
    let errorPass=document.getElementById("PassSame")
    if (inputPassword.value !=inputRepeatPassword.value) {
        errorPass.style.display="block";

        
    }else{
        errorPass.style.display="none"; 
    }

}


inputPassword.onblur=function(){
    requiredPass(this.value)
};

inputRepeatPassword.onblur=function(){
    requiredPass(this.value) ;
    equality()

}
////////////////////////////////go to



reg.onclick=function(){


if(inputName.value==""||  inputName.value.length <3||inputDropDown.value=="" ||inputEmail.value=="" ||inputPassword.value=="" || (inputPassword.value !=inputRepeatPassword.value)){
document.getElementById("all").style.display="block"

}else{
    document.getElementById("all").style.display="none"  ;
    setTimeout(function(){
        location.assign("show.html");
        },5000)
        
}


}



