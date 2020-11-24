export const validateEmptyProperties = (
    input: any
  ): ValidateEmptyPropertiesOutput => {
    let errors: User[] = [];
    for (const key in input) {
      if (input[key] !== false && !input[key]) {
        errors.push({
          key,
          value: input[key],
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
   key: string;
    value: number;
  }