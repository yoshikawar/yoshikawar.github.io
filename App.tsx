import { useEffect, useState } from 'react';
import './App.css'
import MovieCard from "./MovieCard.tsx";

type Movie = {
  id: string;
  original_title: string;
  poster_path: string;
  overview: string;
}

type MovieJson = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: string;
  original_languege: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

function App() {
  //Javascript

  const [keyword, setkeyword] = useState("");
  const [movieList, setMovieList] = useState<Movie[]>([]);

  const fatchMovieList = async() => {
    let url = "";
    if (keyword) {
      url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=ja&page=1`
    }
    else{
      url = "https://api.themoviedb.org/3/movie/popular?language=ja&page=1";
    }
    const response = await fetch(url,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      }
    );

    const data = await response.json();
    setMovieList(data.results.map((movie: MovieJson) => ({
      id: movie.id,
      original_title: movie.original_title,
      overview: movie.overview,
      poster_path: movie.poster_path,
    })));
  };
 
  useEffect (() => {
    fatchMovieList();
  }, [keyword]);

  const heroTitle = "君の名は。";
  const heroYear = 2016;
  const heroOverview = "1,000年に1度のすい星来訪が、1か月後に迫る日本。山々に囲まれた田舎町に住む女子高生の三葉は、町長である父の選挙運動や、家系の神社の風習などに鬱屈（うっくつ）していた。それゆえに都会への憧れを強く持っていたが、ある日彼女は自分が都会に暮らしている少年になった夢を見る。夢では東京での生活を楽しみながらも、その不思議な感覚に困惑する三葉。一方、東京在住の男子高校生・瀧も自分が田舎町に生活する少女になった夢を見る。やがて、その奇妙な夢を通じて彼らは引き合うようになっていくが……。";
  const heroImage = "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/yLglTwyFOUZt5fNKm0PWL1PK5gm.jpg"


  return ( //HTML
     <div>
      <section className="hero-section">
        {heroImage && (
          <>
            <img className="hero-section-bg" src={heroImage} alt={heroTitle} />
            <div className="hero-section-gradient" />
          </>
        )}
        <div className="hero-section-content">
          <h1 className="hero-section-title">{heroTitle}</h1>
          <div className="hero-section-badges">
            <span className="hero-section-badge">{heroYear}</span>
          </div>
          {heroOverview && (
            <p className="hero-section-overview">{heroOverview}</p>
          )}
          <div className="hero-section-actions">
            <button className="hero-section-btn hero-section-btn-primary">
              <span>▶ Play</span>
            </button>
            <button className="hero-section-btn hero-section-btn-secondary">
              <span>More Info</span>
            </button>
          </div>
        </div>
      </section>
      <section className="movie-row-section">
        <h2 className="movie-row-title">
          {keyword ? `「${keyword}」の検索結果` : "人気映画"}
        </h2>
        <div className="movie-row-scroll">
          {movieList.map((movie) => (
            <MovieCard id = {movie.id} poster_path = {movie.poster_path} original_title = {movie.original_title} />
          ))}
        </div>
      </section>
      <div className="app-search-wrap">
        <input
          type="text"
          className="app-search"
          placeholder="映画タイトルで検索..."
          onChange={(e) => setkeyword(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;