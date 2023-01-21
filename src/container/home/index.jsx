import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import './style.css';

export default function(){
    const [cookies, setCookie] = useCookies(['tokens']);

    const [list, setList] = useState()

    const secureApi = async () => {
        let result = await axios.get('https://covid-193.p.rapidapi.com/statistics', {
            headers: {
                'X-RapidAPI-Key': '7b8abadademsh63e72fdab2011cap18c538jsna13106d3e58f',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
        });
        const { data } = result;

        if(data.response) setList(JSON.stringify(data.response, null, 2))
          
    }

    const unsecureRequest = async () => {
        let result = await axios.get('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0');
        const { data } = result
        setList(JSON.stringify(data, null, 2))
    }

    return (
        <div className='home'>
            <h2>Home</h2>

            <button onClick={secureApi}>
                <p>API Secure Request</p>
            </button>
            <div className='space'/>
            <button onClick={unsecureRequest}>
                <p>API Unsecure Request</p>
            </button>

            <div className='result'>
                <p>{list}</p>
            </div>
        </div>
    );
}