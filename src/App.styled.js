import styled from 'styled-components';
import colors from './constants/colors';

export const AppStyled = styled.div`
  width: 100%;
`;

export const WelcomeStyled = styled.div`
  width: 95%;
  max-width: 960px;

  margin: 40px auto 0 auto;
  padding: 40px;

  background: ${colors.base};

  box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.05);

  @media (min-width: 480px) {
    margin: 60px auto 0 auto;
    padding: 60px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0 0 20px 0;

  color: ${colors.primary};

  font-size: 22px;
  font-weight: 300;
`;

export const Paragraph = styled.p`
  margin-bottom: 20px;

  line-height: 1.3;
`;

export const List = styled.ul`
  list-style-position: inside;

  margin-bottom: 20px;

  line-height: 1.3;
`;

export const Item = styled.li`
  margin-bottom: 10px;
`;

export const Link = styled.a`
  color: inherit;
  
  font-weight: 700;
  text-decoration: none;

  transition: 0.2s all ease-in-out;

  &:hover {
    color: ${colors.primary};
  }
`;

export const Logo = styled.img`
  height: 32px;
`;
