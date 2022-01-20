import React, {useState} from 'react'
import axios from "axios";
import { useHistory} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

const Planet = () => {
    const [data, setData] = useState()
    const {Id} = useParams();
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${Id}`)
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
                    <h3>Rotation_period: {data.rotation_period}</h3>
                    <h3>Diameter: {data.diameter}</h3>
                    <h3>Climate: {data.climate}</h3>
                    <h3>Gravity: {data.gravity}</h3>
                    <h3>Terrain: {data.terrain}</h3>
                    <h3>Surface_water: {data.surface_water}</h3>
                    <h3>Population: {data.population}</h3>
                </div>
            ) : 
            
            <h2>Loading</h2>

        }
        </div>
        
    )

}

export default Planet
