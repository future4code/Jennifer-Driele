  export const goBack = (history) => {
    history.goBack();
  };
  
  export const goToLoginPage = (history) => {
   history.push("/login");
  };

  export const goToSignUpPage = (history) => {
    history.push("/signup");
   };
  
  export const goToCreatePage = (history) => {
    history.push("/trips-create");
   };
   export const goToTripListPage = (history) => {
    history.push("/list");
   };

   export const goToDetailsPage = (history,id) => {
    history.push(`details/${id}`);
   };

   export const goToFormPage = (history) => {
    history.push("/application-form");
   };
  
  export const goToHomePage = (history) => {
    history.push("/");
  };
  