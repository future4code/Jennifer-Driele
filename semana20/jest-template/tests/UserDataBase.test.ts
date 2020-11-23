import { BaseDatabase } from "../src/data/BaseDatabase"
import UserDatabase from "../src/data/UserDatabase"
import {  User, validateEmptyProperties, ValidateEmptyPropertiesOutput } from "../src/validateEmptyProperties"



describe("valideta empty properties", () =>{

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 100
        }
    
        const result :ValidateEmptyPropertiesOutput= validateEmptyProperties(
            50
        )
        
        expect(result).toEqual({
            
            balance: 50
        })
    })
})
