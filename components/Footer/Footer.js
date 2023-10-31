import React from "react";
import './footer.css';
import { Container , Row, Col,ListGroup,ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

const Footer=()=>{
    const Year=new Date().getFullYear()
    return(
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="4">
                    <div className="logo">
                       
             <div>
                <h1 className="text-white">Spicemart</h1>
                </div>
                </div>
                <p className="footer_text mt-4"> SpiceMart is committed to deliver high-quality Indian spices. We are delivering spices globally from our
state-of-the-art facility close to the port.  </p>
                
            
             
                    </Col>
                    <Col lg="3">
                        <div className="footer_quick-links">
                          <h4 className="quick_links-title">Top Categories</h4>
                          <ListGroup> 
                          <ListGroupItem className="ps-0 border-0 ">
                           <Link to='#'>Organic Spices</Link>

                          </ListGroupItem>
                          <ListGroupItem className="ps-0 border-0">
                           <Link to='#'>Whole Spices</Link>

                          </ListGroupItem>
                          <ListGroupItem className="ps-0 border-0">
                           <Link to='#'>Hot Spices</Link>

                          </ListGroupItem>
                          <ListGroupItem className="ps-0 border-0">
                           <Link to='#'>Ground Spices</Link>

                          </ListGroupItem>
                          </ListGroup>
                        </div>
                    </Col>
                    <Col lg="2">
                    <div className="footer_quick-links">
                          <h4 className="quick_links-title">Useful Links</h4>
                          <ListGroup> 
                          <ListGroupItem className="ps-0 border-0 ">
                           <Link to='/shop'>Shop</Link>

                          </ListGroupItem>
                          <ListGroupItem className="ps-0 border-0">
                           <Link to='/cart'>Cart</Link>

                          </ListGroupItem>
                          <ListGroupItem className="ps-0 border-0">
                           <Link to='/login'>Login</Link>

                          </ListGroupItem>
                          <ListGroupItem className="ps-0 border-0">
                           <Link to='#'>Privacy Policy</Link>

                          </ListGroupItem>
                          </ListGroup>
                        </div>
                    </Col>
                    <Col lg="3 ">
                    <div className="footer_quick-links">
                          <h4 className="quick_links-title">Contact</h4>
                          <ListGroup className="footer_contact"> 
                          <ListGroupItem className="ps-0 border-0  d-flex align-items-center gap-2">
                           <span><i class="ri-map-pin-fill"></i></span>
                           <p>987 ZanBazar, Sylhet,India</p>


                          </ListGroupItem>
                          <ListGroupItem className="ps-0 border-0  d-flex align-items-center gap-2">
                          <span><i class="ri-phone-line"></i></span>
                           <p>+0998762345987</p>
                           </ListGroupItem>
                          <ListGroupItem className="ps-0 border-0  d-flex align-items-center gap-2">
                          <span><i class="ri-mail-fill"></i></span>
                           <p>spicemart@gmail.com</p>

                          </ListGroupItem>
                          
                          </ListGroup>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </footer>

    ) ;
};
export default Footer;