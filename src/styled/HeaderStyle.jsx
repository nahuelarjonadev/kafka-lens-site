import styled from 'styled-components';

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 97vh;
  color: #d1d4d6;
  font-weight: 900;
  font-size: 1em;
  background: rgb(37, 96, 159);
  background: linear-gradient(
    107deg,
    rgba(7, 54, 66, 1) 0%,
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
    display: flex;
    @media (max-width: 767px) {
      flex-direction: column;
    }
    justify-content: center;
    align-items: center;
  }
  .subtitle {
    font-size: 1.1rem;
    @media (min-width: 767px) {
      font-size: 1.3rem;
    }
    font-weight: 200;
    margin: 2rem;
  }
  #name {
    font-size: 3rem;
    @media (min-width: 767px) {
      font-size: 5rem;
      @media (min-width: 1024px) {
        font-size: 8rem;
      }
    }
    
  }
`;

export default HeaderStyle;
