import { jwtVerify } from "jose";
import { SignJWT } from 'jose';

const getJwtSecretKey = (): Uint8Array  => {
  const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;
  if (!secret) {
    throw new Error("JWT Secret key is not matched");
  }
  return new TextEncoder().encode(secret);
}

export const verifyJwtToken = async (token: string): Promise<any | null> =>  {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());
    return payload;
  } catch (error) {
    return null;
  }
}
export const generateToken = async (username: string ): Promise<string> => {
  return await new SignJWT({
      username:username,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(getJwtSecretKey());
};

