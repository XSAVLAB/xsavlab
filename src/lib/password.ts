import bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10; 
    const salt = await bcrypt.genSalt(saltRounds); 
    const hashedPassword = await bcrypt.hash(password, salt); 
    return hashedPassword;
  };

export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    const match = await bcrypt.compare(password, hashedPassword);
    return match; // Returns true if the passwords match, otherwise false
  };
  