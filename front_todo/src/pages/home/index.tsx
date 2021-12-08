import React from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function Home(): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Header />
      <Footer />
    </div>
  );
}
