import { useEffect } from 'react';

const useLocalStorage = ({name,value,getName,removeName,clear})=>{
    // setItem(keyName, keyValue)
    // localStorage.setItem("myCat", "Tom"); 
    // localStorage.getItem("myCat");
    // localStorage.removeItem("myCat");
    // localStorage.clear();

    useEffect(()=>{

        name && value && localStorage.setItem(name,value);
        getName && localStorage.getItem(getname);
        removeName && localStorage.removeItem(removeName);
        clear &&  localStorage.clear()

    },[])

}

export default useLocalStorage;