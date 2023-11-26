/// <reference types="cypress" />
describe('Hooks', () => {

    let tarea1, //Declaramos la tarea 1
    tarea2, //Declaramos la tarea 2
    usuario,
    contraseña
    
    //El beforeEach puede ir antes o despues No hay problema 
    //" Lo importante es que este dentro del describe"

    before('Before', () => {
        cy.log('Before')
        //LOS DATOS SE DEFINEN EN EL before
        //// usar metodos para obtener los datos de un fixutre, de una base de datos relacional o de una base de datos no relacional
        tarea1= 'Tarea 1' // aca inicializamos
        tarea2= 'Tarea 2' // aca inicializamos
        usuario= 'pushingit'
        contraseña= '123456!'

    });

    beforeEach('Before each', () => {
        // visitar la pagina
        cy.visit('/')
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type('pushingit')
        cy.get('#pass').type('123456!')
        cy.contains('Log in').click();
        cy.contains('To Do List').click();
    });
    

    it("Deberia ingresar al sistema y agregar 1 tarea", () =>{
        //agregar 1 tarea
        //cy.log('Test 1')
        cy.get('#task').type(`${tarea1} {enter}`)
    });

    it("Deberia ingresar al sistema 2 y agregar 2 tareas", () =>{
        //cy.log('Test 2')
        //agregar 2 tareas
        cy.get('#task').type(`${tarea1} {enter}`)
        cy.get('#task').type(`${tarea2} {enter}`)
    });

    afterEach('After each', () => {
        cy.log('after each')
        //enviar reportes individuales por cada test
        cy.contains('Logout').click();
    })

    after('after', () => {
        cy.log('after')
        //enviar reportes de todos los test por slack/discord
    })
});
