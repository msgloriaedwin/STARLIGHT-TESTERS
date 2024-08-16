describe('Login Tests', () => {
  
  
    it('Verify that user is unable to login with unregistered email and password', () => {

      cy.visit('/auth/login');
      cy.get('input[name="email"]').type('unregistered@example.com');
      cy.get('input[name="password"]').type('InvalidPassword123!');
      cy.get('button').contains('Login').click();
      cy.contains('Invalid credentials').should('be.visible'); 
    });
  
  });
  