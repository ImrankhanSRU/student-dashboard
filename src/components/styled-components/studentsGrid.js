import styled from 'styled-components'

export const Grid = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

  
  // margin-top: 100px;
  @media (min-width: 550px) and (max-width : 1120px) {
    grid-template-columns: repeat(2,1fr);
    margin-top: 100px;

  }

  @media(max-width : 550px) {
    grid-template-columns: repeat(1,1fr);
    margin:0;
    margin-top: 100px;  
    padding: 10%;
    justify-items: center;
  }

`

export const Student = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width : 200px;
  margin-bottom : 50px;
  padding: 10px 30px;
  cursor: pointer;
  text-decoration: none;
  color : black;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  @media(max-width : 1050px) {
  }

  @media(max-width : 700px) {
    // margin-bottom: 100px;
    
  }
`

export const Loader = styled.div`
  border: 7px solid #f3f3f3;
  border-radius: 50%;
  border-top: 7px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin-left: auto;
  margin-right: auto;  
  margin-top : 20em;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media(max-width : 700px) {
  margin-left: auto;
  margin-right: auto;
  width: 50px;
  height: 50px;
  margin-top: 15em;
}
`

export const Label = styled.label `
  width: 2px !important;
`