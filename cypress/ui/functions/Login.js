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
    return this.loginpage.getAllSessionText();



}
}