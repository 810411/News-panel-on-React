import PropTypes from "prop-types";
import React, { Component } from "react";

class Article extends Component {
  state = {
    visible: false
  };

  handleReadMoreClck = event => {
    event.preventDefault();
    this.setState ({
      visible: true
    })
  };

  render() {
    const { id, author, text, bigText } = this.props.data;
    const { visible } = this.state;

    return (
      <div className="cart" key={id}>
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
        {
          !visible && <a onClick={this.handleReadMoreClck} href="#readmore" className='news__readmore'>Подробнее</a>
        }
        {
          visible && <p className='news__big-text'>{bigText}</p>
        }
      </div>
    )}
}

Article.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bigText: PropTypes.string.isRequired
  })
};

export default Article
