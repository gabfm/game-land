import styled from "styled-components";

export const StyledCardProducts = styled.li`
  flex-basis: 20%;
  margin: .625rem auto; 
  padding: .625rem;
  border: .025rem solid #ccc;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(61,46,116,1) 100%);

  img {
    width: 22.5rem;
    height: auto;
    border-radius: .3125rem;
  }

  h2 {
    margin-top: .625rem;
    text-align: center; /
  }

  span {
    padding: 2rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 600;
    padding: 0 2rem;
    margin: 0;
  }

  .footer_container {
    display: flex;
    justify-content: center;
    align-items: baseline;
    padding-top: 1rem;
  }
`;
