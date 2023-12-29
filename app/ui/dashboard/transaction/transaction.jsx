import styles from './transaction.module.css';
import Image from 'next/image';
import userImage from '../../../../public/noavatar.png';

const Transactions = () =>{
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}><Image src={userImage} alt="not found.." width={40} height={40} className={styles.user_image} />John Doe</div>
                            
                        </td>
                        <td> <span className={`${styles.status} ${styles.pending}`}>Pending</span></td>
                        <td>
                            14.02.2024
                        </td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}><Image src={userImage} alt="not found.." width={40} height={40} className={styles.user_image} />John Doe</div>
                            
                        </td>
                        <td> <span className={`${styles.status} ${styles.done}`}>Done</span></td>
                        <td>
                            14.02.2024
                        </td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}><Image src={userImage} alt="not found.." width={40} height={40} className={styles.user_image} />John Doe</div>
                            
                        </td>
                        <td> <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span></td>
                        <td>
                            14.02.2024
                        </td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}><Image src={userImage} alt="not found.." width={40} height={40} className={styles.user_image} />John Doe</div>
                            
                        </td>
                        <td> <span className={`${styles.status} ${styles.pending}`}>Pending</span></td>
                        <td>
                            14.02.2024
                        </td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}><Image src={userImage} alt="not found.." width={40} height={40} className={styles.user_image} />John Doe</div>
                            
                        </td>
                        <td> <span className={`${styles.status} ${styles.done}`}>Done</span></td>
                        <td>
                            14.02.2024
                        </td>
                        <td>$3.200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Transactions;