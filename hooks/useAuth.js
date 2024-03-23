
import useSWR, { mutate } from 'swr';
import fetcher from '../lib/fetcher';

export const useAuth =(path)=>{
    const {mutate}= useSWR(path)
    const Auth = async(data)=>{    
    const response = await fetcher(path,data)

    if(!response.ok){
      return response
    }
    if(response){
        return response
     }
    mutate()
  
    }
    
 return Auth
}