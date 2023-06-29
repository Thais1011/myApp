import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
  backgroundColor: "Black",
  gap: "200px",
});

export const HungryTitle = styled("h1", {
  fontSize: "30px",
  alignItems: "center",
  color: "#c9a538",
});

export const ClickButton = styled("button", {
  background: "#c9a538",
  margin: "30px",
  padding: "10px 20px",
});

export const MadeBy = styled("h1", {
  fontSize: "20px",
  color: "#c9a538",
  display: "flex",
  justifyContent: "flex-start",
  width: "100%",
  fontFamily: "Constantia",
});
