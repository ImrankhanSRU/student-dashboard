import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  background: ${props => props.theme.primary ? props.theme.primary : 'white'};
  margin-right: 20px;
  color: ${props => props.theme.color ? props.theme.color : 'black'};
  height: 15px;
  padding: 1em;
  border: 1px solid ${props => props.theme.primary ? props.theme.primary : 'white'};
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: center;
  cursor: pointer;
  @media (max-width: 550px) {
    margin: 0;
    margin-top: 30px;
  }
`;

export const Signin = styled.div`
  text-decoration: none;
  padding: 0.7em;
  /* margin-right: 2em; */
  outline: none;
  border: 1px solid white;
  cursor: pointer;
  background: ${props => props.theme.secondary ? props.theme.secondary : props.theme.background};
  color: white;
  padding: 1em 12em;
  /* margin-left: 30px; */
  border-radius: 0.5rem;

  @media (max-width: 550px) {
    padding: 10px 110px;
  }
`;

export const Signout = styled.div`
  padding: .83em 2em;
  outline: none;
  background: ${props => props.theme.secondary ? props.theme.secondary : 'white'};
  color: white;
  border: 1px solid ${props => props.theme.secondary ? props.theme.secondary : 'white'};
  border-radius: 5px;
  /* margin-bottom: 10px; */
  font-size: 17px;
  cursor: pointer;

  @media (max-width: 550px) {
    text-align: center;
    margin: 0;
    margin-top: 30px;
    padding: 10px 25px;
  }
`;

export const Goback = styled.div`
  font-size: 16px;
  font-family: Helvetica;
  background: #29b8eb;
  border-radius: 100px;
  padding: 10px 10px;
  text-align: center;
  width: 100px;
  /* margin: auto; */
  cursor: pointer;
  color: white;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`