it('File Upload', function(){
    cy.visit('https://trytestingthis.netlify.app/')
    
    cy.get('[name="myfile"]').attachFile('sample.txt')
})