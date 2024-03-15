import React from 'react'
import styles from "@/app/ui/dashboard/search/search.module.css"
import { MdSearch } from 'react-icons/md'

export default function Search({placeholder}) {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input type = "text"  placeholder={placeholder}  className={styles.input} />
    </div>
  )
}
