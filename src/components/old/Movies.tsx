interface Props {
  data: {
    Released: string;
    Title: string;
    Poster: string;
    Director: string;
    Plot: string;
  };
}

const Movies = ({ data }: Props) => {
  return (
    <li>
      <img src={data.Poster} alt="poster do filme" />
      <h3>{data.Title}</h3>
      <div className='discriptions'>
        <span>
          <strong>Director </strong>
          {data.Director}
        </span>
        <span>
          <strong>Data de lancamento</strong> {data.Released}
        </span>
      </div>
      <p>{data.Plot}</p>
      <button>Acessar</button>
    </li>
  );
};

export default Movies;
