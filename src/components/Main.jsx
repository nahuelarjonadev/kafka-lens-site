import React from 'react';
import MainStyle from '../styled/MainStyle';
import TwoSided from '../styled/TwoSided';
import LoremIpsum from './LoremIpsum';
import ConnectionPage from '../assets/connectionPage.gif';
import TopicPage from '../assets/topicPage.gif';
import BrokerView from '../assets/brokerView.gif';

function Main() {
  return (
    <MainStyle>
      <TwoSided>
        <p>Connect to your cluster with any broker URI</p>
        <img src={ConnectionPage} alt=""/>
      </TwoSided>
      <TwoSided>
        <img src={TopicPage} alt=""/>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi</p>
      </TwoSided>
      <TwoSided>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi</p>
        <img src={BrokerView} alt=""/>
      </TwoSided>
    </MainStyle>
  )
}

export default Main;