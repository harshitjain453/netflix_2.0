
import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'
const useMovieTrailerVideo=(movieId)=>{
    const dispatch = useDispatch();
   
    const fetchTrailerVideo = async () => {

        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
        const json = await response.json();
        console.log(json);
        const filterData = json.results.filter(trailer => trailer.type === "Trailer");
        const Trailer= filterData ? filterData[0] : json.results[0]
        console.log(filterData);
        dispatch(addTrailerVideo(Trailer));


    }
    useEffect(() => {
        fetchTrailerVideo();
    }, [])
}
export default useMovieTrailerVideo;