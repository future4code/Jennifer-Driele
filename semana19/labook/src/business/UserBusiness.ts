import userDatabase from "../data/UserDatabase";
import { CreateUserInput, User, CreateUserOutput } from "../model/User";
import { CustomError } from "../errors/CustomError";
import authenticator from "../services/authenticator";
import hashManager from "../services/hashManager";
import idGenerator from "../services/idGenerator";

class UserBusiness {
   public async signup(input: CreateUserInput): Promise<string> {
      try {
         if (
            !input.name ||
            !input.email ||
            !input.password 
            
         ) {
           throw new CustomError(406,'Preencha os campos "name", "email" e "password"')
         }

         const id: string =idGenerator.generateId()

         const cypherPassword = await hashManager.hash(input.password);

         const newUser: User = new User(
            id,
            input.name,
            input.email,
            cypherPassword,
            
         )

         await userDatabase.signup(newUser)

         let output: CreateUserOutput;

         const token = authenticator.generateToken({
            id,
         
         });

         return token;

      } catch (error) {

         if (error.sqlMessage.includes("Duplicate entry")) {
            throw new CustomError(409, "Este usuário já existe!");
         }

         throw new CustomError(400, error.sqlMessage || error.message);
      }

   }
}

export default new UserBusiness()