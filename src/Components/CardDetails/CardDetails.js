import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Button from "../Button/Button";
import { favIc } from "../svg";
import "./cardDetails.css";

const CardDetails = () => {
    const [movie, setMovie] = useState({});
    const [favor, setFavor] = useState(false)
    const params = useParams();
    const navigate = useNavigate();
    const id = params.id;

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=40b9cd171d9532635ec61365b799928f`
            )
            .then((response) => {
                setMovie(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                error.message == "Request failed with status code 404"
                    ? navigate("movies/*")
                    : console.log(error);
            });
        console.log(id);
    }, []);

    const favAdding = (e) => {
         
        setFavor(prevState => ({
            favor: !prevState.favor
        }))

        if(favor.favor){
            (e.target.style.fill = "red")
        }else{
            e.target.style.fill = "white"
        }

        console.log(favor)    
        console.log(e)    
        // setFavor({favor : !favor})
    }

return (
    <div className="cardDetailsContainer">
        <div className="cardDetailstextContainer">
            {/* <Button
                HBC={() => favAdding}
                w="50px"
                br="50%"
                name={favIc}
                bgColor="rgba(20, 92, 92, 0.76)"
                // fav={favor}
            /> */}
            <span className="CardDetailsFavIc" onClick={favAdding}>{favIc}</span>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>
                <b>Type:</b> {movie.adult ? "Adult" : "Family"}
            </p>
            <p>
                <b>Releade Date:</b> {movie.release_date}
            </p>
            <p>
                <b>Language:</b>{" "}
                {movie.original_language == "en" ? "English" : "Forign"}
            </p>
        </div>
        <div className="sideImgeContainer">
            <img
                className="sideImge"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
            />
        </div>
    </div>
);
};
export default CardDetails;
