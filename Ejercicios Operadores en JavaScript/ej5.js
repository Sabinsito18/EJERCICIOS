const validarContraseña = (password) => {
    if (password.length <= 8) return false; 
    let tieneMayuscula = false;
    let tieneNumero = false;
    let tieneEspacios = false;
  
    for (let i = 0; i < password.length; i++) {
      if (password[i] === ' ') tieneEspacios = true; 
      if (password[i] >= 'A' && password[i] <= 'Z') tieneMayuscula = true; 
      if (password[i] >= '0' && password[i] <= '9') tieneNumero = true;  
    }
  
    return !tieneEspacios && tieneMayuscula && tieneNumero;
  };
  
  console.log(validarContraseña("Contrase1a")); 
  console.log(validarContraseña("contra"));
  console.log(validarContraseña("Contrase@ 1"));
  console.log(validarContraseña("12345678")); 
  