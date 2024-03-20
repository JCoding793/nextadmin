
const Page = () =>{
const handleForm = async(formData)=>{
"use server"
const username = formData.get("userName");
console.log(formData  , `hey ${username}`);
}
    return (
        <div>
               <form action={handleForm}> 
               <input type="text" name="userName"/>
                <input type="text" name="lastName"/>
                <button>Send</button>
               </form>
        </div>
    )
}
export default Page;