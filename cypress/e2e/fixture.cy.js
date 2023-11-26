/// <reference types="cypress" />
const datosFixtures = require('../fixtures/fixture.json')

describe('Hooks', () => {
    let datosFixture;

    before('Before', () => {
        cy.fixture('fixture').then((data) => {
            datosFixture = data
        })

        cy.fixture('fixture').as('datosAlias')
    })

    beforeEach('Before each', () => {
        // visitar la pagina
        cy.visit('/')
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type(datosFixture.usuario.usuario);
        cy.get('#pass').type(datosFixture.usuario.password);
        cy.contains('Log in').click();
        cy.contains('To Do List').click();
    });

    it("Deberia ingresar al sistema y agregar 1 tarea", () => {
        cy.get('#task').type(`${datosFixture.tareas.tarea1} {enter}`);
    });

    it("Deberia ingresar al sistema 2 y agregar 2 tareas", () => {
        cy.get('#task').type(`${datosFixture.tareas.tarea1} {enter}`);
        cy.get('#task').type(`${datosFixture.tareas.tarea2} {enter}`);
    });

    it.only("Deberia ingresar al sistema 2 y agregar 3 tareas", function () {
        cy.get('#task').type(`${this.datosAlias.tareas.tarea1} {enter}`);
        cy.get('#task').type(`${this.datosAlias.tareas.tarea2} {enter}`);
        cy.get('#task').type(`${this.datosAlias.tareas.tarea3} {enter}`);
    });
});