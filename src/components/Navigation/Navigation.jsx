import { Link } from './Navigation.styled';

const Navigation = () => {

  return (
    <nav>
      <Link to="/">
        Home
      </Link>
      <Link to="/tweets">
          Tweets
      </Link>
    </nav>
  );
};

export default Navigation;