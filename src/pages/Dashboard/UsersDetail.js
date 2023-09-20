import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams} from 'react-router-dom';

function UsersDetail() {
  const {id} = useParams();
  const location = useLocation();
  const [user, setUser] = useState(location.state)


  useEffect(() => {
    if(!user?.id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json());
      then((data) => setUser(data));
    }
  },[id, user]);

  return (
    <div className='user-detail'>
      <h2> user details</h2>
      <div>
       <ul>
        <li>
          <h3>{user.id}. user</h3> 
          </li>
          <li>
            <h4>name: <span>{user.name}</span></h4>
            </li>
            <li>
              <h4>email: <span>{user.email}</span></h4>
              </li>
              <li>
               <h4>address</h4>
               <h5>street: <span>{user.address.street}</span></h5>
               <h5>an apartment: <span>{user.address.suite}</span></h5>
               <h5>city: <span>{user.address.city}</span> </h5>
               <h5>post code: <span>{user.address.zipcode}</span></h5>
                </li>

                <li>
                <h4>website: <span>{user.website}</span></h4>
                  </li>
                  <li>
                   <h4>telephone: <span>{user.phone}</span></h4>
                    </li>

                    <li>
                     <h4>company</h4>
                     <h5>name: <span>{user.company.name}</span></h5>
                     <h5>slogan: <span>{user.company.catchPhrase}</span></h5>
                      </li>
         </ul>
 
        </div>

      </div>
  )
}

export default UsersDetail