describe('Mocha', () => {
    const curso = 'pushingit'

    it.only('Nuestro primer test con mocha', () => {
        cy.log('Nuestro primer test en ' + curso);
    });

    it.skip('Nuestro segundo test con mocha', () => {
        cy.log('Nuestro segundo test');
    });

    it.only('Nuestro tercer test con mocha', () => {
        cy.log('Nuestro tercer test en ' + curso);
    });
});

//Nomenclatura en Mocha

//describe(): Indica que esta sección va a ser un test suite que incluirá los test cases
//it(): Indica que se va a inicializar un test case
//skip(): se utiliza para indicar que el/los test/suite se ignoraran y no serán ejecutados
//only(): se utiliza para indicar que el/los test/suite serán los únicos en ser ejecutados del archivo