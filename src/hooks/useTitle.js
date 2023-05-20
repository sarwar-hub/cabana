import { useEffect } from "react";

const useTitle = title => {
    useEffect(()=>{
        document.title = `Cabana | ${title}`;
    },[title])
}
export default useTitle;