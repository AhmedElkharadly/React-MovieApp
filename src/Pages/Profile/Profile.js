import React from 'react'
import Card from '../../Components/Card/Card';
import './profile.css'
import { useSelector, useDispatch } from 'react-redux';
import {splcieFavorites} from '../../store/actions/favorites'

const Profile = () =>  {
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favorite.favorites);
  const removeFavourite = (moviesData) => {
    ;
  };
  return (
    
    <div className='profileContainer'>
        {
          favoriteList?.map((mov, index) => {
            return (
              <Card
              HBCC={() => dispatch(splcieFavorites(mov))}
              moveiesData={mov}
              id={mov?.id}
              key={mov?.id}
              pName={mov?.title}
              pCategory={mov?.adult}
              rate={mov?.vote_average}
              imgSrc={`https://image.tmdb.org/t/p/w500/${mov?.poster_path}`}
              pBgColor="rgb(160, 137, 95, 0.9)"
            />
            )
        })
      }
      <div style={{height:"80vh"}}></div>
    </div>
    
)
}

export default Profile;
