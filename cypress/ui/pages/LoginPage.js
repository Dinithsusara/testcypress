export class LoginPage {

    email_input() {
       return cy.get("#formGroupEmail");
    }
    password_input() {
       return cy.get("#formGroupPassword")

    }
    login_button() {
       return cy.get("[type='submit']");

    }

    logo(){

        return cy.get("[src='/assets/sc-logo-BJkKU2tD.png']");
    }

    all_session_text(){
        return cy.get("[id='controlled-tab-example-tab-upcoming']");
    }

    email_input_text(){
        return cy.xpath("//span[text()='EMAIL']")
    }





    addUsername(username) {

        this.email_input().type(username);

    }

    addPassword(password) {
        this.password_input().type(password);
    }


    clickLoginButton() {

        this.login_button().click();
    }

    checkLogoVisible(){

       return this.logo().should('be.visible');
    }

 



}