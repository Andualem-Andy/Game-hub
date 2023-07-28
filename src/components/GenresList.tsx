import useGenres from "../hooks/useGenres";

export const GenersList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genres) => (
        <li key={genres.id}>{genres.name}</li>
      ))}
    </ul>
  );
};
