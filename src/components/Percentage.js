import React from 'react'
import './css/products.css'

// var rate= '₹48,900';
// console.log(rate);
// var Nrate=rate.replace(rate,48900);
// console.log(Nrate);
// var offer= '45,999';
// console.log(offer);
// var Noff = offer.replace(offer,45999);
// console.log(Noff);
// var avg = Nrate-Noff;
// console.log(avg);
// var per = (avg/Nrate)*100;
// var percentage =Math.trunc(per);
// console.log(percentage);

function Percentage (props){

  let APN = props.orgP.replace(/\D/g,'');
  let OPN =props.offr.replace(/\D/g,'');
  console.log(APN)
  console.log(OPN)
  let percentage = Math.trunc(((APN-OPN)/APN)*100);
  console.log(percentage);

  return (
  <div>
    <p className="text-success off">Extra ₹{APN-OPN} off<span className="per">{percentage}% off<i class="fas fa-circle-info"></i></span></p>
    </div>
    )
}
export default Percentage;