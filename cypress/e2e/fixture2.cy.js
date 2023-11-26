/// <reference types="cypress" />
const datosFixture = require('../fixtures/fixture2.json')

describe('Actividad complementaria 4', () => {
    //inicializa el fixture
    let datosFixture; 

    before('Acceder al fixture', () => {
    cy.fixture('pushingit').then((data) => {
        datosFixture = data
        })
    })    
    
    beforeEach('Visitar la pagina e ir al login', () => {
        // visitar la pagina
        cy.visit('/')
        cy.get('#registertoggle').dblclick();
    })

    it('Deberia validar un mensaje de error al colocar un usuario inexistente', () => {
        
        cy.get('#user').type(datosFixture.usuario);
        cy.get('#pass').type(datosFixture.password); //la contraseña debe ser valida por el sistema
        cy.get('#submitForm').click();
        cy.wait (5000);
        cy.get('#mensajeError').should('have.text', datosFixture.mensajeError);
    });
});

