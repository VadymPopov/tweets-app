import { Title, Text, Links, Link, LinkedIn, GitHub } from "./Home.styled";

export default function Home() {
    return (
        <>
        <Title>
        Tweets App.
        </Title>
        <Text>React application was developed by Vadym Popov. All the related information can be found at the links below. Enjoy!</Text>
        <Links>
          <Link href="https://www.linkedin.com/in/vadym-popov/"><LinkedIn/></Link>
          <Link href="https://github.com/VadymPopov"><GitHub/></Link>
        </Links>
       </>
    );
  }