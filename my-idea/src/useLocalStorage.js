import { useEffect,useState } from 'react';

const useLocalStorage = ({key,defaultValue})=>{
    // setItem(keyName, keyValue)
    // localStorage.setItem("myCat", "Tom"); 
    // localStorage.getItem("myCat");
    // localStorage.removeItem("myCat");
    // localStorage.clear();

    const [value, setValue] = useState(() => {
        let currentValue;
      
        try {
          currentValue = JSON.parse(
            localStorage.getItem(key) || String(defaultValue)
          );
        } catch (error) {
          currentValue = defaultValue;
        }
      
        return currentValue;
      });

      useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
      }, [key, value]);

      return [value, setValue];
}

export default useLocalStorage;