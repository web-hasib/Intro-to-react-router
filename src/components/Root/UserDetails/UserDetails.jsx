import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  console.log(user);

  // address
  // :
  // city
  // :
  // "Gwenborough"
  // geo
  // :
  // {lat: '-37.3159', lng: '81.1496'}
  // street
  // :
  // "Kulas Light"
  // suite
  // :
  // "Apt. 556"
  // zipcode
  // :
  // "92998-3874"
  // [[Prototype]]
  // :
  // Object
  // company
  // :
  // bs
  // :
  // "harness real-time e-markets"
  // catchPhrase
  // :
  // "Multi-layered client-server neural-net"
  // name
  // :
  // "Romaguera-Crona"
  // [[Prototype]]
  // :
  // Object
  // email
  // :
  // "Sincere@april.biz"
  // id
  // :
  // 1
  // name
  // :
  // "Leanne Graham"
  // phone
  // :
  // "1-770-736-8031 x56442"
  // username
  // :
  // "Bret"
  // website
  // :
  // "hildegard.org"

 return(
    <div style={{backgroundColor: '#ff0cc', border: '1px solid gold',borderRadius: '20px', padding: '10px', margin: '10px'}}>
        <h1>User Details</h1>
        <h2>Name: {user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p>Company: {user.company.name}</p>
        <p>Address: {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
    </div>
 );
};

export default UserDetails;
