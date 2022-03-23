import { useState,useEffect } from "react"
import { getGifs } from '../helpers/getGifs';

//* Custom Hook:

export const useFetchGifs = (category) =>{

    const [state, setState] = useState({
        data:[],
        loading:true
    });

    //INFO: Useeffect permite que el código solo se ejecute al renderizar el componente por primera vez. 

     useEffect(()=>{
         getGifs( category )
         .then (imgs =>{
            setTimeout(()=>{            
                setState({
                data:imgs,
                loading:false
               })
            },3000)
         })
     },[ category ])

    return state;

}