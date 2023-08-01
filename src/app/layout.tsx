import {ReactNode} from "react";

import Providers from "./providers";
import PageGuard from "components/PageGuard/PageGuard";

import "./styles.css";

interface Props {
  children: ReactNode;
}
export default function RootLayout({children}: Props) {
  return (
    <html lang="en">
      <body>
        <PageGuard>
          <Providers>{children}</Providers>
        </PageGuard>
      </body>
    </html>
  );
}
