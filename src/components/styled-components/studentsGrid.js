import styled from 'styled-components'

export const Grid = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin : 20px 20px 0px 200px;

  @media(max-width : 1050px) {
    grid-template-columns: repeat(2,1fr)
  }

  @media(max-width : 700px) {
    grid-template-columns: repeat(1,1fr)
  }

`

export const Student = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width : 200px;
  border  :5px solid gainsboro;
  margin-bottom : 20px;
  padding-left : 10px;
  cursor: pointer;
  text-decoration: none;
  color : black;
`

export const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin-left : 45%;
  margin-top : 15%;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

export const Label = styled.label `
`