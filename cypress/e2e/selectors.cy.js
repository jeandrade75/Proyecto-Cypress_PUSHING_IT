describe('Selectores', () => {

    it ('Deberia encontrar los elementos utilizando diferentes tecnicas', () => {
    cy.visit ('');
    cy.get ('button') //tagname
    cy.get ('input') //tagname
    cy.get ('[cy-get="user"]') //atributos
    cy.get ('[for="day"]') //atributos
    cy.get ('#user') // esto es un ID -- esto es igual que escribir ('[cy-get="user"]')

    // Para escribir o agregar el tipo de tagname: Todos los elementos tipo input cuyo id sea "user"
    // Lo mismo se puede hacer con el valor y los atributos: 

    cy.get ('input#user') //tagname+ID
    cy.get ('input[name="user"]') //si usamos comillas simples dentro usamos dobles afuera o viceversa
    cy.get ('.password') //clase -- Aca es suficiente escribir una sola clase para poder encontrarlo

    // Cuando usamos el atributo tenemos que usar el valor "completo"
    cy.get ('[class= "chakra-input password css-1ekf6i8"]') //clase + atributo

    //METODOS DE CYPRESS

    })

    it ('Encontrar elementos por el metodo find', () => {
    cy.visit ('')
    cy.get('form').find('button')

    });

    it ('Encontrar elementos por el metodo contains', () => {
    cy.visit ('')
    cy.contains('button','Register') // es importante agregar el tagName
    cy.contains('button','register', {matchCase :false}) // aca esta opcion la usamos para activar el case sensitive, si queremos  

    });

// Otros metodos de busqueda (Por padre, Por hermanos, Por hijos)

    it ('Encontrar elementos por el metodo Parents', () => {
    cy.visit ('')
    cy.get('#user').parent('div') // Aca tenemos la opcion de buscar 1ero al hijo luego al padre
 
    });

    it ('Encontrar elementos por el metodo Childrens', () => {
    cy.visit ('')
    //cy.get('div').children(#user) // Aca tenemos la opcion de buscar 1ero al padre luego al hijo
    cy.get('form > div').first().children('#user')

    //Importante: Si tengo varios Div (padres) Si quiero escoger el 1ero uso Eje: cy.get('form>div').first().children(#user)
    //.eq y .last es para escoger cualquier otro o "el ultimo"

    });

    it ('Encontrar elementos por el metodo Siblings', () => {
    cy.visit ('')
    cy.get('#user').siblings('label[for="user"]')
    cy.get('form > div').first().siblings().first();

    });
})




//Cuando usamos metodo en Cypress siempre vamos a tener opciones y para agregarlas usamos las llaves {}

//Importante

//Diferentes formas de encontra elementos:
//Por Tagname
//Por atributos
//Por className
//Por Id


// Podemos buscar un atributo de esta forma [id=user] pero otra forma de escribirlo es #user