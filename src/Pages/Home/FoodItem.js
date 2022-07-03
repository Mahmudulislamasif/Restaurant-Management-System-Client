import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoodItem = ({foodItem}) => {
    const {_id,image,name,price}=foodItem;
    const navigate=useNavigate();
    const navigateToDetails=(id)=>{
        navigate(`/food/${id}`)
    }
    return (
        <div className="mx-auto my-2">
            <div class="card w-96 glass">
            <figure><img className="mt-2 rounded-lg" src={image} alt="food"/></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p className="text-left">Price: {price}tk</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary" onClick={()=>navigateToDetails(_id)}>Show Details</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FoodItem;