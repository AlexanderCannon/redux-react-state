//3rd party
import React, { Component } from 'react';
import { connect } from 'react-redux'
//Ours
//..
class BookDetaiil extends Component {
  render() {
    if (!this.props.book) {
      return (<div>Select a book to see more</div>);
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
        <div>Pages:{this.props.book.pages}</div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetaiil);