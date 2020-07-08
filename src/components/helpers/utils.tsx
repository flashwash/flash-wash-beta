export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) {
    return 'Email es requerido.';
  }
  if (!re.test(email)) {
    return 'Ooops! Necesitamos un email valido.';
  }

  return '';
};

export const passwordValidator = (password: string) => {
  const passwordRegex = /^(?=.*\d)(?=.*[~!@#$%^&*)(_+:[}="`-])(?=.*[a-z])(?=.*[A-Z])[~!@#$%^&*)(+:[}="`\w-]{8,}$/;
  const testRegex = passwordRegex.test(password);
  if (!password || password.length <= 0) {
    return 'Contraseña no puede estar vacia.';
  }
  if (!testRegex) {
    return 'Contraseña debe ser de 8 caracteres, Debe Incluir al menos 1 Mayuscula, 1 Minuscula, 1 numero y 1 simbolo';
  }

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) {
    return 'Nombre no puede estar vacio.';
  }

  return '';
};
