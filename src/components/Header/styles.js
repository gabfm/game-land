import styled from "styled-components";

export const StyledHeader = styled.header`
  top: 0;
  position:fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(0deg, rgba(21,59,60,1) 30%, rgba(0,0,0,1) 100%);
  padding: 0 .625rem; 

  h1 {
    margin-bottom: .625rem;
    font-size:2.25rem;
    color: #ffff;
    
  }

  form {
    display: flex;
    align-items: center;
    width:fit-content;

    input {
      height: 4rem;
      background-color: transparent;
      border-radius: 0.8rem;
      width: 100%;
      box-sizing: border-box; 
      padding: 0 .625rem; 
    }
    input:hover {
      height: 4rem;
      background-color: #ffff;
      border-radius: 0.8rem;
      width: 100%;
      box-sizing: border-box; 
      padding: 0 .625rem; 
    }
  }


`;

