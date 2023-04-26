import { Outlet } from 'react-router-dom';
import  AppBar  from '../AppBar';
import { Suspense } from 'react';
import { LayoutContainer, Section } from './Layout.styled';
import { GlobalStyle } from "../../GlobalStyles";

const Layout = () => {
    return (
        <LayoutContainer>
            <AppBar/>
            <main>
              <Section>
                <Suspense fallback={null}>
                  <Outlet />
                </Suspense>
              </Section>
            </main>
            <GlobalStyle/>
        </LayoutContainer>
     
    );
  };

  export default Layout;