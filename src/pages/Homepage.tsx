import React from "react";
import ButtonMeal from "../Components/Button/Button";
import { Footer } from "./Homepage/Footer";
import { Hungry } from "./Homepage/Hungry";
import { Container } from "./Homepage/HomePage.styles";
import { getDataFromUrl } from "../api/api";

export const Homepage = () => {
  const onClickButtonMeal = () => {
    alert("OI");
    getDataFromUrl("https://www.themealdb.com/api/json/v1/1/random.php").then(
      (value) => {
        console.log(value);
      }
    );
  };

  return (
    <Container>
      <Hungry />
      <ButtonMeal onClick={onClickButtonMeal} />
      <Footer />
    </Container>
  );
};
