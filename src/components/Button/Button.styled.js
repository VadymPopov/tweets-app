import styled from 'styled-components';
 
export const ButtonStyled = styled.button`
  width: 196px;
  padding: 14px 28px;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  border-radius: 6px;
  border: none;
  color: #373737;
  background-color: #EBD8FF;
  cursor: pointer;
  text-transform: uppercase;
  margin: 0px auto;
  transition: background-color 0.5s ease-in-out 0.5s;

  :hover {
    background-color: #EBD8FF;
    box-shadow:#373737 0px 0px 5px 2px;
  }
`;


export const ButtonFollowing = styled.button`
  background-color: #5CD3A8;
`;
