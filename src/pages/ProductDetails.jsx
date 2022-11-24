import React, { useState, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import ProductsList from "../components/UI/ProductsList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slice/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();

  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    shortDesc,
    price,
    avgRating,
    reviews,
    description,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (event) => {
    event.preventDefault();
    const reviewUserName = reviewUser.current.value;

    const reviewUserMsg = reviewMsg.current.value;
  };
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        productName,
        image: imgUrl,
        price,
      })
    );
    toast.success("Product added succesfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating">
                  <div>
                    <span onClick={() => setRating(1)}>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setRating(2)}>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setRating(3)}>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setRating(4)}>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setRating(5)}>
                      <i class="ri-star-half-s-fill"></i>
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating} </span> ratings)
                  </p>
                </div>

                <span className="category">
                  Category: {category.toUpperCase()}
                </span>

                <p className="mt-3">{shortDesc}</p>
                <div className="buy__price-wrapper">
                  <span className="product__price ">${price}</span>
                  <motion.button
                    onClick={addToCart}
                    whileTap={{ scale: 1.2 }}
                    className="buy__btn buy__details"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper">
                <h6 className={`${tab === "desc" ? "active__tab" : ""}`}>
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => {
                    setTab("rev");
                  }}
                >
                  Review ({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index}>
                          <h6>Jhon Doe </h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="review__form">
                    <h4>Leave your experience</h4>
                    <form action="" onSubmit={submitHandler}>
                      <div className="form__group">
                        <input
                          type="text"
                          placeholder="Enter name"
                          ref={reviewUser}
                        />
                      </div>
                      <div className="form__group d-flex align-items-center">
                        <span>
                          1<i class="ri-star-line"></i>
                        </span>
                        <span>
                          2<i class="ri-star-line"></i>
                        </span>
                        <span>
                          3<i class="ri-star-line"></i>
                        </span>
                        <span>
                          4<i class="ri-star-line"></i>
                        </span>
                        <span>
                          5<i class="ri-star-line"></i>
                        </span>
                      </div>
                      <div className="form__group">
                        <textarea
                          ref={reviewMsg}
                          rows={4}
                          type="text"
                          placeholder="Review Message..."
                        />
                      </div>
                      <div className="submit__btn">
                        <motion.button
                          type="submit"
                          whileTap={{ scale: 1.2 }}
                          className="buy__btn submit__btn"
                        >
                          SUBMIT
                        </motion.button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-5">
              <h2 className="related__title">You might also like</h2>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
