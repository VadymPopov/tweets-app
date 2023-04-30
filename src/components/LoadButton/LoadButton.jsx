import { useSelector } from "react-redux";
import { Button } from "./LoadButton.styled";
import { selectFilter } from "redux/selectors";

const LoadButton = ({
    type = "button",
    children,
    disabled,
    ...otherProps
  }) => {
    const filter = useSelector(selectFilter);
    
    return (
      <Button type={type} 
        {...otherProps} style={{ display: disabled || filter ? 'none': 'block'}}
      >
        {children}
      </Button>
    );
  };
  export default LoadButton;