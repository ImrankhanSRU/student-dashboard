import styled from 'styled-components'


export const Head = styled.header `
  padding: 1em 3em .5em;
  background: #529ba5;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  width: 95%;

  @media (max-width : 550px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    padding-top: 10px;
    padding-left: 20px;
  }
  
  @media (min-width: 550px) and (max-width : 1120px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    justify-items: center;
  }

`

export const Button = styled.div `
  // padding: 1em;
  outline: none;
  // border: 1px solid white;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 15px;

  background: ${props => props.primary ? "rgb(26, 158, 158)" : "none"};
  color: ${props => props.primary ? "white" : "black"};
  padding: ${props => props.primary ? "1em 11em" : "black"};
  margin-left: ${props => props.primary ? "30px" : "0"};
  border-radius: ${props => props.primary ? ".5rem" : ".5rem"};

  @media(max-width : 767px) {
    margin-right:0;
    // width: 220px;
   }


`
export const Input = styled.input `
  padding: 1em;
  border: none;
  outline: none;
  font-size: 15px;
  background: ${props => props.primary ? "hsla(0,0%,85%,.28)" : "none"};
  border: ${props => props.primary ? "1px solid white" : "white"};
  width: ${props => props.primary ? "400px" : "300px"};

  @media(max-width : 700px) {
    padding: .5em;
    width: 230px;
   }
`