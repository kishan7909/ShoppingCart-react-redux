import React from 'react';
import {connect} from 'react-redux'





function AddCart(props){
    let total = 0;

    return(
        <div>
        <h2 className="text-center">Add Cart</h2>
        <div className="container">
            <ul className="list-group list-group-flush col-md-6 offset-md-3 p-0">
                {props.cart.map((item,index)=>
                    <li key={index} className="list-group-item">
                        <span>{item.name}</span>
                    <button className="btn ml-3">-</button>
                    <span className="ml-2">1</span>
                    <button className="btn ml-3">+</button>
                    <span className="float-right">&#8377; {item.price}
                        <p style={{display:"none"}}>{ total = item.price + total }</p>
                        <button onClick={() => props.deletecart(index)} className="btn btn-danger btn-sm ml-3">-</button>
                        </span></li>



                )}
                <li className="list-group-item"><h3 className="float-right">{(total===0) ? null : <i>Total &#8377; {total.toLocaleString()}</i>}</h3></li>

            </ul>

        </div>
        {(total===0)?<h6 className="text-center"><i style={{color : "grey"}}>Cart is empty</i></h6>:null}
        </div>

    )

}
function mapStateToProps(state){
    return {
        items : state.items,
        cart : state.cart
    }
  }
function mapDispatchToProps(dispatch){
    return {
        deletecart:(id) => {
            console.log("Delete cart click")
            console.log(id)
            const action = {type : "DELETETOCART",id : id}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddCart);
