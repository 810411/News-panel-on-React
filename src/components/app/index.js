import React, { Component } from 'react';

import News from '../news'
import Add from '../add'

import './app.css';

class App extends Component {
  state = {
    news: null,
    isLoading: false
  };

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('http://localhost:3000/data/news-data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          news: data,
          isLoading: false
        });
      })
  }

  handleAddNews = (data) => {
    const nextNews = [data, ...this.state.news];

    this.setState({ news: nextNews })
  };

  render() {
    const { news, isLoading } = this.state;

    return (
      <React.Fragment>
        <Add onAddNews={this.handleAddNews} />
        <h3>Новости</h3>
        {isLoading && <p>Загружаю...</p>}
        {Array.isArray(news) && <News data={news} />}
      </React.Fragment>
    )
  }
}

export default App;
