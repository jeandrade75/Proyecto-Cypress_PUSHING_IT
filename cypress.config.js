const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 8000 , // aca se puede configrar el tiempo de espera en las diferentes aserciones
    watchForFileChanges: false , // si esta en false no se ejecutan los test cada vez que guardamos los archivos
    'baseUrl' : 'https://pushing-front.vercel.app/'
  },
});
