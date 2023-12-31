import { useEffect, useState } from "react";
import axios from "./axios.config";

export const useFetch = () => {

    //React useState Hooks
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    //Fetch the data when app is rendered 
    useEffect(() => {

        const getData = async () => {
            try {

                const response = await axios('api/v1/auth/admin');
                const results = await response
                setLoading(false)
                setData(results?.data?.data);
                sessionStorage.setItem('role',JSON.stringify(results?.data?.data?.role));
                setError(false) 

            } catch (error) {
                setLoading(false)
                setError(false)
                setError(error)
            }
        }
        if(!data.username){
            getData();
        }

    }, [data]);

    return {
        loading,
        data,
        error
    }
}