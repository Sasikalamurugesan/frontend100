import React, { useState } from "react";
import {Contianer,Row,Col,Form,FormGroup, Container}from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header/Header";

const Checkout=()=>{

    const totalQty=useSelector((state)=>state.cart.totalQuantity);
    const totalAmount=useSelector((state)=>state.cart.totalAmount);
    const navigate = useNavigate();
 const [formData, setFormData] = useState({
  name: '',
  em: '',
  ph: '',
  street: '',
  city: '',
  pin: '',
  country: '',

  
});
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
const handleFormSubmit = async (e) => {
  e.preventDefault();
  console.log(formData);
  try {
    const response = await fetch('https://sasi-be.onrender.com/submit-billing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 201) {
      alert("Billing Successfull!")
      navigate('/Lshop');
    } else {
      alert("Error")    }
  } catch (error) {
    console.error(error);
  }
};
    return (
      <div>
        <Header/>
     
        <Helmet title="Checkout">
        <CommonSection title="Checkout"/>
        <section>
            <Container>
                <Row>
                    <Col lg="8">
                        <h6 className="mb-4 fw-bold">Billing Information</h6>
                        <Form className="billing_form">
  <FormGroup className="form_group">
    <input
      type="text"
      name="name"
      placeholder="Enter your name"
      value={formData.name}
      onChange={handleChange}
      required
    />
  </FormGroup>
  <FormGroup className="form_group">
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </FormGroup>
  <FormGroup className="form_group">
    <input
      type="tel"  
      name="phoneNumber"
      placeholder="Phone number"
      value={formData.phoneNumber}
      onChange={handleChange}
      required
    />
  </FormGroup>
  <FormGroup className="form_group">
    <input
      type="text"
      name="streetAddress"
      placeholder="Street address"
      value={formData.streetAddress}
      onChange={handleChange}
      required
    />
  </FormGroup>
  <FormGroup className="form_group">
    <input
      type="text"
      name="city"
      placeholder="City"
      value={formData.city}
      onChange={handleChange}
      required
    />
  </FormGroup>
  <FormGroup className="form_group">
    <input
      type="text"
      name="postalCode"
      placeholder="Postal code"
      value={formData.postalCode}
      onChange={handleChange}
      required
    />
  </FormGroup>
  <FormGroup className="form_group">
    <input
      type="text"
      name="country"
      placeholder="Country"
      value={formData.country}
      onChange={handleChange}
      required
    />
  </FormGroup>
  <button className="buy_btn auth_btn w-100" onClick={handleFormSubmit}>
    Submit
  </button>
</Form>

                    </Col>
                    <Col lg="4">
                        <div className="checkout_cart">
                            <h6>Total Qty : <span>{totalQty} items</span></h6>
                            <h6>SubTotal : <span>Rs {totalAmount}</span></h6>
                            <h6>
                           <span>
                            Shipping : <br/> <br/>
                            Free Shipping</span>
                            <span>Rs 0</span></h6>
                            <h4>Total Cost : <span>Rs {totalAmount}</span></h4>
                        
                        <button className="buy_btn auth_btn w-100" >Place an Order</button>
                        
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </Helmet>
        </div>
    );
};
export default Checkout;