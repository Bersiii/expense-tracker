import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(token, secret);

    return {
      userId: Number(payload.userId),
      email: payload.email as string,
    };
  } catch {
    return null;
  }
}
