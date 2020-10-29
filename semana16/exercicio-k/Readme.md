### EXERCÍCIO 1

a-) Quando usamos o método raw, ele nos permite que enviemos uma query para o banco de dados usando a linguagem SQL diretamente.Ela fará uma comunicação externa com o banco. ela retorna uma promisse com o resultado.


b-)
 async function searchActorByName(
   name: string
):Promise<any> {
   try {
      const result = await connection
         .select("*")
         .from("actor")
         .where("name", "LIKE", `%${name}%`)

      console.log(result)

      return result
   } catch (error) {
      console.log(error)
      return []
   }
}

c-)

### EXERCÍCIO 2

a-)const updateActor = async (id: string, salary: number): Promise<void> => {
  const result await connection
    .update('Actor')
     .set(salary: salary,) 
     .where("id", id);
};

b-)const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
}; 
