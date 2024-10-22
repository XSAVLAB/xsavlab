export const nameValidate = (name:string) => {
    if (!name || name.trim().length === 0) {
        throw new Error("Name is required.");
      }
    
      const maxLength = 50;
      if (name.length > maxLength) {
        throw new Error(`Name must not exceed ${maxLength} characters.`);
      }

      const nameRegex = /^[A-Za-z\s]+$/;
      if (!nameRegex.test(name)) {
        throw new Error("Name can only contain letters and spaces.");
      }
    return name;
}
export const emailValidate = (email:string) => {
    if (!email || email.trim().length === 0) {
        throw new Error("Email is required.");
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        throw new Error("Invalid email format.");
      }
    return email;
}