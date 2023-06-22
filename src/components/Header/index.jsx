import { StyledHeader } from './styles';

export const Header = ({ setInputSearch }) => {
  const searchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledHeader>
      
        <h1>Catálogo de jogos</h1>
        <form onSubmit={searchSubmit}>
          <input
            type="text"
            placeholder="Buscar por título ou gênero"
            onChange={(e) => setInputSearch(e.target.value)}
          />
        </form>
      
    </StyledHeader>
  );
};
