function fazerLogin() {

  let email = document.getElementById("email").value;

  let senha = document.getElementById("senha").value;

  // como validar o email e senha 
  if (email === "email" && senha === "senha") {
    // redirecionar para a pagina principal
    window.location.href = "./projeto1.html";

  } else {
    alert("sua entrada não está autorizada");

  };
}
