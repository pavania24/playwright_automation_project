export class LoginPage
{
    constructor(page)
    {
        this.page=page
        this.userName= page.locator("//input[@name='username']")
        this.password=page.locator("//input[@name='password']")
        this.loginButton=page.locator("//input[@value='Log In']")       
    }

    /**
     * Fill credentials and submit the login form.
     * Options allow waiting for navigation or for a specific selector to appear.
     * @param {string} username
     * @param {string} password
     * @param {{successSelector?: string, timeout?: number, waitForNavigation?: boolean}} [opts]
     * @returns {Promise<boolean>} resolves true when flow completes (or throws on error/timeout)
     */
    async clickOnLoginBtn(username, password, opts = {})
    {
        const { successSelector, timeout = 5000, waitForNavigation = true } = opts

        if (!username || !password) {
            throw new Error('username and password are required')
        }

        await this.userName.fill(username)
        await this.password.fill(password)

        if (waitForNavigation) {
            await Promise.all([
                this.page.waitForNavigation({ timeout }),
                this.loginButton.click()
            ])
        } else {
            await this.loginButton.click()
        }

        if (successSelector) {
            await this.page.waitForSelector(successSelector, { timeout })
        }

        return true
    }

}
