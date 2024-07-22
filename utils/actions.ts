'use server';
import { writeFile } from "fs/promises";
import { readFile } from "fs/promises";
import { revalidatePath } from "next/cache";
//import { redirect } from "next/navigation";

type User ={
    id: string;
    firstName: string;
    lastName: string;
}

export async function createUser(prevState:any, formData: FormData) {
  "use server";
  //console.log("creating user... ⚙️");
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1500);
    });
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
const newUser: User = {firstName, lastName, id:Date.now().toString()};

try{
await saveUser(newUser);
 revalidatePath("./actions");
 //some logic.. bla bla
 return `user created successfully! ✅`
}catch(err){
  console.log(err);
  return `error creating user.. ⚠️`
};

 //redirect('/'); //don't place it inside of the try{} block
};

//Backend logic to save the user in a file
export async function fetchUsers():Promise<User[]> {
const result = await readFile('users.json',{encoding: 'utf8'});
const users = result ? JSON.parse(result):[];
return users;
}

export async function saveUser(user:User){
    const users = await fetchUsers();
    users.push(user);
    await writeFile('users.json', JSON.stringify(users));
}

export async function deleteUser(formData: FormData){
  const id = formData.get('id') as string;
  const users = await fetchUsers();
   const updatedUsers = users.filter(user => user.id !== id);
   await writeFile("users.json", JSON.stringify(updatedUsers));
   revalidatePath("./actions");

};

export async function removeUser(formData: FormData){

};