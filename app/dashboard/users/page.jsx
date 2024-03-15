import styles from "@/app/ui/dashboard/users/users.module.css"
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image"
import Link from 'next/link';
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchUser } from "@/app/lib/data";
const Userpage = async() => {
  const users = await fetchUser();
  console.log(users);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search for user"}/>
        <Link href="/dashboard/users/add">
        
        <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Create At</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.user}><Image src="" alt="" width={40} height={40} className={styles.userImage}/>Jone Doe</div>
              </td>
              <td>john@gmail.com</td>
              <td>12.4.2023</td>
              <td>Admin</td>
              <td>active</td>
              <td>
                <div className={styles.buttons}>
                   <Link href={"/"}>
                  <button className={`${styles.button} ${styles.veiw}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </div>
               

              </td>
            </tr>
          </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default Userpage