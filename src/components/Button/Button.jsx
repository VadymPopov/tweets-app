import { useSelector } from "react-redux";
import { ButtonStyled } from "./Button.styled";
import { selectFilter } from "redux/selectors";

const Button = ({
    type = "button",
    children,
    disabled,
    ...otherProps
  }) => {
    const filter = useSelector(selectFilter);
    
    return (
      <ButtonStyled type={type} disabled={disabled}
        {...otherProps} style={{backgroundColor: otherProps.isFollowed ? "#5CD3A8" : "#EBD8FF", display: disabled || filter ? 'none': 'block'}}
      >
        {children}
      </ButtonStyled>
    );
  };
  export default Button;