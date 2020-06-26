export const capitalizeText = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const calculateAge = (birthDate) => {
  birthDate = new Date(birthDate);
  var ageDifMs = Date.now() - birthDate.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export const emailIsUsed = (users, email) => {
  let userIndex = users.findIndex((user) => user.email === email);
  return userIndex !== -1;
};
