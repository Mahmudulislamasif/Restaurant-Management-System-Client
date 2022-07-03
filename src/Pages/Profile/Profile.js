import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth)
    return (
        <div className="bg-slate-200 p-3">   
           <form className="flex flex-col bg-slate-800 w-1/2 mx-auto md:w-1/2 shadow-inner rounded-xl p-4">  
                     <input type="text" name="email" value={user?.email||''} readOnly disabled className="input input-bordered mb-2" />
                     <input type="text" name="name" value={user?.displayName||''} readOnly disabled  className="input input-bordered mb-2" />
                     <input type="text" name="location"  placeholder="location(cir-2ty/district)" className="input input-bordered mb-2" required />
                     <input type="text" name="phone" placeholder="phone" className="input input-bordered mb-2" required/>
                     <div className="flex mx-auto mb-3">
                     <input  type="Add Info" value="Submit" className="btn btn-secondary mr-2 text-white" required/>
                     <input  type="Upadte Info" value="Update Info" className="btn btn-secondary text-white" required/>
                     </div>
                     <div className="flex mx-auto">
                     <input  type="Make Admin" value="Make admin" className="btn btn-secondary mr-2 text-white" required/>
                     <input  type="Make Admin" value="Show Info" className="btn btn-secondary text-white" required/>
                     </div>
             </form>
        </div>
    );
};

export default Profile;