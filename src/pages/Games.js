// src/pages/Movie.js

import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Games.css";

export default function Movie() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;

  const poster = [
    {
      id: 1,
      title: "Avengers: Endgame",
      rate: 4.5,
      genre: "Action, Sci-Fi",
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    },
    {
      id: 2,
      title: "Parasite",
      rate: 5,
      genre: "Drama, Thriller",
      img: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    },
    {
      id: 3,
      title: "Interstellar",
      rate: 4.5,
      genre: "Sci-Fi, Adventure",
      img: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    },
  ];

  const data = [
    {
      id: 4,
      title: "The Grand Budapest Hotel",
      rate: 4,
      genre: "Comedy, Drama",
      img: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg",
    },
    {
      id: 5,
      title: "La La Land",
      rate: 4.5,
      genre: "Musical, Romance",
      img: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
    },
    {
      id: 6,
      title: "Get Out",
      rate: 4.5,
      genre: "Horror, Thriller",
      img: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg",
    },
    {
      id: 7,
      title: "Whiplash",
      rate: 4.5,
      genre: "Drama, Music",
      img: "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    },
    {
      id: 8,
      title: "The Shape of Water",
      rate: 4,
      genre: "Drama, Fantasy",
      img: "https://m.media-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
    },
    {
      id: 9,
      title: "Mad Max: Fury Road",
      rate: 4.5,
      genre: "Action, Adventure",
      img: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    },
  ];

  return (
    <>
      <p id="movies">Top Games</p>
      <div className="containerTop">
        {poster.map((item) => (
          <Fragment key={item.id}>
            <Link to={`/movie/detail/${item.id}`} className="movie-link">
              <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
            </Link>
          </Fragment>
        ))}
      </div>
      <div className="rowcoba">
        <div className="column">
          <p id="movies">All Games</p>
          {data.map((item) => (
            <Fragment key={item.id}>
              <Link to={`/movie/detail/${item.id}`} className="movie-link">
                <CardSmall
                  title={item.title}
                  img={item.img}
                  genre={item.genre}
                  size={STAR_SIZE}
                  color={STAR_COLOR}
                />
              </Link>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}