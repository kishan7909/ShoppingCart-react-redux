/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import ItemList from './components/ItemList'
import {connect} from 'react-redux'
import {addcart} from './actions/index'

function ShoppingApp (props){
    console.log('render running',props)
    return (
        <div>
            <div className="form-inline col-md-12 offset-md-3">
            <label className="mr-2">Search</label><input type="text" placeholder="Search.." className="form-control col-md-6"/></div>

        <ItemList items={props.items} addcart={props.addcart} />
        </div>
    );
}
function mapStateToProps(state){
    return {
        items : state.items,
        cart : state.cart
    }
}
function mapDispatchToProps(dispatch){
    return {
        addcart:(id,name,price) => {
            console.log("Add cart click")
            console.log(id,name,price)
            const action = addcart(id,name,price)
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ShoppingApp);
