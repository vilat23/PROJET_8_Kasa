import bannerImg from "/src/assets/images/bannerImg.jpg";

const Hero = () => {
    return (
      <div className="hero">
        <img src= {bannerImg} alt="banner kasa" className="banner-img" />
      </div>
    );
  };
  
  export default Hero;