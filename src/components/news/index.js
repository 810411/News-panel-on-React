import PropTypes from "prop-types";
import React, { Component } from "react";

import Article from "../article";

class News extends Component {

  state = {
    counter: 0
  };

  renderNews = () => {
    const { data } = this.props;
    let newsTemplate;

    if (data.length) {
      newsTemplate = data.map(function (item) {
        return <Article key={item.id} data={item} />
      })
    } else {
      newsTemplate = <p> Новостей нет </p>
    }

    return newsTemplate;
  };

  incCounter = event => {
    event.preventDefault();

    this.setState( ({ counter }) => {
      return {
        counter: ++counter
      }
    })
  };

  render() {
    const { data } = this.props;

    return (
      <div className="news">
        {this.renderNews()}
        {data.length && <strong>Всего новостей: {data.length}</strong>}
      </div>
    )
  }
}

News.propTypes = {
  data: PropTypes.array.isRequired
};

export default News
