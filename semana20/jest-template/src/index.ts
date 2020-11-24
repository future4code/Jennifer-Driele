import { User, validateEmptyProperties} from "./validateEmptyProperties";


    // validateEmptyProperties({
    //     user:"Jennifer",
    //     balance:30
    // })

    function testOtherFunction(): string {

        const successCase = validateEmptyProperties({
           name: "Jennifer",
           balance: 100
        })
     
        const failCase = validateEmptyProperties({
           name: "",
           balance: 0
        })
     
        if (!successCase. isValid) {
           return "Function doesn`t work"
        }
     
        if (failCase.errors.length !== 2) {
           return "Function doesn`t work"
        }
     
        if (failCase.isValid) {
           return "Function doesn`t work"
        }
     
        return "Congratulations, your function works!"
     }
     


// function performPurchase(user:User , value: number): User | undefined {
//      validateEmptyProperties({
//         name: "Astrodev",
//         balance: 100
       
//      })
  
//     if(user.balance >=value) {
// 		return {
// 			...user,
// 			balance: user.balance - value		
// 		}
// 	}
// 	return undefined
// }
//     console.log(performPurchase)	
   