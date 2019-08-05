import styled from 'styled-components';

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  background: linear-gradient(
    107deg,
    rgba(37, 140, 159, 1) 0%,
    rgba(20, 100, 80, 1) 100%
  );
  align-items: center;
  justify-content: center;

  * {
    width: 84vw;
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
  }
  #name {
    font-size: 5rem;
  }
`;

export default MainStyle;