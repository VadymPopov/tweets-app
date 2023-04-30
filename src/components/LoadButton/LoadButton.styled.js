import styled from 'styled-components';
 
export const Button = styled.button`
  width: 170px;
  padding: 14px 28px;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  border-radius: 10px;
  border: none;
  color: #373737;
  background-color: #EBD8FF;
  cursor: pointer;
  text-transform: uppercase;
  margin: 0px auto;
  transition: all 0.2s ease 0.2s;

  :hover, :focus {
    background-color: #08D7D8;
    box-shadow:#373737 0px 0px 5px 2px;
    color: #fff;
  }
`;
