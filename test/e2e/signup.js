describe('User Signup Test Suite', () => {
  
    it('Verify that user can signup with valid credentials', () => {
      cy.visit('/auth/signup'); 
      cy.wait(4000)
      cy.get('input[name="username"]').type('ria');
      cy.get('input[name="email"]').type('love@mailinator.com');
      cy.get('input[name="password"]').type('Edwin1@kels');
      cy.get('button[type="submit"]').click();
    });
  
  });
  