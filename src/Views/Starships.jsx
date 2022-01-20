import React, {useState} from 'react'
import axios from "axios";
import { useHistory} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

const Starships = () => {
    const [data, setData] = useState()
    const {Id} = useParams();
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${Id}`)
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
                    <h3>Model: {data.model}</h3>
                    <h3>Manufacturer: {data.manufacturer}</h3>
                    <h3>Cost_in_credits: {data.cost_in_credits}</h3>
                    <h3>Length: {data.length}</h3>
                    <h3>Max_atmosphering_speed: {data.max_atmosphering_speed}</h3>
                    <h3>Crew: {data.crew}</h3>
                    <h3>Passengers: {data.passengers}</h3>
                    <h3>Cargo_capacity: {data.cargo_capacity}</h3>
                    <h3>Consumables: {data.consumables}</h3>
                    <h3>Hyperdrive_rating: {data.hyperdrive_rating}</h3>
                    <h3>MGLT: {data.MGLT}</h3>
                    <h3>Starship_class: {data.starship_class}</h3>
                </div>
            ) : 
            
            <h2>Loading</h2>

        }
        </div>
        
    )

}

export default Starships
