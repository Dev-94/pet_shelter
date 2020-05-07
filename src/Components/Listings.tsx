import React, { useState, useEffect } from 'react'
import { Card, CardTitle, CardSubtitle, CardText, CardImg, CardBody } from 'reactstrap'

const Listings = () => {

    const [petName, setPetName] = useState([])
    const [petAge, setPetAge] = useState([])

    useEffect(() => {
        const url = 'https://api.rescuegroups.org/v5/public/animals/'
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/vnd.api+json");
        myHeaders.append("Authorization", "M4heqARw");
        // const headers = {
        //     "Content-Type": "application/vnd.api+json",
        //     "Authorization": "M4heqARw"
        // }
        // var raw = "{\n    \"data\": {\n        \"filters\": \n    	[\n    		{\n    			\"fieldName\": \"animals.breedPrimaryId\",\n    			\"operation\": \"equal\",\n    			\"criteria\": \"90\"\n    		},\n    		{\n    			\"fieldName\": \"animals.sizeGroup\",\n    			\"operation\": \"equal\",\n    			\"criteria\": [\"Small\",\"Medium\"]\n    		}\n    	],\n    	\"filterProcessing\": \"1 and 2\",\n        \"filterRadius\":\n        	{\n        		\"miles\": 100,\n        		\"lat\": 34.1031,\n        		\"lon\": -118.416\n        	}\n        \n    }\n}\n";

        var requestOptions = {
            // method: 'GET',
            headers: myHeaders,
            // body: raw,
            // redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                setPetName(result.data)
                // console.log(result.data.slice(0, 10))
                console.log(petName)
            }
            )


    })



    return (
        <div>
            Listings

            <p> {Object.keys(pets)} </p>
            <p> {typeof (pets[0])} </p>
            {/* <p> {pets.slice(0, 10)} </p> */}


        </div>
    )

}

export default Listings