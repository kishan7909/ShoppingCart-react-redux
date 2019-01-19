import {createStore} from "redux";
let count = 0;
const initialState = {
  items: [
    {
      id: 1,
      name: "Iphone X",
      price: 75000
    }, {
      id: 2,
      name: "Mi Note 5 Pro",
      price: 13000
    }, {
      id: 3,
      name: "Vivo V11 Pro",
      price: 21000
    }, {
      id: 4,
      name: "Pixel 2",
      price: 36000
    }, {
      id: 5,
      name: "Pixel 2 XL",
      price: 39000
    }, {
      id: 6,
      name: "One Plus 6T",
      price: 49000
    }, {
      id: 7,
      name: "Vivo NEX",
      price: 69000
    }, {
      id: 8,
      name: "Macbook Pro",
      price: 81000
    }, {
      id: 9,
      name: "Lenovo Notebook",
      price: 57000
    }, {
      id: 10,
      name: "ASUS ZEN book",
      price: 59000
    }, {
      id: 11,
      name: "HP Pantium",
      price: 58800
    }
  ],
  cart: []
};

const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case "ADDTOCART":
      count++;
      console.log(state.cart);
      return Object.assign({}, state, {
        cart: state.cart.concat([
          {
            id: count,
            itemid: action.id,
            name: action.name,
            price: action.price
          }
        ])
      });

    case "DELETETOCART":
      const copyItem = state.cart.slice();
      copyItem.splice(action.id, 1);
      return Object.assign({}, state, {cart: copyItem});
    default:
      return state;
  }
};

let store = createStore(reducer);

export default store;
