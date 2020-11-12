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
      const { href, alt, width, rel, meta, size, height } = hero;
      return (
        <img
          onClick={() => heroImages(hero.images)}
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
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Start editing to see some magic happen!</h2>
        {/* <div>
          {this.state.names.map((name, index) => {
            return <span key={index}>names:{name.name}</span>;
          })}
        </div> */}
        <div>
          {this.state.names.map((name, index) => {
            return <span key={index}>names:{name.name}</span>;
          })}
          {this.state.images.map((item, index) => {
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
          })}
        </div>
        <div onClick={this.heroImage}>
          {this.state.heros.map((hero, index) => {
            return (
              <span>
                {/* const { href, alt, width, rel, meta, size, height } = hero; */}
                <img
                  src={hero.href}
                  alt={hero.alt}
                  width={hero.width}
                  height={hero.height}
                  rel={hero.rel}
                  meta={hero.meta}
                  size={hero.size}
                />
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}
export default App;
