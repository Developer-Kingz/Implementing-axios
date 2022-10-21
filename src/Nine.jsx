import React from "react";
import "./App.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Nine() {
    const { register, handleSubmit } = useForm();
    const [errors, setErrors] = useState("");
    const [access, setAccess] = useState({
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYTFiYmI4OGItYTYzMS00NjMwLTg3MTgtMDUwZDMxMzhjMDU5IiwiaWF0IjoxNjY2MjY1OTY2fQ.onF5_3peeG9oWRoMXxiLuq4Idz1qQ9AyuNTNcmxo3j8",
        isLoggedIn: true,
    });

    const onSubmit = async (data) => {
        axios
            .post("https://backend-skillup.herokuapp.com", data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: access.token,
                },
            })
            .then((response) => {
                alert(response.data.message);
            });
    };

    return (
        <div className="post">
            <h1>Post page</h1>

            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("title", {
                        required: "Please enter your title",
                    })}
                />
                <br />
                <input
                    {...register("body", {
                        required: "Please enter your body",
                    })}
                />
                <br />
                <input
                    value={"9"}
                    hidden
                    {...register("userId", {
                        required: "Please enter your id",
                    })}
                />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default Nine;
