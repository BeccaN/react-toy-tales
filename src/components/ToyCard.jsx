import React, { Component } from 'react';

class ToyCard extends Component {

  render() {
    return (
      <div className="card" dataset={this.props.stats.id}>
        <h2>{this.props.stats.name}</h2>
        <img src={this.props.stats.image} alt={this.props.stats.name} className="toy-avatar" />
        <p>{this.props.stats.likes} Likes </p>
        <button className="like-btn" onClick={() => {this.props.handleIncreaseLikes(this.props.stats.id)}}>Like {'<3'}</button>
        <button className="del-btn" onClick={() => {this.props.handleDonate(this.props.stats.id)} } >Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
