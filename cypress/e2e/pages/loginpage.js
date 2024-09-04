export class LoginPage{  

    username_textbox = '[name="username"]'
    password_texbox = '[name="password"]'
    login_button = '.oxd-button'
    enterUsername(username){
        cy.get(this.username_textbox).type(username)
        //cy.get('[name="username"]').type(username)
        // .invoke('attr','name','username').type(username)
    }

    enterPassword(password){
          cy.get(this.password_texbox).type(password)
     //   cy.get('[name="password"]').type(password)
    //    .invoke('attr','name','password').type(password)
    }

    clickLogin(){
        cy.get(this.login_button).click()
        // cy.get('.oxd-button').click()
    }
}