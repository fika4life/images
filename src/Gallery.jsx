import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './context';

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_UNSPLASH_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const { data, isPending, isError } = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(url + `&query=${searchTerm}`);
      return result.data;
    }
  });

  if (isPending)
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  if (isError)
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  if (!data || data.results.length === 0) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <>
      {data.results.length > 0 && (
        <section className="image-container">
          {data.results.map((image) => (
            <img
              src={image?.urls?.regular}
              alt={image?.alt_description}
              className="img"
              key={image.id}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default Gallery;
