import { StyledCardProducts } from "./styles"

export const CardProducts =  ({game_url, thumbnail, title, short_description, platform, id,genre,publisher}) => {

    return(
        <StyledCardProducts  key={id}>
              <a href={game_url} target="_blank">
                <img src={thumbnail} alt={title} />
              </a>
              <section>
              <h2>{title}</h2>
              <p>{short_description}</p>
              <h4>{publisher}</h4>
              </section>
              <div className="footer_container">
                <span>{platform}</span>
                <span>{genre}</span>
              </div>
        </StyledCardProducts>
    )
}