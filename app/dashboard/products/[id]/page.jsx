import React from 'react';
import Image from "next/image";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
export default function SinglePageProduct() {
  return (
    <div className={styles.container}>
    <div className={styles.infoContainer}>
      <div className={styles.imgContainer}>
        <Image src="/noavatar.png" alt="" fill />
      </div>
    </div>
    <div className={styles.formContainer}>
      <form action=""className={styles.form}>
        <input type="hidden" name="id"  />
        <label>Title</label>
        <input type="text" name="title"  />
        <label>Price</label>
        <input type="number" name="price"/>
        <label>Stock</label>
        <input type="number" name="stock" />
        <label>Color</label>
        <input
          type="text"
          name="color"
          placeholder=""
        />
        <label>Size</label>
        <textarea
          type="text"
          name="size"
          placeholder=""
        />
        <label>Cat</label>
        <select name="cat" id="cat">
          <option value="kitchen">Kitchen</option>
          <option value="computers">Computers</option>
        </select>
        <label>Description</label>
        <textarea
          name="desc"
          id="desc"
          rows="10"
          placeholder=""
        ></textarea>
        <button>Update</button>
      </form>
    </div>
  </div>
  )
}
