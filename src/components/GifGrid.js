import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


    const {data: images, loading} = useFetchGifs(category);

    /* const [images, setimages] = useState([]);
    useEffect( () => {
        getGifs(category)
        .then(setimages);
    }, [category]) */

    return (
        <>
        <h3 className = 'animate__bounceInDown'> { category } </h3>
      
        {loading && <p>Loading</p>}

       { <div className = 'card-grid'>
               {
                   images.map(img => (
                       <GifGridItem
                       key = {img.id}
                       {...img}
                       />
                   ))
               }
        </div>}
        </>
    )
}
