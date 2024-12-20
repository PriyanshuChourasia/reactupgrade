"use server";

// export async function updateName(prevState,queryData){

//     console.log(prevState);
//     const name = queryData.get('name');
//     if(name === "Shramana")
//     {
//         return "Name Updated";
//     }else{
//         await new Promise(resolve =>{
//             setTimeout(() => {
//                 resolve();
//             }, 2000);
//         });
//         return "Couldn't upadte name";
//     }
// }


export async function updateCartData(prevState,queryData){
    const cartID = queryData.get('cartID');
    if(cartID.includes("1"))
    {
        return {
            data:{
                result:"Cart item added"
            },
            success:true,
        }
    }else{
        await new Promise (resolve=>{
            setTimeout(() => {
                resolve()
            }, 2000);
        });
        return {
            data:{
                result:"Item cannot be added"
            },
            success:false
        };
    }
}