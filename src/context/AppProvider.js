import axios from "../utils/axios.config";
import React, { createContext, useContext, useEffect, useState } from 'react';
 

const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};
 
export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
   
    useEffect(() => {
        const getData = async () => {
            try {

                const response = await axios('api/application');
                const results =  response
                setLoading(false)
                setData(results?.data);
                setError(false) 

            } catch (error) {
                setLoading(false)
                setError(false)
                setError(error)
            }
        }
        if(!data.name){
            getData();
        }

    }, [data]);

  return (
    <AppContext.Provider value={{ data, loading, error }}>
      {children}
      
    </AppContext.Provider>
  );
};
