import styled from 'styled-components';
import {FiLinkedin,FiGithub} from 'react-icons/fi';

export const Title = styled.h1`
    text-transform: uppercase;
    margin-bottom: 20px;
    font-size: 36px;
    color: #000;
`;

export const Text = styled.p`
    text-transform: uppercase;
    font-size: 18px;
    margin-bottom: 20px;
    color: #000;
`;


export const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LinkedIn = styled(FiLinkedin)`
    width: 40px;
    height: 40px;
    color:  #08D7D8;
`;

export const GitHub = styled(FiGithub)`
    width: 40px;
    height: 40px;
    color:  #08D7D8;
`;