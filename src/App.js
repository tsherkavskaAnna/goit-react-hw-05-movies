import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from 'components/Container';
import AppBar from 'components/AppBar/AppBar';
import Loader from 'components/Loader/Loader.js';

const HomePage = lazy(() => import('./pages/HomePage/Home.jsx'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/Movies.jsx'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetails.jsx')
);
const Cast = lazy(() => import('./pages/CastPage/Cast.jsx'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews.jsx'));
const NotFoundPage = lazy(() => import('./pages/NoPage.jsx'));

const App = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          <Route />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
