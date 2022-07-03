import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import FoodItem from './FoodItem';

const FoodItems = () => {
    const [foodItems,setFoodItems]=useState([])
    const [filter,setFilter]=useState(foodItems)
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch('http://localhost:5000/foods')
        .then(res=>res.json())
        .then(data=>setFoodItems(data))
    },[])
    const filterFood =(category)=>{
       const updateList=foodItems.filter((x)=>x.category===category)
       setFilter(updateList)
    }
    return (
        <div className="bg-gradient-to-t from-slate-200 to-slate-300">
            <h1 className="text-5xl py-4">Our Items</h1>
                <button class="btn btn-outline btn-info my-3 mr-4" onClick={()=>setFilter(foodItems)}>All</button>
                <button class="btn btn-outline btn-info my-3 mr-4" onClick={()=>filterFood("breakfast")}>Breakfast</button>
                <button class="btn btn-outline btn-info my-3 mr-4" onClick={()=>filterFood("lunch")}>Launch or Dinner</button>
                <button class="btn btn-outline btn-info my-3" onClick={()=>filterFood("snack")}>Snack</button>
             <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                {
                    filter.map((foodItem)=><FoodItem key={foodItem._id} foodItem={foodItem}></FoodItem>)
                }
            </div>
        </div>
    );
};

export default FoodItems;