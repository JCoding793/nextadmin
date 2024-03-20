"use client";
import React from 'react'
import styles from "@/app/ui/dashboard/pagination/pagination.module.css";
import {useRouter , useSearchParams , usePathname} from  "next/navigation"
export default function Pagination({count}) {
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const pathname = usePathname();
  const page = searchParams.get("page") || 1;
  const parms = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;
  const hasPrev = ITEM_PER_PAGE * (parseInt(page) -1 ) > 0 ;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) -1) + ITEM_PER_PAGE < count;
  const handleChangePage= (type)=>{
  type === "prev" ? parms.set("page", parseInt(page) -1) : parms.set("page" , parseInt(page)+1);
  replace(`${pathname}?${parms}`)
  }
  return (
    <div className={styles.container}>
       <button className={styles.button} disabled= {!hasPrev} onClick={()=>{handleChangePage("prev")}}>Prevous</button>
       <button className={styles.button} disabled= {!hasNext} onClick={()=>{handleChangePage("next")}}>Next</button>
    </div>
  )
}
