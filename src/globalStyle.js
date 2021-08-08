import styled, { createGlobalStyle } from 'styled-components/macro';


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }
  button{
    cursor: pointer;
  }
  a{
    cursor: pointer;
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`;

export const Button = styled.button`
border-radius: 4px;
  background: ${({primary}) => primary ? '#4b59f7' : '#0467fb'};
  white-space: nowrap;
  padding: ${({big}) => big ? '12px 64px' : '10px 20px'};
  color: #fff;
  font-size: ${({fontBig}) => fontBig ? '20px' : '16px'};
  outline: none;
  border: none;
  
  &:hover {
    transition: all 0.3s ease-out;
    background: ${({primary}) => primary ? '#0467fb' : '#4b59f7'};
  }
  
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`