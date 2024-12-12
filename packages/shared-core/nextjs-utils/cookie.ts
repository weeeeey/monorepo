import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";

interface CookieOptions {
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: "lax" | "strict" | "none";
  path?: string;
  maxAge?: number;
}

class CookieManager {
  private cookieStore: ReadonlyRequestCookies;
  private cookieKey: string;

  constructor(cookieKey: string) {
    this.cookieStore = cookies();
    this.cookieKey = cookieKey;
  }

  set(value: string, option: CookieOptions) {
    this.cookieStore.set(this.cookieKey, value, option);
  }
  setWithSecureOption(value: string, expireSecond: number) {
    const option: CookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: expireSecond,
    };
    this.set(value, option);
  }

  get() {
    return this.cookieStore.get(this.cookieKey)?.value;
  }

  delete() {
    this.cookieStore.delete(this.cookieKey);
  }
}

export default CookieManager;
