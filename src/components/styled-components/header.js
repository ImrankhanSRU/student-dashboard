import styled from 'styled-components'


export const Head = styled.header `
  padding: 1em 2em;
  background: rgb(26, 158, 158);
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button `
  padding: .7em;
  background: white;
  margin-right: 2em;
  outline: none;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background: rgb(26, 158, 158);
    color: white;
  }
`
export const Input = styled.input `
  width: 300px;
  padding: 1em;
  border: none;
  outline: none;
`