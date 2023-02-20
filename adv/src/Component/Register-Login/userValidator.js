const emailValidat = /[^\s@]+@[^\s@]+\.[^\s@]+/;
function EmailValidator(email) {
  let nameRegex = emailValidat.test(email.trim());
  if (nameRegex) {
    return true;
  } else {
    return false;
  }
}
function nameValidator(name) {
  const nameValidator = /^[a-zA-Z_]+( [a-zA-Z+_]+)*$/;
  const valdatedName = nameValidator.test(name);
  if (name.length > 5 && valdatedName) {
    return true;
  } else {
    return false;
  }
}
export { EmailValidator, nameValidator };
