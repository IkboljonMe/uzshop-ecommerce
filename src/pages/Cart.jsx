import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../redux/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h1 className="fs-4 text-center mb-4 mt-4 ">
                  No items added to the cart
                </h1>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                  <span className="fs-4 fw-bold">$ {totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                Taxes and shipping will be calculated in checkout
              </p>
              <button className="buy__btn w-100 pt-15">
                <Link style={{ color: "white" }} to="/login">
                  Checkout
                </Link>
              </button>
              <button className="buy__btn w-100 mt-3">
                <Link style={{ color: "white" }} to="/shop">
                  Continue Shopping
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProductHandler = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>{item.quantity}px</td>
      <td>
        <span>
          <i onClick={deleteProductHandler} class="ri-delete-bin-line"></i>
        </span>
      </td>
    </tr>
  );
};

export default Cart;
