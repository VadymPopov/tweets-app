import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 16px;
  font-weight: 700;
  color: #08D7D8;
  
  
  &.active{
    color: #fff;
    background-color: #08D7D8;
    border-radius: 8px;
  }
`;