import { ButtonStyled } from "./Button.styled";

const Button = ({
    type = "button",
    children,
    disabled,
    ...otherProps
  }) => {
    return (
      <ButtonStyled type={type} disabled={disabled}
        {...otherProps} style={{backgroundColor: otherProps.isFollowed ? "#5CD3A8" : "#EBD8FF"}}
      >
        {children}
      </ButtonStyled>
    );
  };
  export default Button;