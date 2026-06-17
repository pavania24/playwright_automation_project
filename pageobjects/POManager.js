import { HomePage } from './HomePage'
import {RegistrationPage} from './RegistrationPage'
import {LoginPage} from './LoginPage'


export class POManager
{
    constructor(page)
    {    
        this.page=page
        this.homepage=new HomePage(this.page)//created a object of Homepage
        this.regpage=new RegistrationPage(this.page)
        this.loginpage=new LoginPage(this.page)
    }

    getHomePage()//this method is called in TCregister.spec.js
    {
        return this.homepage
    }

    getRegistrationPage()
    {
        return this.regpage
    }

    getLoginPage()
    {
        return this.loginpage
    }
}

