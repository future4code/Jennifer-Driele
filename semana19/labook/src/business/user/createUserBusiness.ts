import { generateToken } from "../../services/authenticator";
import { hash}  from "../../services/hashManager";
import { generateId } from "../../services/idGeneretor";
import { CreateUserInput } from "../../model/User";
import insertUser from "../../data/user/insertUser";

export const createUserBusiness =  async (input: CreateUserInput): Promise<string>=>{
try{
     
      const { name, email, password } = input

      if (!name || !email || !password) {
       throw new Error('"name", "email" and "password" must be provided')
      }

    const id: string = generateId()
        
    const cypherPassword = await hash(input.password);
    
    await insertUser(
        id,
        input.name,
        input.email,
        cypherPassword,
       
    )

     

    const token :string = generateToken({
        id
     });

     return token;

    }catch(error){
        if(error.code === 1048){
            throw new Error("This User already exist!");
        }
    }
    return "";
}