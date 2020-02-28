# movieQL

Create GraphQL movie API based on yts.mx APIs.
YTS API Documentation : https://yts.mx/api

Movie type has
  id: int
  title: string
  cover img: string
  rating: float
  
Querys
  movie(id: Int!) -> get movie by id
  movies(limit: Int, rating: Float) -> get movies, limit is count, rating is minimum rating.
  suggestion(id : Int!) -> get suggested movies by id.
