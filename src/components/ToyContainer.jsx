import React from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends React.Component {

  
  render() {

    const toyCards = (this.props.allToys) ? this.props.allToys.map(toy => <ToyCard stats={toy} handleIncreaseLikes={this.props.handleIncreaseLikes} handleDonate={this.props.handleDonate} />) : null

    return(
      <div id="toy-collection">
        {toyCards}
      </div>
    );
  }

}

export default ToyContainer;
