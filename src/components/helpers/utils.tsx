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
  if (!password || password.length <= 0) {
    return 'Contraseña no puede estar vacia.';
  }

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) {
    return 'Nombre no puede estar vacio.';
  }

  return '';
};
