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
    justify-content: flex-start;

    padding: 0;
    padding-top: 10px;
    padding-left: 20px;
    display: ${props => props.responsive ? "flex" : "none"};
    // position: ${props => props.responsive ? "absolute" : "fixed"};
    animation-duration: 2s;
    animation-name: slide;
    height: 100%;
    width : 75%;
    z-index: 2;

    @keyframes slide {
      0%   {left:-300px; top:0px;}
      25%  {left:0px; top:0px;}
     }

   
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

   @media(max-width: 550px) {
    margin-top: 50px;
   }

`
export const Input = styled.input `
  padding: 1em;
  border: none;
  outline: none;
  font-size: 15px;
  background: ${props => props.primary ? "hsla(0,0%,85%,.28)" : "none"};
  border: ${props => props.primary ? "1px solid white" : "none"};
  width: ${props => props.primary  ? "400px" : "300px"};
  border-radius:  ${props => props.primary ? "10px" : "0px"};


  @media(max-width : 550px) {
    -webkit-transition: all .5s;
	  -moz-transition: all .5s;
	  transition: all .5s;
    // padding: .5em;

    width: ${props => props.primary ? "220px" : "160px"};
    padding: ${props => props.primary ? "12px 20px" : "10px"};

   }

   @media (min-width: 550px) and (max-width : 1120px) {
    width: ${props => props.primary ? "400px" : "180px"};
  }
`

export const Search = styled.div `
  background: white;
  margin-right: 30px;
  /* height: 50px; */
  display: flex;
  align-items: center;
  /* padding: 8px; */
  margin-bottom: 10px;
  border-radius: 10px;
  width: 270px;
  padding-right: 10px;

  @media(max-width : 550px) {
    width: 0px;
    /* padding: 8px; */
    margin: 0;
    // margin-left: 10px
    padding: 0;

   }

   @media (min-width: 550px) and (max-width : 1120px) {
    width: 230px;
    margin-left: 10px;
  }
`

export const SearchInput = styled.input `
  display:block;
  margin: 0 0 0 auto;
  width: 20px;
  /* box-sizing: border-box; */
  border-radius: 50px;
  font-size: 15px;
  outline: none;
  border: none;
  background: white url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;
  background-position: 8px;

  background-repeat: no-repeat;
  padding: 7px;
  -webkit-transition: width .3s ease-in-out;
  transition: width .3s ease-in-out;
  margin-right: 20px;


  :focus {
    width: 200px;
    padding: 5px 10px 5px 15px;
    background-position: 200px 5px;
  }
`