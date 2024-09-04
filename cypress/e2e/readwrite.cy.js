before(function(){
   cy.fixture('example.json').as('test_data') 
})


it('Read files using Fixtures', function(){
    cy.fixture('example.json').then((data)=> {
        cy.log(data.name)
        cy.log(data.email)
    })


    cy.log(this.test_data.name)
})

it('Read File using readFile()', function(){
    cy.readFile('./cypress/fixtures/example.json').then((data) =>{
        cy.log(data.name)
    })
})

it('Writing to the file Demo', function(){
    cy.writeFile('./cypress/fixtures/sample.txt','Hello, I am Musharib')
    cy.writeFile('./cypress/fixtures/sample.txt','\r\nHello, I am Learning Cypress',{flag: 'a+'})
})