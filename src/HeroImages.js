import react from "react";

const heroImage = () => {
  const 
  return (
    return this.state.images.map((item, index) => {
      return (
        <span key={index}>
          {item.images.map((image, index) => {
            const { href, alt, width, rel, meta, size, height } = image;
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
          })}
        </span>
      );
    });
  )
};
