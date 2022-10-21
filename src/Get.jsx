import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";


function Get() {
    const [posts, setPost] = useState([]);


    useEffect(() => {
        axios.get("https://backend-skillup.herokuapp.com/9").then((response) => {
            setPost(response.data.data);
            console.log(response.data)
        });
        
    }, []);


    return (
        <div className="get">
            <h1>My page</h1>

            {posts.map((post) =>(
                <div className="preview" key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <p>{post.userId}</p>
                </div>
            ))}
        </div>
    );
}

export default Get;
