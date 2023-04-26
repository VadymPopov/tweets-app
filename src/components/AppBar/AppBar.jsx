import  Navigation  from '../Navigation';
import { Header } from './AppBar.styled';
import { NavLink } from 'react-router-dom';
import { Icon } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <NavLink to="/">
        <Icon/>
      </NavLink>
      <Navigation />
    </Header>
  );
};

export default AppBar;