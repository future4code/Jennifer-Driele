import express, {Express, Request ,Response} from'express'
import cors from 'cors'
import{countries, country} from './countries'

const app:Express = express()

app.use(express.json())
app.use(cors())

// Endpoint 1
app.get("/countries/all",(req:Request, res:Response)=>{
    res.status(200).send(countries)
    
const result = countries.map(country => ({
    id: country.id,
    name: country.name
  }))
  
  res
    .status(200).send(result)
})

//Endpoint 2
// app.get("/countries/:id", (req: Request, res: Response) => {
//     const result: country | undefined = countries.find(
//        country => country.id === Number(req.params.id)
//     )
//    if(result){ 
//     res.status(200).send(result)
//   }else{
//       res.status(404).send("Not found")
//   }
//  })

 //Endpoint 3
//  app.get("/countries/search", (req: Request, res: Response) => {
    
//     let searchedCountry: country[] = countries
//         try {
//             if(req.query.name){ 
//                 searchedCountry = searchedCountry.filter (
//                     country => country.name.includes(req.query.name as string) 
//                 )
//                 res.status(200).send(searchedCountry)
//             } 
//             if(req.query.capital){
//                 searchedCountry = searchedCountry.filter (
//                     country => country.capital.includes(req.query.capital as string)
//                 )
//                 res.status(200).send(searchedCountry)
//             } 
//             if(req.query.continent){
//                 searchedCountry = searchedCountry.filter (
//                     country => country.continent.includes(req.query.continent as string)
//                 )
//                 res.status(200).send(searchedCountry)
//                 }
//         } catch (error) {
//             res.status(404).send("Country not found")
//         }

// })

//Endpoint 4

app.put('/countries/edit/:id',(req:Request, res:Response) =>{
    let errorCode:number = 400

    try {
        if(!req.headers.authorization){
           throw new Error()
        } 
        if(!req.body.name || !req.body.capital || !req.params.id){ 
        errorCode = 400
        throw new Error()
    }
        const result: country | undefined = countries.find(
            country => country.id === Number(req.params.id)
         )
        
    if(!result){
              errorCode = 404
              throw new Error()
           }
               result.capital = req.body.capital
               result.name = req.body.name
               
               res.status(200).end()
        
    } catch (error){
        res.status(errorCode).end()
    }
})



app.listen(3003, () =>{
    console.log("Servidor pronto")
})