import { Component } from "react";
import PropTypes from "prop-types";
import { ImgGalleryItem } from "../ImgGalleryItem/ImgGalleryItem";
import css from "./ImgGallery.module.css";

export class ImgGallery extends Component {
  render() {
    const { images, onSelectedImg } = this.props;

    return (
      <ul className={css.imgGallery}>
        {images.map((img) => {
          return (
            <ImgGalleryItem
              key={img.id}
              largeImageURL={img.largeImageURL}
              webformatURL={img.webformatURL}
              onSelectImg={onSelectedImg}
            />
          );
        })}
      </ul>
    );
  }
}

ImgGallery.propTypes = {
  images: PropTypes.array,
  onSelectedImg: PropTypes.func.isRequired,
};
