import  {useState,useEffect} from 'react';

 const useProjects = async (url) => {

    const [data,setData] =  useState({data: null, status:null});

    useEffect( ()=>{
        const getApi =  async (url) =>{
            let dataf=  await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
           return dataf.json();
        }

        
      getApi(url).then(response => {
            setData({data:response, status: 200});
      }).catch(err=> {
            setData({ data: err, status: 404 });
        })
            
        
    },[url]);

    return data;
}

export default useProjects;