import { Component } from "react";
import PropTypes from "prop-types";
import { ImgGalleryItem } from "../ImgGalleryItem/ImgGalleryItem";
import css from "./ImgGallery.module.css";

export class ImgGallery extends Component {
  render() {
    const { images, onSelectedImg } = this.props;

    return (
      <ul className={css.ImgGallery}>
        {images.map((img) => (
          <ImgGalleryItem
            key={img.id}
            img={img.webformatURL}
            largeImage={img.largeImageURL}
            onSelectImg={onSelectedImg}
          />
        ))}
      </ul>
    );
  }
}

ImgGallery.propTypes = {
  images: PropTypes.array,
  onSelectedImg: PropTypes.func.isRequired,
};
