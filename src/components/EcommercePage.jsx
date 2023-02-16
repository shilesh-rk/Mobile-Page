import React from 'react';
import Products from './Products.jsx';
import Percentage from './Percentage.js';
import './css/e-com.css';

class EcommercePage extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      title: "",
      img: "",
      price: "0",
      offer: "0",
      rating: 4.3,
      mobiles: [
        {
          id: 1,
          title: 'Apple iPhone 11 (White, 128 GB)',
          img: 'https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70',
          price: '₹48,900',
          offer: '₹45,999',
          rating: '4.5',
        },
        {
          id: 2,
          title: 'SAMSUNG Galaxy F13 (Sunrise Copper, 64 GB)  (4 GB RAM)',
          img: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70',
          price: '₹14,999',
          offer: '₹9,799',
          rating: '4.4',
        },
        {
          id: 3,
          title: 'Infinix HOT 20 Play (Fantasy Purple, 64 GB)  (4 GB RAM)',
          img: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/a/p/r/-original-imagkgrxwg386pjk.jpeg?q=70',
          price: '₹11,999',
          offer: '₹8,299',
          rating: '4.4',
        },
        {
          id: 4,
          title: 'vivo T1 44W (Starry Sky, 128 GB)  (4 GB RAM)',
          img: 'https://rukminim1.flixcart.com/image/416/416/l2p23rk0/mobile/s/4/3/-original-imagdznhcbdfwfud.jpeg?q=70',
          price: '₹19,990',
          offer: '₹14,499',
          rating: '4.5',
        },
      ],
    };
  }
  items = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  add = () => {
    this.setState({
      mobiles: [
        ...this.state.mobiles,
        {
          title: this.state.title,
          img: this.state.img,
          price: this.state.price,
          offer: this.state.offer,
          rating: this.state.rating,
        },
      ],
    });
    if(this.state.title.length==0|| this.state.img.length == 0||this.state.price == 0 || this.state.offer==0){
      if(document.getElementById("missing").style.display="none"){
        document.getElementById("missing").style.display="block"
      }
      this.setState({
        mobiles:[...this.state.mobiles]
      })
      

    }
    else if(document.getElementById("alert").style.display="none"){
      document.getElementById("alert").style.display="block"
    }
    
  }; 
  close = () =>{
    if(document.getElementById("alert").style.display="block"){
      document.getElementById("alert").style.display="none"
      if(document.getElementById("missing").style.display="block"){
        document.getElementById("missing").style.display="none"
      }
    }}

  
  

  
  render() {
    return (
      <div className="">
      <div id="alert"class="alert">
        <span id="close-btn"class="closebtn" onClick={this.close}>&times;</span> 
        <strong>Yeah!</strong> Product Added Successfully.
      </div>
      <div id="missing"class="alert">
        <span id="close-btn"class="closebtn" onClick={this.close}>&times;</span> 
        <strong>Missing!</strong> Product Details.
      </div>
        <nav class="container-fluid navbar navbar-expand-lg bg-body-tertiary position-fixed">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img className="logo" src="https://seeklogo.com/images/P/pc-the-mobile-shop-logo-BD88FC7782-seeklogo.com.png" alt="myMobiles"/>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li> */}
              </ul>
              <div class="d-flex">
                <input
                  class="form-control me-2"
                  name="title"
                  onChange={this.items}
                  placeholder="Product Title"
                  aria-label="Title"
                />

                <input
                  class="form-control me-2"
                  name="img"
                  onChange={this.items}
                  placeholder="/image-path"
                  aria-label="Image"
                />

                <input
                  class="form-control me-2"
                  name="price"
                  onChange={this.items}
                  placeholder="Original Price"
                  aria-label="Price"
                />

                <input
                  class="form-control me-2"
                  name="offer"
                  onChange={this.items}
                  placeholder="Offer Price"
                  aria-label="Offer"
                />
                <button className="btn btn-outline-danger"   data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
               onClick={this.add}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </nav>
        

        {this.state.mobiles.map((x) => {
          return (
            <div>
              <Products data={x} />
            </div>
          );
        })}
      </div>
    );
  }
}
export default EcommercePage;
