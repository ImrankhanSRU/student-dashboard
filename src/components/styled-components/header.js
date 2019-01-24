import styled from 'styled-components'


export const Head = styled.header `
  padding: 1em 2em;
  background: rgb(26, 158, 158);
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button `
  padding: .7em;
  margin-right: 2em;
  outline: none;
  border: 1px solid white;
  cursor: pointer;

  background: ${props => props.primary ? "rgb(26, 158, 158)" : "white"};
  color: ${props => props.primary ? "white" : "black"};
  padding: ${props => props.primary ? "1em 11em" : "black"};
  margin-left: ${props => props.primary ? "30px" : "0"};
  border-radius: ${props => props.primary ? ".5rem" : ".5rem"};


`
export const Input = styled.input `
  width: 300px;
  padding: 1em;
  border: none;
  outline: none;
  font-size: 15px;
  background: ${props => props.primary ? "hsla(0,0%,85%,.28)" : "white"};
  border: ${props => props.primary ? "1px solid white" : "white"};
`