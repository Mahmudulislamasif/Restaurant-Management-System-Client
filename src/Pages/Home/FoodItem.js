import React from 'react';

const FoodItem = ({foodItem}) => {
    const {image,name,price}=foodItem;
    return (
        <div className="mx-auto my-2">
            <div class="card w-96 glass">
            <figure><img className="mt-2 rounded-lg" src={image} alt="food"/></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p className="text-left">Price: {price}tk</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">Show Details</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FoodItem;