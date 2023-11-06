import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Components/Card";


const Details = () => {

    const[findData,setFindData]=useState();
    const data=useLoaderData();
    const {id}=useParams();
    console.log(id,data);


    useEffect(()=>{
        const findData=data.find(data=>data._id===id)
        setFindData(findData);

    },[id,data])

    return (
        <div className=" mb-20">
            {
            <Card data={findData}></Card>
            }
        </div>
    );
};

export default Details;