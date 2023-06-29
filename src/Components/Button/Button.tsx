import { ClickButton } from "../../pages/Homepage/HomePage.styles";
import { GiHamburger } from "react-icons/gi";

type ButtonMealProps = {
  onClick: () => void;
};

const ButtonMeal = ({ onClick }: ButtonMealProps) => {
  return (
    <ClickButton onClick={onClick}>
      <GiHamburger /> Generate Meal <GiHamburger />
    </ClickButton>
  );
};

export default ButtonMeal;
