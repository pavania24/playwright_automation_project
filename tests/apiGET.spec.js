
import{request} from '@playwright/test'
import test from 'node:test'
test('apiget',async({request})=>
{

    const response=await request.get("https://parabank.parasoft.com/parabank/images/logo.gif")
    const resp=await response.json()
    console.log(resp)

})


