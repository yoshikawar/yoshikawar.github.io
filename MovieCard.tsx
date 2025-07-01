import { Link } from "react-router";
import "./App.css"

type Props = {
    id: string,
    poster_path: string;
    original_title: string;
}

const MovieCard = (props: Props) => {

    const {id, poster_path, original_title} = props;
    return (
        <Link to={`/movies/${id}`} key={id} className="movie-card">
            <div className="movie-card__imgwrap">
                <img
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}
                    alt={original_title}
                    className="movie-card__image"
                />
                <div className="movie-card__overlay">
                    <h3 className="movie-card__title">{original_title}</h3>
                </div>
            </div>
        </Link>
    )
};

export default MovieCard