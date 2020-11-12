import React from "react";
import "./styles.css";
import westlemServices from "./westlemServices";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      names: [],
      images: [],
      heros: []
    };
  }
  componentDidMount() {
    westlemServices
      .get("/services/catalog/v4/category/shop/new/all-new/index.json")
      .then((response) => {
        console.log(response);
        this.setState({
          names: response.data.groups,
          images: response.data.groups,
          heros: response.data.groups
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  images = () => {
    return this.state.images.map((item, index) => {
      return (
        <span key={index}>
          {item.images.map((image, index) => {
            const { href, alt, width, rel, meta, size, height } = image;
            return (
              <img
                key={index}
                src={href}
                alt={alt}
                width={width}
                height={height}
                rel={rel}
                meta={meta}
                size={size}
              />
            );
          })}
        </span>
      );
    });
  };
  heroImage = () => {
    return this.state.heros.map((hero, index) => {
      const { href, alt, width, rel, meta, size, height, images } = hero;
      return (
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                onClick={(heroImages) => heroImages(images)}
                key={index}
                src={href}
                alt={alt}
                width={width}
                height={height}
                rel={rel}
                meta={meta}
                size={size}
              />
              <a
                class="carousel-control-prev"
                href="#carouselExampleFade"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleFade"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}
export default App;
