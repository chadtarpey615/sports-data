import React, { useState, useEffect } from 'react';
import axios from "axios";


export default function Stats({ fetchUrl }) {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl, { params: { _limit: 25 }, active: true })
                .then(response => {
                    setStats(response.data)
                })
            // console.log(request);
            return request;
        }
        fetchData()
    }, [fetchUrl]);
    return (
        <div>
            {
                stats.map((stat) => {
                    console.log(stat)
                    return (
                        <h1>{stat.firstName}</h1>

                    )
                })
            }
        </div>
    )
}

