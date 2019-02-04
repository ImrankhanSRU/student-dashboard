import styled from 'styled-components'

export const ButtonContainer = styled.div `
    display: flex;
    background: white;
    margin-right: 20px;
    height: 15px;
    padding: 1em;
    border: 1px solid white;
    border-radius: 10px;
    margin-bottom: 10px;
    text-align: center;
    cursor: pointer;
    @media(max-width: 550px) {
        margin-top: 30px;
    }
`