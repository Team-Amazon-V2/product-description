import React from "react";

class Description extends React.Component {
   render() {
      return this.props.product.map((i) => {
         return (
            <div className="product-desc">
               <h3 id="name">{i.product_name}</h3>
               <div>Visit The Apple Store</div>
               <div id="rating">RATINGS</div>
               <hr />
               <div id="price">${i.price}</div>
               <a href="">& FREE Returns</a>
               <div id="payments">
                  <a href="">
                     <u id="pay">Pay</u> <u id="mopay">${(i.price / 6).toFixed(2)}/month for 6 months</u>
                     (plus S&H, tax) with 0% interest equal monthly payments when you're approved for the Prime Store
                     Card.
                  </a>{" "}
                  May be available at a lower price from other sellers, potentially without free Prime shipping.
               </div>
               <div className="options">
                  {i.options.map((x) => {
                     return <button className="optionsBtn">{x}</button>;
                  })}
               </div>
               <hr />
               <div id="about">About this item</div>
               <ul>
                  {i.about.map((y) => {
                     return <li className="details">{y}</li>;
                  })}
               </ul>
            </div>
         );
      });
   }
}

export default Description;
