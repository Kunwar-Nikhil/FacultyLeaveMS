export const isValidEmail = (email:String): boolean=>{
    const emailRegx = 
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegx.test(email);
};

export const isValidPhone = (
  phone: string,
): boolean => {
  return /^[6-9]\d{9}$/.test(phone);
};

export const isValidAge = (
  age: string,
): boolean => {
  const value = Number(age);

  return value >= 18 && value <= 100;
};

export const isValidPassword = (
  password: string,
): boolean => {
  return password.length >= 6;
};