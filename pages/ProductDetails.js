import React,{useState,useRef,useEffect} from "react";
import {Container, Row, Col, Form,FormGroup} from "reactstrap";
import {useParams} from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useDispatch
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import ProductsList from "../components/UI/ProductsList";


import { useNavigate } from 'react-router-dom';
const ProductDetails = () => {

    const[tab,setTab]=useState("desc");
    const reviewUser=useRef('');
    const reviewMsg=useRef('');
    const dispatch= useDispatch();
    const [rating,setRating]=useState(null);
     
    const {id}= useParams();
   
    const product=products.find((item)=>item.id === id);
    const {imgUrl, productName , price, avgRating,reviews,description,shortDesc,category} = product;

    const relatedProducts=products.filter(item=> item.category===category);
   const submitHandler=(e)=>{
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
    const reviewObj={
        userName: reviewUserName,
        text:reviewUserMsg,
        rating,
    };
    console.log(reviewObj);
    toast.success("Review submitted");
   };
   const addToCart=()=>{
    dispatch(
        cartActions.addItem({
        id,
        image:imgUrl,
        productName,
        price,
    })
    );
    toast.success("Product added Successfully");
   };
   useEffect(()=>{
    window.scrollTo(0,0);
   },[product]);
       const navigate = useNavigate();
   const [formData, setFormData] = useState({
    name: '',
    text: '',
    rating: 0,
    
  
    
  });
  const handleChange = (e) => {
    if (e.target.name === 'rating') {// Since the rating spans are clicked, you can set the rating directly
      setFormData({
        ...formData,
        rating: parseInt(e.target.dataset.value), // Parse the rating from the data-value attribute
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch('https://sasi-be.onrender.com/submit-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.status === 201) {
        alert("Review Submitted!")
        navigate('/Lshop');
      } else {
        alert("Error")    }
    } catch (error) {
      console.error(error);
    }
  };
    return( 
    <Helmet title = {productName}>
    <CommonSection title = {productName}/>

    <section >
   <Container>
   <Row>
    <Col lg="6">
        <img src = {imgUrl} alt=""/>
    </Col>
    <Col lg="6">
    <div className="product_details">
            <h2>{productName}</h2>
            <div className="product_rating d-flex align-items-center gap-5 mb-3">
                <div>
                 <span >
                    <i class="ri-star-fill"></i>
                    </span>  
                 <span >
                    <i class="ri-star-fill"></i>
                    </span> 
                 <span >
                    <i class="ri-star-fill"></i>
                    </span> 
                 <span >
                    <i class="ri-star-fill"></i>
                    </span> 
                 <span >
                    <i class="ri-star-half-line"></i>
                    </span>  
                </div>
                <p>
                    (<span>{avgRating } ratings</span>
                    )
                </p>
            </div>
            <div className="d-flex align-items-center gap-5" >
            <span className="product_price">RS {  price}</span>
            <span>Category : {category.toUpperCase()} </span>
            </div>
            <p className="mt-3">{shortDesc}</p>
           
            <motion.button whileTap={{scale:1.2}} className="buy_btn " onClick={addToCart}>Add to Cart</motion.button>
        </div>
    </Col>
   </Row>
   </Container>
    </section>
    <section>
        <Container>
            <Row>
                <Col lg="12">
                    <div className="tab_wrapper d-flex align-items-center gap-5">
                        <h6 className={`${tab ==="desc" ? "active_tab" : ""}`} onClick={()=>setTab("desc")} 
                        >
                        Description</h6>
                        <h6 className={`${tab ==="rev" ? "active_tab" : ""}`} onClick={()=>setTab("rev")}
                        >Reviews ({reviews.length})</h6>

                    </div>
                    {
              
                    
                     tab === "desc" ? (<div className="tab_content mt-5">
                        <p>{description}</p>

                    </div>
                     ):(
                        <div className="product_review mt-5">
                            <div className="review_wrapper">
                                <ul>
                                    {
                                        reviews.map((item,index)=>(
                                            <li key={index} className="mb-4">
                                                <h6>Kavitha</h6><br/>
                                                <span>{item.rating}(rating)</span>
                                            <p>{item.text}</p>
                                            </li>

                                        ))
                                    }
                                </ul>
                                <div className="review_form">
                                    <h4>Leave your experience</h4>
                                 
                                    <Form action="" onSubmit={handleFormSubmit}>
  <FormGroup className="form_group">
    <input
      type="text"
      name="name"
      placeholder="Enter name"
      value={formData.name}
      onChange={handleChange}
      required
    />
  </FormGroup>
  <FormGroup className="form_group d-flex align-items-center gap-5 rating_group">
    <motion.span
      data-value="1"
      whileTap={{ scale: 1.2 }}
      onClick={handleChange}
      name="text"
    >
      1<i className="ri-star-fill"></i>
    </motion.span>
    <motion.span
      data-value="2"
      whileTap={{ scale: 1.2 }}
      onClick={handleChange}
      name="text"
    >
      2<i className="ri-star-fill"></i>
    </motion.span>
    <motion.span
      data-value="3"
      whileTap={{ scale: 1.2 }}
      onClick={handleChange}
      name="text"
    >
      3<i className="ri-star-fill"></i>
    </motion.span>
    <motion.span
      data-value="4"
      whileTap={{ scale: 1.2 }}
      onClick={handleChange}
      name="text"
    >
      4<i className="ri-star-fill"></i>
    </motion.span>
    <motion.span
      data-value="5"
      whileTap={{ scale: 1.2 }}
      onClick={handleChange}
      name="text"
    >
      5<i className="ri-star-fill"></i>
    </motion.span>
  </FormGroup>
  <FormGroup className="form_group">
    <textarea
      rows={4}
      type="text"
      name="msg"
      placeholder="Review Message..."
      value={formData.msg}
      onChange={handleChange}
      required
    />
  </FormGroup>
  

                                    
                                    
                                    <motion.button whileTap={{scale:1.2}} type="submit" className="buy_btn" onClick={handleFormSubmit}>Submit</motion.button>
                                 </Form>
                                </div>
                            </div>
                        </div>
                     )
                    }
                </Col>
                <Col lg="12" className="mt-5">
                    <h2 className="related_title">You might also like</h2><br/><br/>
                </Col>
                <ProductsList data={relatedProducts}/>
            </Row>
        </Container>
    </section>
    </Helmet>
    );
};
export default ProductDetails;