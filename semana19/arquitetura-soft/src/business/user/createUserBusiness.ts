import { generateId } from "../../services/idGenerator";
import { hash } from "../../services/hashManager";
import { generateToken } from "../../services/authenticator";
import insertUser from "../../data/user/insertUser";

export const createUserBusiness =  async (input: any): Promise<string>=>{
    try{
    
    
        if (
            !input.name ||
            !input.email ||
            !input.password ||
            !input.role
        ) {
          throw new Error('Preencha os campos "name", "email", "password e "role"')
        }
        if(input.email.indexOf("@") === -1){
            throw new Error("Invalid Email");
        }

        if(input.password.length < 6){
            throw new Error("Password must have at least 6 characters");
        }
    
        const id: string = generateId()
            
        const cypherPassword = await hash(input.password);
    
        await insertUser(
            id,
            input.name,
            input.email,
            cypherPassword,
            input.role
        )
    
         const token: string = generateToken({
            id,
            role: input.role
         });
    
         return token;
    
        }catch(error){
            if(error.code === 1048){
                throw new Error("Este usuário já existe!");
            }
        }
        return "";
    }