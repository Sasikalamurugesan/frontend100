import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import { Carousel } from "react-responsive-carousel"; // Import the Carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import Services from "../services/Services";
import ProductsList from "../components/UI/Lproductlist";
import Clock from "../components/UI/Clock";
import counterImg from "../assets/images/sp.jpg";
import Logheader from "../components/Header/Logheader";
const carouselImages = [
    {
      path: "https://mgspicesco.com/wp-content/uploads/2020/03/MGS-Homepage4-scaled.jpg",
      alt: "Image 1",
      text: <h1>Spice Up Your Meals</h1>,
    },
    {
      path: "https://media0.giphy.com/media/3o6ZsV4T02pRaGBQC4/giphy.gif",
      alt: "Image 2",
      text: <h1>Discover Our Spices Collection</h1>,
      
    },
    {
      path: "https://img.freepik.com/free-photo/gourmet-chocolate-dessert-wooden-table-decorated-with-spices-generated-by-ai_188544-9011.jpg?size=626&ext=jpg&ga=GA1.2.455358885.1692768358&semt=ais",
      alt: "Image 3",
      text: <h1>Authentic Flavors from Around the World</h1>,
     
    },
  ];
  const Lhome = () => {
    const [trendingProducts,setTrendingProducts]=useState([]);
    const [bestSalesProducts,setBestSalesProducts]=useState([]);
    
   const Year= new Date().getFullYear();
   useEffect(()=>{
       const filteredTrendingProducts = products.filter((item) => item.category === "Ground Spices" );
       const filteredBestSalesProducts = products.filter((item) => item.category === "Whole Spices" );
       setTrendingProducts(filteredTrendingProducts);
       setBestSalesProducts(filteredBestSalesProducts);
   },[]);
   
  
    return (
      
      <div><Logheader/>

      <Helmet title={"Home"}>
        <div className="caro">
        <Carousel showThumbs={false}>
          {carouselImages.map((image, index) => (
             <div key={index}>
             <img src={image.path} alt={image.alt} />
             <div className="carousel-text">{image.text}</div>
           </div>
          ))}
        </Carousel>
        </div>
        <section className="hero_section">
          <Container>
            {
                <Row>
                <Col lg='6' md='6'>
                <div className="hero_content">
                    <p className="hero_subtitle">Trending Products in {Year}</p>
                   <h2>Make Your Food More Spicy </h2> 
                   <p>India's Most Trusted and Largest Brand of Spices </p>
                   <motion.button whileTap={{scale:1.2}} className="buy_btn"><Link to="/shop">SHOP NOW</Link></motion.button>
                </div>
                </Col >
                <Col lg='6' md='6'>
                    <div className="hero_img">
                       <img src="https://img.freepik.com/free-photo/multi-colored-gourmet-dessert-wood-background-with-spice-generative-ai_188544-12812.jpg?w=1060&t=st=1694354953~exp=1694355553~hmac=e8799f4412073da878a98114b13bc197666ac7a94985d25cdeeaa2a5841b48ce" alt=" "/>
                    </div>
                </Col>
            </Row>
            }
          </Container>
        </section>
        <Services/>
        
        
        <section className="trending_products">
          <Container>
            <Row>
                <Col lg='12' className="text-center">
                    <h2 className="section_title">Trending Products</h2><br/><br/>
                </Col>
                <ProductsList data={trendingProducts}/>
            </Row>
            </Container>  
        </section>
        <section className="best_sales">
            <Container>
            <Row>
                <Col lg='12' className="text-center">
                    <h2 className="section_title">Best Sales</h2><br/><br/>
                </Col>
                <ProductsList data={bestSalesProducts}/>
               
            </Row>
            </Container>
        </section>
        <section className="timer_count">
          <Container>
            <Row>
                <Col lg="6" md="12" className="count_down-col">
                    <div className="clock_top-content">
                       <h4 className="text-white fs-6 mb-2">Limited Offers</h4> 
                       <h3 className="text-white fs-5 mb-3">Organic Spices</h3>
                    </div>
                    <Clock/>
                    <motion.button whileTap={{scale:1.2}}className=" buy_btn store_btn">
                        <Link to="/shop">Visit Store</Link></motion.button>
                </Col>

                <Col lg="6" md="12" className="text-end counter_img">
                <img  src="https://media.giphy.com/media/pNhCXw2vX0A6vt9tDJ/giphy.gif" alt="" style={{ transform: 'translateY(-150px)', width: '20px',height:'auto' }}  />
                </Col>
            </Row>
            </Container>  
        </section>
        <section className="timer_count">

        </section><br/>

      </Helmet>
      </div>
    );
  };
  export default Lhome;    