export const validateEmptyProperties = (
    input: any
  ): ValidateEmptyPropertiesOutput => {
    let errors: User[] = [];
    for (const name in input) {
      if (input[name] !== false && !input[name]) {
        errors.push({
          name,
          balance: input[name],
        });
      }
    }
  
    return {
      isValid: errors.length === 0,
      errors,
    };
  };
  
  export class ValidateEmptyPropertiesOutput {
     constructor(
        public isValid: boolean,
        public errors: User[]
     ){}
  }
  
 export type User = {
    name: string;
    balance: number;
  }