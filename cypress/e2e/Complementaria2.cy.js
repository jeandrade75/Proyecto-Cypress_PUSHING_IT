
//todos los selectores deben ser modificados y utilizar una expresion diferente ya sea con
//css selector o con un metodo de cypress

/// <reference types="cypress" />
describe("Actividad complementaria 2", () =>{
    const numero = Math.floor(Math.random() * 1000)

    it('Actividad complementaria 2', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        cy.get('[name="user"]').type(`beerpoint${numero}`)
        cy.get("#user").clear()
        cy.get('input[class="chakra-input css-1ekf6i8"]').type(`beerpoint${numero}`)
        cy.get('#pass').type('123456!')
        cy.get("[value = 'Male']").check({force:true}) // usamos el force true para aquellas circunstancia donde encontremos un elemento con el que no podamos interactuar
        cy.get('#day').select ('22')
        cy.get('select#month').select ('December')
        cy.get('[name="year"]').select (54)
        cy.contains('button','register', {matchCase :false}) // aca esta opcion la usamos para activar el case sensitive, si queremos  
        cy.wait(5000)
    });
});
