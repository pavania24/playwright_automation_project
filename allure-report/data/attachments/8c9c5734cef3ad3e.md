# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TCcombine.spec.js >> testNew >> @smokeregistration
- Location: tests/TCcombine.spec.js:9:9

# Error details

```
TypeError: (0 , _testfixture.expect) is not a function
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=e27]:
      - generic [ref=e28]:
        - heading "Customer Login" [level=2] [ref=e29]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - paragraph [ref=e32]: Username
            - textbox [active] [ref=e34]
            - paragraph [ref=e35]: Password
            - textbox [ref=e37]
            - button "Log In" [ref=e39] [cursor=pointer]
          - paragraph [ref=e40]:
            - link "Forgot login info?" [ref=e41] [cursor=pointer]:
              - /url: lookup.htm
          - paragraph [ref=e42]:
            - link "Register" [ref=e43] [cursor=pointer]:
              - /url: register.htm
      - generic [ref=e44]:
        - heading "Signing up is easy!" [level=1] [ref=e45]
        - paragraph [ref=e46]: If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.
        - table [ref=e48]:
          - rowgroup [ref=e49]:
            - 'row "First Name: First name is required." [ref=e50]':
              - cell "First Name:" [ref=e51]
              - cell [ref=e52]:
                - textbox [ref=e53]
              - cell "First name is required." [ref=e54]
            - 'row "Last Name: Talk" [ref=e55]':
              - cell "Last Name:" [ref=e56]
              - cell "Talk" [ref=e57]:
                - textbox [ref=e58]: Talk
              - cell [ref=e59]
            - 'row "Address: address1" [ref=e60]':
              - cell "Address:" [ref=e61]
              - cell "address1" [ref=e62]:
                - textbox [ref=e63]: address1
              - cell [ref=e64]
            - 'row "City: San Jose" [ref=e65]':
              - cell "City:" [ref=e66]
              - cell "San Jose" [ref=e67]:
                - textbox [ref=e68]: San Jose
              - cell [ref=e69]
            - 'row "State: California" [ref=e70]':
              - cell "State:" [ref=e71]
              - cell "California" [ref=e72]:
                - textbox [ref=e73]: California
              - cell [ref=e74]
            - 'row "Zip Code: 12345" [ref=e75]':
              - cell "Zip Code:" [ref=e76]
              - cell "12345" [ref=e77]:
                - textbox [ref=e78]: "12345"
              - cell [ref=e79]
            - 'row "Phone #: 1234567898" [ref=e80]':
              - 'cell "Phone #:" [ref=e81]'
              - cell "1234567898" [ref=e82]:
                - textbox [ref=e83]: "1234567898"
              - cell [ref=e84]
            - 'row "SSN: 1234512345" [ref=e85]':
              - cell "SSN:" [ref=e86]
              - cell "1234512345" [ref=e87]:
                - textbox [ref=e88]: "1234512345"
              - cell [ref=e89]
            - row [ref=e90]:
              - cell [ref=e91]
            - 'row "Username: Testers" [ref=e92]':
              - cell "Username:" [ref=e93]
              - cell "Testers" [ref=e94]:
                - textbox [ref=e95]: Testers
              - cell [ref=e96]
            - row "Password:" [ref=e97]:
              - cell "Password:" [ref=e98]
              - cell [ref=e99]:
                - textbox [ref=e100]
              - cell [ref=e101]
            - row "Confirm:" [ref=e102]:
              - cell "Confirm:" [ref=e103]
              - cell [ref=e104]:
                - textbox [ref=e105]
              - cell [ref=e106]
            - row "Register" [ref=e107]:
              - cell [ref=e108]
              - cell "Register" [ref=e109]:
                - button "Register" [ref=e110] [cursor=pointer]
  - generic [ref=e112]:
    - list [ref=e113]:
      - listitem [ref=e114]:
        - link "Home" [ref=e115] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e116]:
        - link "About Us" [ref=e117] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e118]:
        - link "Services" [ref=e119] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e120]:
        - link "Products" [ref=e121] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e122]:
        - link "Locations" [ref=e123] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e124]:
        - link "Forum" [ref=e125] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e126]:
        - link "Site Map" [ref=e127] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e128]:
        - link "Contact Us" [ref=e129] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e130]: © Parasoft. All rights reserved.
    - list [ref=e131]:
      - listitem [ref=e132]: "Visit us at:"
      - listitem [ref=e133]:
        - link "www.parasoft.com" [ref=e134] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { POManager } from '../pageobjects/POManager'
  2  | import { customtest as test, expect } from '../fixtures/testfixture'
  3  | 
  4  | 
  5  | 
  6  | //test.describe.serial('testNew', () => //serially tests will run, if test1 fails then stops executing other tests
  7  | test.describe.parallel('testNew', () =>    
  8  | {
  9  |     test('@smokeregistration', async ({ page, testdataForregistration }) => {
  10 |         const poManager = new POManager(page)
  11 |         const homepage = poManager.getHomePage()//point to m
  12 |         homepage.goTo()
  13 |         homepage.clickOnRegisterLink()
  14 | 
  15 | 
  16 | 
  17 | 
  18 |         const registerpage = poManager.getRegistrationPage()
  19 |         await registerpage.registerUser(
  20 |             testdataForregistration.firstname,
  21 |             testdataForregistration.lastname,
  22 |             testdataForregistration.address,
  23 |             testdataForregistration.city,
  24 |             testdataForregistration.state,
  25 |             testdataForregistration.zipcode,
  26 |             testdataForregistration.phonenumber,
  27 |             testdataForregistration.ssn,
  28 |             testdataForregistration.username,
  29 |             testdataForregistration.password,
  30 |             testdataForregistration.confirmpassword
  31 |         )
  32 |         registerpage.clickOnRegisterbutton()
  33 | 
  34 |         await page.waitForURL('https://parabank.parasoft.com/parabank/register.htm')
> 35 |         await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
     |                     ^ TypeError: (0 , _testfixture.expect) is not a function
  36 |         await page.waitForTimeout(2000)
  37 |     })
  38 | 
  39 |     test('@smoke@regressionlogin', async ({ page, testdataForregistration }) => {
  40 |         const poManager = new POManager(page)
  41 |         const homepage = poManager.getHomePage()
  42 |         homepage.goTo()
  43 | 
  44 |         const loginpage = poManager.getLoginPage()
  45 |         await loginpage.clickOnLoginBtn(
  46 |             testdataForregistration.username,
  47 |             testdataForregistration.password
  48 |         )
  49 | 
  50 |         //await page.waitForURL('https://parabank.parasoft.com/parabank/register.htm')
  51 |         //await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
  52 |         await page.waitForTimeout(2000)
  53 |     })
  54 | 
  55 | })
```