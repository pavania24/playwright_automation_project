import { POManager } from '../pageobjects/POManager'
import { customtest as test, expect } from '../fixtures/testfixture'

test('login',async({page,testdataForregistration})=>
{
    const poManager=new POManager(page)
    const homepage=poManager.getHomePage()
    homepage.goTo()
  

    const loginpage=poManager.getLoginPage()
    await loginpage.clickOnLoginBtn(
         testdataForregistration.username,
         testdataForregistration.password
    )

//await page.waitForURL('https://parabank.parasoft.com/parabank/register.htm')
//await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
await page.waitForTimeout(2000)
})