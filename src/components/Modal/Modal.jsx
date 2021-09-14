import { Component } from "react";
import { createPortal } from "react-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import PropTypes from "prop-types";
import css from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.closeByEscape);
    disableBodyScroll(modalRoot);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeByEscape);
    enableBodyScroll(modalRoot);
  }

  closeByEscape = (e) => {
    if (e.code === "Escape") {
      this.props.onCloseModal();
    }
  };

  clickByModal = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    return createPortal(
      <div className={css.Overlay} onClick={this.props.onCloseModal}>
        <div className={css.Modal}>
          <img src={this.props.largeImg} alt={this.props.id} />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  id: PropTypes.string,
};
