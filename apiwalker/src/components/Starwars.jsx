import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const Starwars = (props) => {
    const [categories, setCategories]= useState([]);
    const [formInfo, setFormInfo] = useState({
        category:"people",
        id: ""
    });
    const history = useHistory();
    
    useEffect(()=>{
        //make an api call using axios to the coingecko api
        axios.get("https://swapi.dev/api/")
            .then(res=>{
                console.log("res looks like-->", res)
                console.log(Object.keys(res.data))
                setCategories(Object.keys(res.data))
            })
            .catch(err=>{
            console.log(err)
          }) //.catch() means if there were any errors that came up in our api request, this is where we will handle those errors
        },[])

        const changeHandler = (e)=>{
            e.preventDefault();
            setFormInfo({
                ...formInfo,
                [e.target.name]:e.target.value
            })
            console.log(formInfo);
        }

        const submitHandler = (e)=>{
            e.preventDefault();
            history.push(`/${formInfo.category}/${formInfo.id}`)}
    
    return (
        <div className="container">
            <form className="row align" onSubmit={submitHandler}> 
                <div className="col">
                    <label htmlFor="">Search For:</label>
                    <select onChange = {(e)=>changeHandler(e)} name="category" id="" >
                        {
                            categories.map((cat,i)=>{
                                return <option key= {i} value={cat}>{cat}</option>
                            })
                        }
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="">ID:</label>
                    <input type="number" onChange={ (e)=> changeHandler(e)} name="id" value = {formInfo.id}  />
                </div>
                <div className="col">
                    <input type="submit" value="Search" className= "btn btn-primary mt-3" />
                </div>
            </form>
            < hr/>
        </div>
    );
};



export default Starwars;