import { deleteUser } from "@/utils/actions"

function DeleteBtn({id}:{id:string}) {
  return (
    <form action={deleteUser}>
        <input type="hidden" name="id" value={id} />
      <button className="bg-red-500 text-white text-xs rounded p-2" type="submit">
        delete
      </button>
    </form>
  )
}

export default DeleteBtn
