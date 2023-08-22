import React from "react"
import ReactDom from "react-dom"

const Test = () => {
  console.log("this is the test react")

  return <div>This is tutorial to integrate react.js into shopify theme with webpack</div>
}

const root = document.getElementById('cart__drawer_items');
ReactDom.render(<Test />, root);