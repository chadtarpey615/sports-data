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
        <div className="container">
            {
                stats.map((stat) => {
                    console.log(stat)
                    return (
                        <>
                            <div className="section">
                                <h1>{stat.Name}</h1>
                                <br />
                                <h4>{stat.City}, {stat.State}</h4>
                                <p>Playing Surface: {stat.PlayingSurface}</p>
                                <p>Stadium type: {stat.Type}</p>
                                <p>Stadium capacity: {stat.Capacity}</p>

                            </div>
                        </>


                    )
                })
            }
        </div>
    )
}

export default Stats;

