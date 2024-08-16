describe('User Signup Test Suite', () => {
  
    it('Verify that user can signup with valid credentials', () => {
      cy.visit('/auth/signup'); 
      cy.wait(4000)
      cy.get('input[name="username"]').type('ria');
      cy.get('input[name="email"]').type('love@mailinator.com');
      cy.get('input[name="password"]').type('Edwin1@kels');
      cy.get('button[type="submit"]').click();
    });
  
    // it('Verify that user is unable to signup with invalid email format', () => {
    //   cy.wait(4000)
    //   cy.get('input[name="username"]').type('ria');
    //   cy.get('input[name="email"]').type('love@mailinator');
    //   cy.get('input[name="password"]').type('Edwin1@kels');
    //   cy.get('button[type="submit"]').click();
    //   cy.contains('Invalid email address').should('be.visible');
    // });
  
    // it('Verify that user is unable to signup with empty input fields', () => {
    //   cy.wait(4000)
    //   cy.contains('Required').should('be.visible');
    //   cy.contains('Required').should('be.visible');
    //   cy.contains('Required').should('be.visible');
    // });
  
    // it('Verify user is unable to signup with weak password', () => {
    //   cy.wait(4000)
    //   cy.get('input[name="username"]').type('Winner');
    //   cy.get('input[name="email"]').type('winner@mailinator.com');
    //   cy.get('input[name="password"]').type('1234');
    //   cy.get('button[type="submit"]').click();
    //   cy.contains('Password too weak').should('be.visible');
    // });
  
    // it('Verify a new user cannot register with existing users credentials', () => {
    //   cy.wait(4000)
    //   cy.get('input[name="username"]').type('ria');
    //   cy.get('input[name="email"]').type('love@mailinator.com');
    //   cy.get('input[name="password"]').type('Edwin1@kels');
    //   cy.get('button[type="submit"]').click();
    // });
  
  });
  