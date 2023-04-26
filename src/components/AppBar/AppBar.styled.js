import styled from 'styled-components';
import {AiFillTwitterCircle} from 'react-icons/ai';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #08D7D8;
  padding: 8px 5px;
  box-shadow: rgba(44, 50, 70, 0.4) 0px 10px 10px -3px;
`;

export const Icon = styled(AiFillTwitterCircle)`
  color: #08D7D8;
  width: 50px;
  height: 50px;

`;