document.getElementById("submit").addEventListener("click", fazerLogin);

function fazerLogin() {
  
 
let email = document.getElementById("email").value;
  
 
let senha = document.getElementById("senha").value;

  

 


if (email === "email" && senha === "senha") {
    
   
// redirecionar para a página principal
    
   
window.location.href = "./projeto1.html";
  } 
 
else {
    
   
alert("Login não autorizado");
  }
}

//document.getElementById("sumit").addEventListener("click", fazerLogin); 
    //function fazerLogin () {
    //valores de entrada do formulario

  //function fazerLogin() {
 
   //let email = document.getElementById("email").value;

  //console.log(email)

  //let senha = document.getElementById ("senha").value;

  //console.log(senha)

    // como validar o email e senha 

 //if (email === "email" && senha === "senha") {
        // redirecionar para a pagina principal 
       //window.location.href = "./projeto1.html";

 // } else {
          
   // alert("login não autorizado");
// }
   //  };

  