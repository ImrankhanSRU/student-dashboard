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

export const Text = styled(Label)`
    width: 0px;

    @media(max-width: 550px) {
        width: 100px;
    }
`