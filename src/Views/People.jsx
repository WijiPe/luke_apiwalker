import React, {useState} from 'react'
import axios from "axios";
import { useHistory} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

const People = () => {
    const [data, setData] = useState(null)
    const {Id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${Id}`)
            .then(response => {
                console.log(response.data)
                setData(response.data)
            })

        .catch(error =>{
            setData(null)
        })
    }, [Id]);


    return(
        <div>
            {
            data ?(
                <div>
                    <h2>Name: {data.name}</h2>
                    <h3>Height: {data.height}</h3>
                    <h3>Mass: {data.mass}</h3>
                    <h3>Hair_color: {data.Hair_color}</h3>
                    <h3>Skin_color: {data.Skin_color}</h3>
                    <h3>Eye_color: {data.eye_color}</h3>
                    <h3>Birth_year: {data.birth_year}</h3>
                    <h3>Gender: {data.gender}</h3>
                    <h3>Homeworld: {data.homeworld}</h3>
                    <h3>{HomeWorld.name}</h3>
                </div>
            ) : 
            
            <h2>Loading</h2>

        }
        </div>
        
    )
} 
export default People
