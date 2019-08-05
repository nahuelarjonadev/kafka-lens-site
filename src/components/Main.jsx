import React from 'react';
import MainStyle from '../styled/MainStyle';
import TwoSided from '../styled/TwoSided';
import LoremIpsum from './LoremIpsum';

function Main() {
  return (
    <MainStyle>
      <TwoSided>
        <p>Connect to your cluster with any broker URI</p>
        <img src="https://www.spearmintjs.com/static/appDemo-d08af9a9fbf6e5c58a520ce89a7d99ae.gif" alt=""/>
      </TwoSided>
      <TwoSided>
        <img src="https://www.spearmintjs.com/static/appDemo-d08af9a9fbf6e5c58a520ce89a7d99ae.gif" alt=""/>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi</p>
      </TwoSided>
    </MainStyle>
  )
}

export default Main;