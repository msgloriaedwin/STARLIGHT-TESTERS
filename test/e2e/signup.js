describe('User Signup Test Suite', () => {
  
  beforeEach(() => {
    cy.visit('/auth/signup', { timeout: 10000 });
  });
  
  it('Verify that user is unable to signup with invalid email format', () => {

    cy.get('input[name="username"]').type('Specish');
    cy.get('input[name="email"]').type('menu.com');
    cy.get('input[name="password"]').type('Edwin1@kels');
    cy.get('button').contains('Sign Up').click();
  
  });

  it('Verify that user is able to Sign Up with valid email and password', () => {

    cy.get('input[name="username"]').type('Specish');
    cy.get('input[name="email"]').type('specm@mailinator.com');
    cy.get('input[name="password"]').type('Edwin1@kels');
    cy.get('button').contains('Sign Up').click();
    cy.contains('Signup successful')
  
  })
  it('Verify that user is able to Sign Up using google', () => {

    cy.get('button')
      .contains('Sign Up with Google')
      .should('be.visible')
      .click();

  })

  it('Verify that user is able to Sign Up using Facebook', () => {

    cy.get('button')
      .contains('Sign Up with Facebook')
      .should('be.visible')
      .click();

  })

  it('Verify that presence of the text at the footer', () => {

    cy.get('p.text-center.text-sm.md\\:text-base.flex.gap-2.justify-center.items-center')
    .should('contain.text', 'Have an account?')
    .find('a')
    .should('have.text', 'Sign In')
    .and('have.attr', 'href', '/auth/login');
    
  })


});
  
  