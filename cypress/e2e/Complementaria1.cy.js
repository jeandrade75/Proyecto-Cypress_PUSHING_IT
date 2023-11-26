/// <reference types="cypress" />

describe("Actividad complementaria", () =>{
    const numeroRandom = Math.floor(Math.random() * 1000)
    it('Actividad complementeria 1', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        //crear un test que permita registrarse en la pagina!
        //Recorda usar npx cypress open para abrir la interfaz de usuario
        //Para seleccionar el genero utiliza el siguiente selector cy.get("[value='Male']") //Female //Other
        cy.get('#user').type(`beerpoint${numeroRandom}`);
        cy.get('#user').clear();
        cy.get('#user').type('beerpoint' + numeroRandom);
        cy.get('#pass').type('123456!', { log: false });
        cy.get("[value='Male']").check({ force: true });  // usamos el force true para aquellas circunstancia donde encontremos un elemento con el que no podamos interactuar
        cy.get('#day').select('22');
        cy.get('#month').select('December');
        cy.get('#year').select(54);
        cy.get('#submitForm').click();


       
    });
});


