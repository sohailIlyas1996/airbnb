// pages/index.js

import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';

function Index({ movies, error }) {
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movies || !movies.results) {
    return <div>Loading...</div>;
  }

  const movieList = movies.results;

  return (
    <>
      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='py-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {movieList.map((movie) => (
              <div key={movie.id} className='bg-white p-4 shadow-md rounded-md'>
                <Image
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  width={300}
                  height={200}
                  className='object-cover mb-2 rounded-md'
                />
                <h3 className='text-xl font-semibold mb-2'>{movie.title}</h3>
                <p className='text-gray-500'>{movie.release_date}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=0d21a2ea7d019273d8fcb9cf56ee9e23');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const movies = await response.json();

    return {
      props: {
        movies,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        error: 'Failed to fetch data',
      },
    };
  }
}

export default Index;
