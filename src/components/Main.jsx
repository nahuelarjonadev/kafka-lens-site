import React from 'react';
import MainStyle from '../styled/MainStyle';
import TwoSided from '../styled/TwoSided';
import ConnectionPage from '../assets/connectionPage.gif';
import TopicPage from '../assets/topicPage.gif';
import BrokerView from '../assets/brokerView.gif';

function Main() {
  return (
    <MainStyle>
      <TwoSided>
        <p>Connect to an existing Kafka cluster with any broker URI.</p>
        <img src={ConnectionPage} alt="Kafka Lens connection page"/>
      </TwoSided>
      <TwoSided>
        <img src={TopicPage} alt="Kafka Lens topic view"/>
        <p>
          Clicking on an individual topic expands the side menu to include that topic’s partitions. 
          A secondary panel renders all the messages flowing through the topic in real time, with supplementary insight into the latest message. 
          Selecting a specific partition further filters down the stream of messages. Additional partition metadata is displayed on a third panel.
        </p>
      </TwoSided>
      <TwoSided>
        <p>
          Broker tiles provide the user with real time metrics such as which topics the broker is storing, partition leadership, 
          message rates per second, and broker failure alerts.
          <br/>
          Clicking on a tile will open up a sidebar display of historical graph data of the selected broker message rates by topic.
        </p>
        <img src={BrokerView} alt="Kafka Lens broker view"/>
      </TwoSided>
    </MainStyle>
  )
}

export default Main;