import React from 'react';
import './css/products.css'
import Percentage from './Percentage.js';


function Products(props) {
  return (
      <div className="products">
      <div>
      <img className="p-img" src={props.data.img} alt=""/>
      </div>

      <div>
      <h1 className="title-name">{props.data.title}</h1>

      <p className="bg-success rating-text">{props.data.rating} <i class="fa-sharp fa-solid fa-star"></i> </p><span className="reviews">12,812 Ratings &
563 Reviews</span>

      <Percentage orgP={props.data.price} offr={props.data.offer}/>


      <p className="offr">{props.data.offer}<span className="orgP"> {props.data.price}</span></p>

      <p className="avail-off">Avilable Offers</p>
      
        <ul className="ul">

        <li><i class="fas fa-tag text-success"></i> <span className="bankP">Bank Offer10% </span> off on American Express Credit Card EMI Transactions, up to ₹1,000 on orders of ₹5,000 and above<span className="text-primary">T&C</span></li>

        <li><i class="fas fa-tag text-success"></i> <span className="bankP">Bank Offer10% </span> off on Bank of Baroda Credit Card EMI Transactions, up to ₹1,000 on orders of ₹5,000 and above<span className="text-primary">T&C</span></li>

        <li><i class="fas fa-tag text-success"></i> <span className="bankP">Bank Offer10% </span> off on IDFC FIRST Bank Credit Card EMI Transactions, up to ₹1,000 on orders of ₹5,000 and above<span className="text-primary">T&C</span></li>

        <li><i class="fas fa-tag text-success"></i> <span className="bankP">Special PriceGet </span> extra ₹5491 off (price inclusive of cashback/coupon)<span className="text-primary">T&C</span></li>

        <li><i class="fas fa-tag text-success"></i> <span className="bankP">Partner OfferSign </span> up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500</li>

        <li><i class="fas fa-tag text-success"></i> <span className="bankP">Bank offer5% Cashback</span>on Flipkart Axis Bank Card<span className="text-primary">T&C</span></li>

        <li><i class="fas fa-tag text-success"></i> <span className="bankP">Know More No cost EMI </span>₹2,417/month. Standard EMI also availableView Plans.</li>

        </ul>
      
      </div>
      </div>
  );
}
export 
default Products;
