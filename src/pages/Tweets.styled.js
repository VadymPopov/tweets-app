import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: flex;
  width: 120px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 16px;
  font-weight: 700;
  color: #000;
  background-color: #08D7D8;
  border-radius: 8px;
  margin-bottom: 20px;
`;