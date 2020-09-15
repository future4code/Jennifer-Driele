export const goBack = (history) => {
    history.goBack();
  };
  
  export const goToLoginPage = (history) => {
   history.push("/login");
  };
  
  
  export const goToCreatePage = (history) => {
    history.push("/CriarTrip");
   };
   export const goToTripListPage = (history) => {
    history.push("/Trip");
   };

   export const goToDetailsPage = (history) => {
    history.push("/Detalhes");
   };

   export const goToFormPage = (history) => {
    history.push("/Cadastro");
   };
  
  export const goToHomePage = (history) => {
    history.push("/");
  };
  