"use client"
import React from 'react'
import styles from "@/app/ui/dashboard/search/search.module.css";
import { usePathname , useRouter , useSearchParams } from 'next/navigation';
import { MdSearch } from 'react-icons/md'
import { useDebouncedCallback } from "use-debounce";
export default function Search({placeholder}) {
  const searchParams = useSearchParams();
  
  const {replace} = useRouter();
  const pathname = usePathname();
  
  
  const handleSearch = useDebouncedCallback((e)=>{
  const parms = new URLSearchParams(searchParams);
  if(e.target.value){
   e.target.value.length > 2 && parms.set("q" , e.target.value)
    
  }else{
    parms.delete("q")
  }
  replace(`${pathname}?${parms}`)
  },300)
  return (
    <div className={styles.container}>
      <MdSearch />
      <input type = "text"  placeholder={placeholder}  className={styles.input} onChange={handleSearch}/>
    </div>
  )
}
