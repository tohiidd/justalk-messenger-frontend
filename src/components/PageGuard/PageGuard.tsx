import {cookies, headers} from "next/headers";
import {redirect} from "next/navigation";
import {ReactNode} from "react";

interface Props {
  children: ReactNode;
}

export default function PageGuard({children}: Props) {
  const nextCookies = cookies();
  const refreshToken = nextCookies.get("refresh_token");

  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";

  if ((pathname.startsWith("/login") || pathname.startsWith("/sign-up")) && refreshToken) {
    redirect("/");
  }

  if (pathname.endsWith("/") && !refreshToken) {
    // redirect("/login");
  }

  return <>{children}</>;
}
