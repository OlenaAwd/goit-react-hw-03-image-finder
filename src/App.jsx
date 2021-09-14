import { Component } from "react";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { ImgGallery } from "./components/ImgGallery/ImgGallery";
import { searchImg } from "./components/API/fetchAPI";
import { Button } from "./components/Button/Button";
import { Spinner } from "./components/Loader/Loader";
import { Modal } from "./components/Modal/Modal";
import { Notification } from "./components/Notification/Notification";

class App extends Component {
  state = {
    page: 1,
    images: [],
    input: "",
    largeImg: null,
    status: "idle",
    error: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const { input, page } = this.state;
    const inputPrev = prevState.input;
    const pagePrev = prevState.page;
    const imagesPrev = prevState.images;

    const conditionFirstRequest = inputPrev !== input && page === 1;

    if (conditionFirstRequest) {
      searchImg(input, page)
        .then((res) => res.json())
        .then((res) => {
          if (res.total === 0) {
            return this.setState({ status: "rejected" });
          }
          this.setState({ images: res.hits, status: "resolved" });
        })
        .catch((error) => this.setState({ error, status: "rejected" }));
    }

    const conditionSecondRequest = pagePrev !== page && page !== 1;

    if (conditionSecondRequest) {
      searchImg(input, page)
        .then((res) => res.json())
        .then((res) =>
          this.setState(() => ({
            images: [...imagesPrev, ...res.hits],
            status: "resolved",
          }))
        )
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }

  resetPageNumber = () => {
    this.setState({ page: 1 });
  };

  updatePageNumber = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  onSearchValueInput = (value) => {
    this.setState({ input: value, status: "pending" });
    this.resetPageNumber();
  };

  onFoundLargeImg = (value) => {
    this.setState({ largeImg: value, status: "openModal" });
  };

  onResetLargeImg = () => {
    this.setState({ largeImg: null, status: "resolved" });
  };

  render() {
    const { status, images, largeImg, error } = this.state;

    if (status === "idle") {
      return <Searchbar onSubmitForm={this.onSearchValueInput} />;
    }

    if (status === "pending") {
      return (
        <div>
          <Searchbar onSubmitForm={this.onSearchValueInput} />
          <Spinner />
        </div>
      );
    }

    if (status === "resolved") {
      return (
        <div>
          <Searchbar onSubmitForm={this.onSearchValueInput} />
          <ImgGallery images={images} onSelectedImg={this.onFoundLargeImg} />
          <Button onClick={this.updatePageNumber} />
        </div>
      );
    }

    if (status === "openModal") {
      return (
        <div>
          <Searchbar onSubmitForm={this.onSearchValueInput} />
          <ImgGallery images={images} onSelectedImg={this.onFoundLargeImg} />
          <Modal largeImg={largeImg} onCloseModal={this.onResetLargeImg} />
        </div>
      );
    }

    if (status === "rejected") {
      return (
        <div>
          <Searchbar onSubmitForm={this.onSearchValueInput} />
          <Notification error={error} />
        </div>
      );
    }
  }
}
export default App;
