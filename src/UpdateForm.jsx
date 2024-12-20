import { useActionState } from "react";
import { updateCartData } from "./action";

function UpdateName({ cartID }) {

    const [formState,submitAction,isPending] = useActionState(updateCartData,{});

  return (
    <form action={submitAction}>
      <input type="text" name="cartID" defaultValue={cartID} />
      <button type="submit" disabled={isPending}>
        Update
      </button>
      {/* {isPending ? "Loading...." : message} */}
      {
        isPending ?
        "Loading" 
        :
        formState.success === true ?
        formState.data?.result
        :
        formState.data?.result
      }
    </form>
  );
}


export default UpdateName;