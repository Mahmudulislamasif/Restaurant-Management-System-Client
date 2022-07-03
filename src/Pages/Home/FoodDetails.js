import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
const FoodDetails = () => {
    const {foodId}=useParams()
    const [count,setCount]=useState()
    const [reload,setReload]=useState(false)
    const [foodDetails,setFoodDetails]=useState({})
    useEffect(()=>{
        const url =`http://localhost:5000/food/${foodId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFoodDetails(data))
    })
   
    const increaseQuantity =(event)=>
        {
              event.preventDefault()
              const quantity=parseFloat(foodDetails.quantity)+1;
              const totalPrice= parseFloat(foodDetails.total)*quantity;
              const updatePrice={totalPrice}
              const updateQuatity={quantity}
                const url=`http://localhost:5000/food/${foodId}`
                fetch(url,
                  {
                      method:'PUT',
                      headers:{
                          'content-type':'application/json'
                      },
                      body:JSON.stringify(updateQuatity)
                  })
                  .then(res=>res.json)
                  .then(data=>{
                      console.log(data)
                      setReload(!reload)
                  },[reload])
              };      

    const decreaseQuantity =(event)=>
        {
              event.preventDefault()
              const quantity=parseFloat(foodDetails.quantity)-1;
              const totalPrice=parseFloat(foodDetails.price)
              const updateQuatity={quantity}
              if(quantity<0)
              {
                  alert("There is no item Available item is sold out")

              }
              if(quantity>=0 )
              {
                const url=`http://localhost:5000/food/${foodId}`
                fetch(url,
                  {
                      method:'PUT',
                      headers:{
                          'content-type':'application/json'
                      },
                      body:JSON.stringify(updateQuatity)
                  })
                  .then(res=>res.json())
                  .then(data=>{
                      console.log(data)
                      setReload(!reload)
                  },[reload])
              }
             
        };

    return (
        <div className="bg-gradient-to-t from-slate-200 to-slate-300">
          <div class="card lg:card-side bg-base-100 shadow-xl mx-auto md:w-1/2 w-full p-3 bg-gradient-to-t from-slate-200 to-slate-300">
            <figure><img src={foodDetails.image} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{foodDetails.name}</h2>
                <p className="text-left"><span className="font-bold">Price:</span> {foodDetails.price}</p>
                <p className="text-justify"><span className="font-bold">Ingredients:</span> <span className="block">{foodDetails?.ingredients}</span></p>
                <p className="font-bold">Select Quantity</p>
                <div className="flex bg-slate-300 p-3">
                    <button onClick={increaseQuantity} className=" bg-pink-600 rounded-full w-1/3 cursor-pointer text-white">+</button>
                    <p className="bg-black rounded-full text-white">{foodDetails.quantity}</p>
                    <button onClick={decreaseQuantity} className="bg-pink-600 rounded-full w-1/3 cursor-pointer text-white">-</button>
                </div>
                <div class="card-actions justify-end">
                <a href="#my-modal-2" class="btn btn-primary">Order Now</a>
                    <div class="modal" id="my-modal-2">
                    <div class="modal-box ">
                         <div class="modal-action">
                           <a href="#" class="btn bg-red-600 hover:bg-red-600 border-none">X</a>
                         </div>
                        <input type="text" placeholder="Type here" value={foodDetails.name} readOnly disabled class="input input-bordered input-secondary w-full max-w-xs mb-2" />
                        <input type="text" placeholder="Type here" value={foodDetails.quantity} readOnly disabled class="input input-bordered input-secondary w-full max-w-xs" />
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
    );
};

export default FoodDetails;