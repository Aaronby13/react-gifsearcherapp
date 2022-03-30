import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Gif } from './Gif';

export const GifGrid = ({category}) => {

    const{data:images,loading} = useFetchGifs(category);

  return (
      <>
        <h3>{category}</h3>  

        {loading && <p>Loading...</p>}
        
        <div className="card-grid">
                {
                images.map(img=>
                    <Gif {...img} key={img.id} />
                    )
                }
        </div>
      </>
  )
}
