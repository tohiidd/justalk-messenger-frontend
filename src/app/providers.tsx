"use client";
import {ReactNode} from "react";
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";

import {ColorModeContextProvider} from "context/ColorModeContext";
import {AuthContextProvider} from "context/AuthContext";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

interface Props {
  children: ReactNode;
}
export default function Providers({children}: Props) {
  return (
    <ApolloProvider client={client}>
      <ColorModeContextProvider>
        <AuthContextProvider>{children}</AuthContextProvider>
      </ColorModeContextProvider>
    </ApolloProvider>
  );
}
