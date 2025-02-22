import React from 'react'
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";
import { addUser } from '@/app/lib/action';
export default function AddUser() {
  return (
    <div className={styles.container}>
    <form action={addUser} className={styles.form}>
      <input type="text" placeholder="username" name="userName" required />
      <input type="email" placeholder="email" name="emailId" required />
      <input
        type="password"
        placeholder="password"
        name="password"
        required
      />
      <input type="phone" placeholder="phone" name="phone" />
      <select name="isAdmin" id="isAdmin">
        <option value={false}>
          Is Admin?
        </option>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
      <select name="isActive" id="isActive">
        <option value={true}>
          Is Active?
        </option>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
      <textarea
        name="address"
        id="address"
        rows="16"
        placeholder="Address"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}
