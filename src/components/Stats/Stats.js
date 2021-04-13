import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./stats.css";


function Stats({ fetchUrl }) {
    const [stats, setStats] = useState([]);
    useEffect(() => {
        async function fetchData() {
            // console.log(fetchUrl)
            const request = await axios.get(fetchUrl, {
                params: {
                    _limit: 10
                }
            })
                .then(response => {
                    // console.log(response)
                    setStats(response.data)
                })
            console.log(request);
            return request;
        }
        fetchData()
    }, [fetchUrl]);
    return (
        <div>
            {
                stats.map((stat) => {
                    console.log(stat.Name)
                    return (
                        <div className="stats" key={stat.StadiumID}>
                            <h1>{stat.Name}</h1>
                            <p>{stat.City}</p>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default Stats;

