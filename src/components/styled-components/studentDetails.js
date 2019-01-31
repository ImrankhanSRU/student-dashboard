import styled from 'styled-components'

export const Details = styled.div `
    background: #529ba5;
    color: white;

    @media(max-width: 550px) {
        // width: 180px;
    }
`

export const DetailsRow = styled.div `
    padding: 15px;
    display: flex;
    border-bottom: 1px solid gainsboro;

    @media(max-width: 550px) {
        padding: 7px;
    }
`

export const Label = styled.div `
    width: 120px;
    @media(max-width: 550px) {
        // width: 200px;
        font-size: 14px;
    }
`

export const Text = styled(Label) `
    width: 0px;

    @media(max-width: 550px) {
        width: 100px;
    }
`

export const PageNotFound = styled.div `
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.div `
    display: flex;
    width: 200px;
    flex-direction: column;
    align-items: center;
    padding: 10rem;
    margin: 100px auto 0 auto;
    border: 1px solid lightgray;
    border-radius: 10px;
    box-shadow: 5px 5px lightgray;

    @media (min-width: 550px) and (max-width : 1120px) {
        margin: 200px 250px;
    }

    @media (max-width: 550px) {
        padding: 3em;
        margin: 170px auto 0 auto;
    }
`

export const Blur = styled.div `
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
`