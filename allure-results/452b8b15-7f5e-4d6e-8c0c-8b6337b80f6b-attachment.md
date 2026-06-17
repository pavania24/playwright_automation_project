# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TCregister.spec.js >> registration
- Location: tests/TCregister.spec.js:55:5

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
            - 'row "Last Name: Last name is required." [ref=e55]':
              - cell "Last Name:" [ref=e56]
              - cell [ref=e57]:
                - textbox [ref=e58]
              - cell "Last name is required." [ref=e59]
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
            - 'row "Phone #: 12345" [ref=e80]':
              - 'cell "Phone #:" [ref=e81]'
              - cell "12345" [ref=e82]:
                - textbox [ref=e83]: "12345"
              - cell [ref=e84]
            - 'row "SSN: 12345" [ref=e85]':
              - cell "SSN:" [ref=e86]
              - cell "12345" [ref=e87]:
                - textbox [ref=e88]: "12345"
              - cell [ref=e89]
            - row [ref=e90]:
              - cell [ref=e91]
            - 'row "Username: Testers1" [ref=e92]':
              - cell "Username:" [ref=e93]
              - cell "Testers1" [ref=e94]:
                - textbox [ref=e95]: Testers1
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
  1  | //import { test, expect } from '@playwright/test'
  2  | //import { HomePage } from '../pageobjects/HomePage'
  3  | //import { RegistrationPage } from '../pageobjects/RegistrationPage'
  4  | import { POManager } from '../pageobjects/POManager'
  5  | //import testdata from '../utils/parabank.json' assert {type:'json'}
  6  | import { customtest as test, expect } from '../fixtures/testfixture'
  7  | 
  8  | 
  9  | //test('TCregister', async ({ page }) => 
  10 | //{
  11 | //    const homepage = new HomePage(page)
  12 | //    await homepage.goTo()
  13 | //    await homepage.clickOnRegisterLink()
  14 | //    const registerpage = new RegistrationPage(page)
  15 | //    await registerpage.registerUser('ravi', 'peter', 'delhi', 'saket', 'delhi', '110011', '12234', '34345', 'javac', 'abcd')
  16 | //    registerpage.clickOnRegisterbutton()
  17 | //
  18 | //    await page.waitForURL('https://parabank.parasoft.com/parabank/register.htm')
  19 | //    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
  20 | //    await page.waitForTimeout(2000)
  21 | //})
  22 | 
  23 | //for (const data of testdata) 
  24 | //    {
  25 | //test('regpage ${data:username}', async ({ page }) => 
  26 | //{
  27 | //    const poManager=new POManager(page)
  28 | //    const homepage=poManager.getHomePage()//point to method in POManager.js
  29 | //     homepage.goTo()
  30 | //     homepage.clickOnRegisterLink()
  31 | //
  32 | //    const registerpage=poManager.getRegistrationPage()
  33 | //    await registerpage.registerUser(
  34 | //        data.firstname,
  35 | //        data.lastname,
  36 | //        data.address,
  37 | //        data.city,
  38 | //        data.state,
  39 | //        data.zipcode,
  40 | //        data.phonenumber,
  41 | //        data.ssn,
  42 | //        data.username,
  43 | //        data.password,
  44 | //        data.confirmpassword
  45 | //    )
  46 | //    registerpage.clickOnRegisterbutton()
  47 | //
  48 | //    await page.waitForURL('https://parabank.parasoft.com/parabank/register.htm')
  49 | //    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
  50 | //    await page.waitForTimeout(2000)
  51 | //})
  52 | //    }
  53 | 
  54 | 
  55 | test('registration', async ({ page, testdataForregistration }) => {
  56 |     const poManager = new POManager(page)
  57 |     const homepage = poManager.getHomePage()//point to method in POManager.js
  58 |     homepage.goTo()
  59 |     homepage.clickOnRegisterLink()
  60 | 
  61 | 
  62 |     const registerpage = poManager.getRegistrationPage()
  63 |     await registerpage.registerUser(
  64 |         testdataForregistration.firstname,
  65 |         testdataForregistration.lastname,
  66 |         testdataForregistration.address,
  67 |         testdataForregistration.city,
  68 |         testdataForregistration.state,
  69 |         testdataForregistration.zipcode,
  70 |         testdataForregistration.phonenumber,
  71 |         testdataForregistration.ssn,
  72 |         testdataForregistration.username,
  73 |         testdataForregistration.password,
  74 |         testdataForregistration.confirmpassword
  75 |     )
  76 |     registerpage.clickOnRegisterbutton()
  77 | 
  78 | 
  79 |     await page.waitForURL('https://parabank.parasoft.com/parabank/register.htm')
> 80 |     await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
     |                 ^ TypeError: (0 , _testfixture.expect) is not a function
  81 |     await page.waitForTimeout(2000)
  82 | })
  83 | 
  84 | 
  85 | 
  86 | 
  87 | 
```