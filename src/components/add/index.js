import PropTypes from "prop-types";
import React, { Component } from "react";

class Add extends Component {
  state = {
    name: '',
    text: '',
    bigText: '',
    agree: false
  };

  validate = () => {
    const { name, text, agree } = this.state;

    return name.trim() && text.trim() && agree;
  };

  handleChange = event => {
    const { id, value } = event.currentTarget;

    this.setState({ [id]: value })
  };

  handleCheckboxChange = event => {
    this.setState({ agree: event.currentTarget.checked })
  };

  onBtnClickHandler = event => {
    const { name, text, bigText } = this.state;

    event.preventDefault();
    this.props.onAddNews({ id: Date.now(), author: name, text, bigText });
  };

  render() {
    const { name, text, bigText } = this.state;

    return (
      <form className="cart add">
        <input
          id="name"
          type="text"
          className="add__author"
          placeholder="Ваше имя"
          onChange={this.handleChange}
          value={name}
        />
        <textarea
          id="text"
          className="add__text"
          placeholder="Текст новости"
          onChange={this.handleChange}
          value={text}
        ></textarea>
        <textarea
          id="bigText"
          className="add__text"
          placeholder="Подробности"
          onChange={this.handleChange}
          value={bigText}
        ></textarea>
        <label className="add__checkrule">
          <input
            type="checkbox"
            onChange={this.handleCheckboxChange}
          /> Я согласен с правилами
        </label>
        <button
          className="add__btn"
          onClick={this.onBtnClickHandler}
          disabled={!this.validate()}>
          Добавить новость
        </button>
      </form>
    )
  }
}

Add.propTypes = {
  onAddNews: PropTypes.func.isRequired,
};

export default Add
