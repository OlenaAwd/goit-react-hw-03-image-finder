import { Component } from "react";
import PropTypes from "prop-types";
import css from "./ImgGalleryItem.module.css";

export class ImgGalleryItem extends Component {
  render() {
    const { webformatURL, onSelectImg, largeImageURL } = this.props;

    return (
      <li
        className={css.imgGalleryItem}
        onClick={() => onSelectImg(largeImageURL)}
      >
        <img
          src={webformatURL}
          alt=""
          className={css["imgGalleryItem-image"]}
        />
      </li>
    );
  }
}

ImgGalleryItem.propTypes = {
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
  onSelectImg: PropTypes.func,
};
