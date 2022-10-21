import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const [posts, setPost] = useState([]);
    const [errors, setErrors] = useState("");
    const [access, setAccess] = useState({
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYTFiYmI4OGItYTYzMS00NjMwLTg3MTgtMDUwZDMxMzhjMDU5IiwiaWF0IjoxNjY2MjY1OTY2fQ.onF5_3peeG9oWRoMXxiLuq4Idz1qQ9AyuNTNcmxo3j8",
        isLoggedIn: true,
    });

    useEffect(() => {
        axios
            .get("https://backend-skillup.herokuapp.com", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: access.token,
                },
            })
            .then((response) => {
                setPost(response.data.data);
                setErrors("");
                console.log(response.data);
            });

            
    }, []);

    return (
        <div className="home">
            {posts.map((post) => (
                <div className="preview" key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <p>{post.userId}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;
