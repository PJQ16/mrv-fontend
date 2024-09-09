import { create } from "zustand";
import axios from "axios";
const registerStore = (set) => ({
    data:[],
    isLoading:true,
    error:false,
    errorMsg:'',
    getAddressData:async()=>{
        try{
        set({isLoading: true,error:false,errorMsg:''});
        const res = await axios.get('https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json')
        setTimeout(()=>{
            set({isLoading:false, data:res.data});
        },1500);
        }catch(err){
            set({err:true,errorMsg:err.message,isLoading:false});
        }
    }

});
const useStore = create(registerStore);
export default useStore