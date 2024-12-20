// import UpdateName from "./UpdateForm";

import { useActionState } from "react";



async function incrementVal(prevState,formData){
  return prevState +2;
}

function App() {

  const [state,formAction] = useActionState(incrementVal,0);

  console.log(state);

  return (
    <>
      {/* <UpdateName cartID={"3"} /> */}

      <div>
        {state}
      </div>
      <form>
        <button formAction={formAction}>Increase value</button>
      </form>
    </>
  )
}

export default App
