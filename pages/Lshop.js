import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductsList from "../components/UI/Lproductlist";
import Logheader from "../components/Header/Logheader";
const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "Whole Spices") {
      const filteredProducts = products.filter(
        (item) => item.category === "Whole Spices"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "Powdered Spices") {
      const filteredProducts = products.filter(
        (item) => item.category === "Powdered Spices"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "Ground Spices") {
      const filteredProducts = products.filter(
        (item) => item.category === "Ground Spices"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "Masala Blends") {
      const filteredProducts = products.filter(
        (item) => item.category === "Masala Blends"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchItem = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchItem.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
   
    <div><Logheader/>
    <Helmet title="Shop">
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter_widget">
                <select onChange={handleFilter}>
                  <option>Filter By category</option>
                  <option value="Whole Spices">Whole Spices</option>
                  <option value="Powdered Spices">Powdered Spices</option>
                  <option value="Masala Blends">Masala Blends</option>
                  <option value="Ground Spices">Ground Spices</option>
                </select>
              </div>
            </Col>

            <Col lg="6" md="12">
              <div className="search_box">
                <input
                  type="text"
                  placeholder="Search......"
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-eye-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No Products are found</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
    </div>
  );
};
export default Shop;
