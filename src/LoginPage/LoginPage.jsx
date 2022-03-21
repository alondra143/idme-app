import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage(props) {
    const clientID = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const redirectURI = process.env.REDIRECT_URI;
    const navigate = useNavigate();
    const [ clientToken, setClientToken ] = useState('c4ae7190821543e39e9618ff62a2f231');
    const [ client, setClient ] = useState({});


    useEffect(() => {
        const apiUrl = `https://api.id.me/api/public/v3/attributes.json?access_token=${clientToken}`
        // making a request to api
        fetch(apiUrl) // 3rd party, wait for a response
        .then((res) => res.json()) // parse json from string to js obj
        .then((data) => {
            console.log(data, 'this is the json from api idme')
            
        })

    }, [])

    return (
        <h1>hi</h1>
    );
}
