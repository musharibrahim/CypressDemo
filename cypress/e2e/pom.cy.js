import { LoginPage } from "./pages/loginpage"

var loginPage = new LoginPage()



describe('Login Tests', () => {


    it('POM Demo', function() {
        
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-topbar-header-title').click()


    })

    it('POM Demo 2', () => {
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin1234')
        loginPage.clickLogin()
        cy.get('.oxd-alert-content > .oxd-text')
                 .should('contain','Invalid credentials')



    })
})

it('POM Demo 3', () => {
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin1234')
    loginPage.clickLogin()
    cy.get('.oxd-topbar-header-title').click()


})