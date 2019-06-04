describe('API Testing with Cypress for EasynVest Test --> Planet', () => {
    var result 
    
      it('Validate the name Tatooine', () => {
      result = cy.request('https://swapi.co/api/planets/1')
       result.its('body')
             .its('name')
             .should('include', 'Tatooine');
    })

    it('Validate the rotation_period', () => {
      result = cy.request('https://swapi.co/api/planets/1')
       result.its('body')
             .its('rotation_period')
             .should('include', '23');
    })

    it('Validate the orbital_period', () => {
      result = cy.request('https://swapi.co/api/planets/1')
       result.its('body')
             .its('orbital_period')
             .should('include', '304');
    })

    it('Validate the diameter', () => {
      result = cy.request('https://swapi.co/api/planets/1')
       result.its('body')
             .its('diameter')
             .should('include', '10465');
    })

    it('Validate the climate', () => {
      result = cy.request('https://swapi.co/api/planets/1')
       result.its('body')
             .its('climate')
             .should('include', 'arid');
    })

    it('Validate the gravity', () => {
     result = cy.request('https://swapi.co/api/planets/1') 
       result.its('body')
             .its('gravity')
             .should('include', '1 standard');
    })

    it('Validate the terrain', () => {
     result = cy.request('https://swapi.co/api/planets/1') 
       result.its('body')
             .its('terrain')
             .should('include', 'desert');
    })

    it('Validate the surface_water', () => {
     result = cy.request('https://swapi.co/api/planets/1') 
       result.its('body')
             .its('surface_water')
             .should('include', '1');
    })
    
    it('Validate the population', () => {
      result = cy.request('https://swapi.co/api/planets/1')
       result.its('body')
             .its('population')
             .should('include', '200000');
    })
}) 