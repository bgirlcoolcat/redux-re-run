import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
  render() {
    if(!this.props.user) {
      return (
        <p>Select a user from above list...</p>
      );
    }
    return (
      <div>
        <img src={this.props.user.thumbnail} />
        <h3>{this.props.user.first} {this.props.user.first}</h3>
        <p>Age: {this.props.user.age}</p>
        <p>Description: {this.props.user.description}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserDetail);