//import { BaseDatabase } from "../src/data/BaseDatabase"
import { BaseDatabase } from "../src/data/BaseDatabase"
import userDatabase from "../src/data/UserDatabase"
//import {  User, validateEmptyProperties, ValidateEmptyPropertiesOutput } from "../src/validateEmptyProperties"



describe("Create User",() =>{
    test ("Success case", async() =>{
        expect.assertions(2)
        try{
            await userDatabase.createUser(
                "124587",
                "Jennifer",
                300
            )
        const user:any = await userDatabase.getUserById("124587")
          expect(user.name).toEqual("Jennifer")
          expect(user.balance).toBe(100)
        }catch (error){

        }
    })
})

// afterAll(async () => {
//     await userDatabase.deleteUser("123456")
//     await BaseDatabase.destroyConnection()
//  })

