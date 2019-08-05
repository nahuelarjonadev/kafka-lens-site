import styled from 'styled-components';

const TwoSided = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  text-align: center;

  * {
    margin: 20px 10%;
    width: 80%;
  }

  img {
    height: auto;
    order: 1;
    box-shadow: 0px 20px 40px rgba(0,0,0,0.4);
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    img {
      width: 50%;
      margin: 20px 60px;
      order: 0;
    }

    * {
      margin: 20px 0;
      &:first-child {
        text-align: right;
      }
      &:last-child {
        text-align: left;
      }
    }
  }
`;

export default TwoSided;