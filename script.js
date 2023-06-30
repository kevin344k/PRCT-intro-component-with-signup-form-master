//inputs
const inputFirstName = document.querySelector("#inputFirstName")
const inputLastName = document.querySelector("#inputLastName")
const inputEmail = document.querySelector("#inputEmail")
const inputPass = document.querySelector("#inputPass")

const butSend = document.querySelector("#butSend")

//divs
const input_name = document.querySelector(".input-name")
const input_last_name = document.querySelector(".input-last-name ")
const input_email = document.querySelector(".input-email")
const input_password = document.querySelector(".input-password")

//spans
const spanName = document.querySelector("#spanName")
const spanLastName = document.querySelector("#spanLastName ")
const spanEmail = document.querySelector("#spanEmail")
const spanPass = document.querySelector("#spanPass")
//icons
const icoErrorName = document.querySelector("#icoErrorName")
const icoErrorLastName = document.querySelector("#icoErrorLastName ")
const icoErrorEmail = document.querySelector("#icoErrorEmail")
const icoErrorPass = document.querySelector("#icoErrorPass")
let arr
//button
butSend.addEventListener("click", (e) => {
    e.preventDefault()
if (inputFirstName.value !="" && inputLastName.value !="" && inputEmail.value !="" && inputPass.value!="") {
    let str=inputEmail.value
         arr=str.split(".")
   if (arr[1]=="com") {
    console.log(arr)
    
    alert("todos los campos llenos")
   }   else {
    paintError(input_email, icoErrorEmail, spanEmail)
    inputEmail.placeholder="email@example.com"
    inputEmail.classList.add("email-placeholder")
   }  
     
}else{
    validatorForm(inputFirstName.value, inputLastName.value, inputEmail.value, inputPass.value)

}
})


function validatorForm(firstName, lastName, email, password) {



    if (firstName == "") {
        paintError(input_name, icoErrorName, spanName)
    } else {
        removeError(input_name, icoErrorName, spanName)
    }
        if (lastName == "") {
            paintError(input_last_name, icoErrorLastName, spanLastName)
        } else {
            removeError(input_last_name, icoErrorLastName, spanLastName)
        }
    if (email == "") {
        paintError(input_email, icoErrorEmail, spanEmail)
        inputEmail.placeholder="email@example.com"
        inputEmail.classList.add("email-placeholder")
    } else {
        removeError(input_email, icoErrorEmail, spanEmail)
      

 
       
    }
        if (password == "") {
            paintError(input_password, icoErrorPass, spanPass)
        } else {
            removeError(input_password, icoErrorPass, spanPass)
        }
}


function paintError(input, ico, span) {

    input.classList.add("div-error")
    ico.style.display = "block"
    span.style.display = "block"
}

function removeError(input, ico, span) {

    input.classList.remove("div-error")
    ico.style.display = "none"
    span.style.display = "none"
}