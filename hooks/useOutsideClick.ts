import { useEffect } from "react";

export default function useOutsideClick({ref, exceptionId, cb}: {ref: React.RefObject<HTMLElement | null>,exceptionId: string,cb: () => void}){
    useEffect(()=>{
        function handleOutsideClick(event: MouseEvent){
            const target = event.target as HTMLElement;
            if(ref?.current && !ref.current.contains(target) && target.id !== exceptionId){
                cb();
            }
        }
        document.addEventListener("mousedown", handleOutsideClick);
        return ()=>{
            document.removeEventListener("mousedown", handleOutsideClick);
        }
    },[ref, cb])
}