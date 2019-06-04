describe('API Testing with Cypress for Easynvest Test --> People', () => {
    var result 
    
      it('Validate the name Luke', () => {
      result = cy.request('https://swapi.co/api/people/1')
       result.its('body')
             .its('name')
             .should('include', 'Luke');
    })

    it('Validate the height', () => {
       result = cy.request('https://swapi.co/api/people/1')
      
       result.its('body')
             .its('height')
             .should('include', '172');
    })

    it('Validate the mass', () => {
       result = cy.request('https://swapi.co/api/people/1')
      
       result.its('body')
             .its('mass')
             .should('include', '77');
    })

    it('Validate the hair_color', () => {
       result = cy.request('https://swapi.co/api/people/1')
      
       result.its('body')
             .its('hair_color')
             .should('include', 'blond');
    })

    it('Validate the skin_color', () => {
       result = cy.request('https://swapi.co/api/people/1')
      
       result.its('body')
             .its('skin_color')
             .should('include', 'fair');
    })

    it('Validate the eye_color', () => {
       result = cy.request('https://swapi.co/api/people/1')
      
       result.its('body')
             .its('eye_color')
             .should('include', 'blue');
    })

    it('Validate the birth_year', () => {
       result = cy.request('https://swapi.co/api/people/1')
      
       result.its('body')
             .its('birth_year')
             .should('include', '19BBY');
    })

    it('Validate the gender', () => {
       result = cy.request('https://swapi.co/api/people/1')
      
       result.its('body')
             .its('gender')
             .should('include', 'male');
    })
    
}) 