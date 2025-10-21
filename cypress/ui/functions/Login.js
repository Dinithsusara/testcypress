import {LoginPage} from "../pages/LoginPage";

export class Login {



    static loginpage=new LoginPage();



static  addUsername(addusername){
    this.loginpage.addUsername(addusername);


}

static addPassword(addpassword){
    this.loginpage.addPassword(addpassword);
   
}

static clickLoginButton(){
    this.loginpage.clickLoginButton();
}

static checkLogoVisible(){
    this.loginpage.checkLogoVisible();  
}


static getAllSessionText(){
    return this.loginpage.all_session_text();



}


static getEmailInputText(){

    return this.loginpage.email_input_text();

}
}