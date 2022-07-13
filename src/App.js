import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Container from 'components/Container/Container.js';
import AppBar from 'components/AppBar/AppBar';
import Loader from 'components/Loader/Loader.js';

const HomePage = lazy(() => import('./pages/HomePage/Home.jsx'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/Movies.jsx'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetails.jsx')
);
const Cast = lazy(() => import('./pages/CastPage/Cast.jsx'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews.jsx'));

const App = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} replace={true} />
            <Route path="reviews" element={<Reviews />} replace={true} />
          </Route>
          <Route path="*" element={<Navigate to="/" replase />} />
          <Route />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
