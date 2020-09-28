const[candidatesObject,setCandidatesObject]= useRequestData

console.log(candidatesObject)
console.log("nome:", candidatesObject.name)
const{tripName} =candidatesObject .name || {}
console.log (tripName)