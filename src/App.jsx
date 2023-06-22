import React, { useState, useEffect } from 'react';
import './App.css';
import { api } from './services/api';
import { Header } from './components/Header';
import { CardProducts } from './components/CardProducts';
import { LoadingPage } from './components/LoadingPage';

export const App = () => {
  const [games, setGames] = useState([]);
  const [inputsearch, setInputsearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const filterGames = games.filter(game =>
    [game.title, game.genre].some(
      value => value.toUpperCase().includes(inputsearch.toUpperCase())
    )
  );
  
  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await api.get('/api/data/', {
        headers: {
          'dev-email-address': 'gambori@gmail.com'
        }
      })
      setGames(response.data);
    } catch (error) {
      if (error.code === 'ECONNABORTED') {
        setError('O servidor demorou para responder, tente mais tarde');
      } else if (
        error.response &&
        (error.response.status === 500 ||
          error.response.status === 502 ||
          error.response.status === 503 ||
          error.response.status === 504 ||
          error.response.status === 507 ||
          error.response.status === 508 ||
          error.response.status === 509)
      ) {
        setError('O servidor falhou em responder, tente recarregar a página');
      } else {
        setError('O servidor não conseguiu responder por agora, tente voltar novamente mais tarde');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      {isLoading ? (
        <LoadingPage />
      ) : error ? (
        <div className="error_container">
          <p className="error-message">{error}</p>
        </div>
      ) : (
        <>
        <Header setInputSearch={setInputsearch}/>
        <ul className="game-list">
          {
            filterGames.map((game) => 
              <CardProducts key={game.id} {...game}/>)
          }
        </ul>
        </>
      )}
    </div>
  );
};


