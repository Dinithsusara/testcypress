import { Login } from "../functions/Login";
import { UIConstant } from "../common/uiConstant";



describe("Sanity suite", () => {

    beforeEach(() => {

        cy.visit(UIConstant.Url);
       
    });


    it("Successful login Test", ()=>{

      
        Login.checkLogoVisible();

        Login.addUsername("dinithjayasekara5@live.com");
        Login.addPassword("Testdinith@123");
          Login.getEmailInputText().should('have.text', "EMAIL");
        Login.clickLoginButton();
        Login.getAllSessionText().should('have.text', "UPCOMING");

  


    

   



        





    });

});