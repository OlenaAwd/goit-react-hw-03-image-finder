import { Component } from "react";
import PropTypes from "prop-types";
import css from "./Notification.module.css";

export class Notification extends Component {
  render() {
    const { error } = this.props;

    return (
      <div className={css.wrap}>
        <h1 className={css.title}>
          {error ? error : "Please, enter the correct name for your search"}
        </h1>
      </div>
    );
  }
}

Notification.propTypes = {
  error: PropTypes.string,
};
