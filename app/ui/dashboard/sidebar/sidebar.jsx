import MenuLink from './menuLink/menuLink';
import styles from './sidebar.module.css'
import Image from  'next/image';
import userImage from '../../../../public/noavatar.png';
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout
} from 'react-icons/md';
const menuItem = [
    {
        title: "Pages",
        list:[
            {
                id: 0,
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            },
            {
                id: 1,
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle/>
            },
            {
                id: 2,
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag/>
            },
            {
                id: 3,
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney/>
            },
            
        ]
    },
    {
    title: "Analytics",
    list:[
        {
            id: 0,
            title: "Revenue",
            path: "/dashboard/revenue",
            icon: <MdWork/>
        },
        {
            id: 1,
            title: "Reports",
            path: "/dashboard/reports",
            icon: <MdAnalytics />
        },
        {
            id: 2,
            title: "Teams",
            path: "/dashboard/teams",
            icon: <MdPeople />
        },
    ]
    },
    {
        title: "User",
        list:[
            {
                id: 0,
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings/>
            },
            {
                id: 1,
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />
            }
            
        ]
        }
]


const Sidebar = () => {
    return (
        
      <div className={styles.container}>
        <div className={styles.user}>
            <Image src={userImage} alt="not found"  width="50" height="50" className={styles.user_image} />
            <div className={styles.user_detials}>
                <span className={styles.user_name}>John Joe</span>
                <span className={styles.user_title}>Administrator</span>
            </div>
        </div>
        <ul className={styles.list}>
            {menuItem.map((item , index)=>{
                return(
                    <li key={index}>{item.title}
                      <span className={styles.cat}>{index.title}</span>
                      {item.list.map((item , index )=>{
                        return ( <MenuLink  item={item} key={index}/> )
                      })} 
                    </li>
                )
            })}
        </ul>
        <button className={styles.logout}>
            <MdLogout/>Logout</button>
      </div>
    )
  }
  
  export default Sidebar