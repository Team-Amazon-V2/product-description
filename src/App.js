import React from "react";

class App extends React.Component {
   state = {
      loading: true,
      product: null,
      loadingMsg: "loading product...",
   };

   componentDidMount() {
      fetch("http://localhost:3005/")
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            this.setState({ loading: false, product: data });
         });
   }

   render() {
      if (this.state.loading) {
         return <h1>{this.state.loadingMsg}</h1>;
      }
      return <div>This worked</div>;
   }
}

export default App;
