import React from 'react';


export default function Verify(){
    return (
        <div>
           <div id="idme-verification">
  <p>Verify with ID.me as the primary action</p>
  <a href="https://api.id.me/oauth/authorize?client_id=28bf5c72de76f94a5fb1d9454e347d4e&redirect_uri=https://api.id.me/api/public/v3/attributes.json?access_token=c4ae7190821543e39e9618ff62a2f231&response_type=token&scope=military&state=488e864b">
    <img src="https://s3.amazonaws.com/idme/developer/idme-buttons/assets/img/verify.svg" height="50"/>
  </a>
  <p>
    <img src="https://developers.id.me/assets/buttons/lock-icon-a5b18fbb34d393a80967c08399786f95955ee818b693b97d3f37698e2bc113f2.svg" height="10"/>
    Verification by ID.me •
    <a href="https://www.id.me/about">What is ID.me?</a>
  </p>
</div>
        </div>
    )
}