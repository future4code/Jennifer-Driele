import { User, validateEmptyProperties} from "./validateEmptyProperties";


    // validateEmptyProperties({
    //     user:"Jennifer",
    //     balance:30
    // })


function performPurchase(user: , value: number): User | undefined {
     validateEmptyProperties({
        name: "Astrodev",
        balance: 100
       
     })
  
    if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}
    console.log(performPurchase)	
   