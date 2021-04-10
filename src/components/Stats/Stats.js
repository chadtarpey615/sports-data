import React, { useState, useEffect } from 'react';
import axios from "axios";
export default function Stats({ fetchUrl }) {
    // console.log(fetchUrl)
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
                .then(response => {
                    console.log(response.data)
                })
            // console.log(request);
            // return request;
        }
        fetchData()
    }, [fetchUrl]);
    return (
        <div>

        </div>
    )
}
