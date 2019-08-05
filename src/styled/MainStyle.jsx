import styled from 'styled-components';

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  background: linear-gradient(
    107deg,
    rgba(37, 96, 159, 1) 0%,
    rgba(20, 37, 54, 1) 100%
  );
  align-items: center;
  justify-content: center;
  img {
    height: 5rem;
    margin-right: 1rem;
  }
  p {
    margin-right: 1em;
  }
  .title {
    margin-top: 5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .subtitle {
    font-size: 1.3rem;
    margin: 2rem;
    /* margin-bottom: 10rem; */
  }
  #name {
    font-size: 5rem;
  }
`;

export default MainStyle;