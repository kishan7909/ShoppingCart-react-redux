/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function openDetail()
{
    console.log('Open detail click');
}

function ItemList (props){
    console.log(props)
    return (
        <div className="container mt-5">
            <div className="row">

                    {props.items.map((item,index) =>
                            <div className="col-md-3" key={index} >
                            <div className="card">
                            {/* <img className="card-img-top" src="img_avatar1.png" alt="Card image" /> */}
                        <div className="card-body">
                            <h4 className="card-title" onClick={openDetail} style={{cursor:"pointer"}} >{item.name}</h4>
                            <p className="card-text">{item.price}</p>
                            <button onClick={() => props.addcart(item.id,item.name,item.price)} className="btn btn-warning">Add Cart</button>
                        </div>
                        </div>
                        </div>
                    )}


            </div>
        </div>

    )
}

export default ItemList
