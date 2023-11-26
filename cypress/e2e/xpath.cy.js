describe("Xpath", () =>{
    
    it('validando elementos con xpath absoluto', () =>{ //Para copiar el full xpath (boton derecho) encima del elemento
    // Ejemplo sobre user: /html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/input[1]    
    // Desventaja: es muy largo - Si surjen modificaciones de algun div o etiqueta pueden fallar el test
        cy.visit('')
        cy.xpath('/html/body/div[1]/div/div/div/form/div[1]/input')
    })

    it('validando elementos con xpath relativo', () =>{ 
        cy.visit('')
        cy.xpath('//input[@id="user"]')
    })

    //Para el xpath relativo: //tagname[@atributo=‘valor’]
    //Ventajas del relativo: es mas corto, mas descriptivo, mas facil de entender
    //Sabemos con que elemento estamos interactuando

    //Metodos usados en Xpath

    /*Contains = usamos para encontrar elementos de forma parcial
    Para localizar el button utilizando contains debemos utilizar 
    ‘//button[contains(@atributo,”valor parcial”)]’.  */

    it('validando el metodo contains', () =>{ 
    cy.visit('')
    cy.xpath('//button[contains(@type,"sub")]')
    })
    
    //Localizando elementos utilizando text
    //Ejemplos: //button[text()='Register']
    it('validando el metodo text', () =>{ 
    cy.visit('')
    cy.xpath('//button[text()="Register"]')
    })


    //Operador logico OR
    it('validando el OPERADOR LOGICO OR', () =>{ 
    cy.visit('')
    cy.xpath('//input[@id="usuario" or @name="user"]')
    })

    //Operador logico not
    it('validando el OPERADOR LOGICO NOT', () =>{ 
    cy.visit('')
    cy.xpath('//input[@id="user" and not (@name="users")]')
    })

    //Operador logico AND 
    it('validando el OPERADOR LOGICO AND', () =>{ 
    cy.visit('')
    cy.xpath('//input[@id="user" and @name="user"]')
    })

})