import React from "react";

class Description extends React.Component {
   render() {
      return this.props.product.map((i) => {
         return (
            <div className="product-descDC">
               <h3 id="nameDC">{i.product_name}</h3>
               <div>Visit The Apple Store</div>
               <div id="ratingDC">RATINGS</div>
               <hr />
               <div id="priceDC">${i.price}</div>
               <a href="">& FREE Returns</a>
               <div id="paymentsDC">
                  <a href="">
                     <u id="payDC">Pay</u> <u id="mopayDC">${(i.price / 6).toFixed(2)}/month for 6 months</u>
                     (plus S&H, tax) with 0% interest equal monthly payments when you're approved for the Prime Store
                     Card.
                  </a>{" "}
                  May be available at a lower price from other sellers, potentially without free Prime shipping.
               </div>
               <div className="optionsDC">
                  {i.options.map((x) => {
                     return <button className="optionsBtnDC">{x}</button>;
                  })}
               </div>
               <hr />
               <div id="aboutDC">About this item</div>
               <ul>
                  {i.about.map((y) => {
                     return <li className="detailsDC">{y}</li>;
                  })}
               </ul>
            </div>
         );
      });
   }
}

export default Description;
