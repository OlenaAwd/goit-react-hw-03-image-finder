import { Component } from "react";
import PropTypes from "prop-types";
import css from "./ImgGalleryItem.module.css";

export class ImgGalleryItem extends Component {
  render() {
    const { img, onSelectImg, largeImage } = this.props;

    return (
      <li
        className={css.ImgGalleryItem}
        onClick={() => onSelectImg(largeImage)}
      >
        <img src={img} alt="" className={css["ImgGalleryItemImage"]} />
      </li>
    );
  }
}

ImgGalleryItem.propTypes = {
  largeImage: PropTypes.string,
  img: PropTypes.string,
  onSelectImg: PropTypes.func,
};
