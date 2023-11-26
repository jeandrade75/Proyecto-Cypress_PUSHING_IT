/// <reference types="cypress" />

describe('Primer test', () => {
    const numeroRandom = Math.ceil(Math.random() * 1000);  
    // Aca lo que hicimos fue crear una constante  usando el método Math.random que no devuelve un numero entre 0-1
    // Luego si queremos promediar hacia abajo o hacia arriba usamos 2 métodos diferentes: Match.floor (hacia abajo) - Match.ceil (hacia arriba) 

    it("Deberia registrarse en el sistema correctamente", () => {
        cy.visit('/');
        cy.get('#user').type(`pushingit${numeroRandom}`); // Esta forma de escribir esta linea es la "más recomendada"  usando comillas invertidas (Alt96)+$ , nos permite convertir el entero en string
        cy.get('#user').clear(); // Para limpiar lo que escribimos
        cy.get('#user').type('pushingit' + numeroRandom); // Acá agregamos la constante Random
        cy.get('#pass').type('123456!', { log: false });
        cy.get("[value='Male']").check({ force: true }); // usamos el "force true" para aquellas circunstancia donde encontremos un elemento con el que no podamos interactuar
        cy.get('#day').select('1');  // Hay (3) maneras de seleccionar en Cypress - Por "texto visible" , Por "value" y Por "indice"
        cy.get('#month').select('June'); // seleccionamos por texto visible
        cy.get('#year').select(90); // seleccionamos por indice . Ejemplo (90) = año 2011
        cy.get('#submitForm').click();
        cy.get('#todolistlink');

        //IMPORTANTES  Cuando usamos el select('1'). Si usamos las comillas simples nos referimos al value, sin comillas estamos seleccionando el indice

        //Interacciones en el DOM
        //click(): es la acción de clickear en un elemento web
        //type(): es la acción de escribir texto en un input
        //clear(): elimina texto de un input
        //check/uncheck(): funciona con inputs tipo checkbox o radio y permite seleccionar sus opciones
        //select(): permite seleccionar valores en una lista desplegable

        //Cypress Config-Configuración de Cypress
        //Líneas de comando:
        //--e2e sirve para indicar que se va a ejecutar testing end to end
        //-b nos permite ingresar el browser que vamos a utilizar
        //--spec nos permite indicar directamente el test
        //defaultCommandTimeout: es el tiempo que espera Cypress por la gran mayoría de commandos ejecutados en el DOM. Default 4000 milisegundos
        //watchForFileChanges: indica si se deben reiniciar los test al guardar un cambio en el editor.
        //baseUrl: es la página base que tomara Cypress si no la indicamos en nuestros test. 
        //viewportHeight: valor  del tamaño default vertical en pixeles
        //viewportWidth: valor  del tamaño default horizontal en pixeles

        // npm test : Para abrir el test+el navegador una sola vez 

        //OJO ** Lo idea es hacer la busqueda en este orden de prioridades **
        /*id
        class
        tag
        attributes
        nth-child*/

        //Cuando usamos metodo en Cypress siempre vamos a tener opciones y para agregarlas usamos las llaves {}
        




        



    });
});