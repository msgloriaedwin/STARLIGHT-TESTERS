describe('Login Tests', () => {

  beforeEach(() => {
    cy.visit('/auth/login', { timeout: 10000 });
  });
  
  it('Verify that user is unable to login with unregistered username and password', () => {

    cy.get('input[name="username"]').type('Specta');
    cy.get('input[name="password"]').type('Edwin1@kels');
    cy.get('button').contains('Login').click();
    cy.contains('Login failed').and('contain', 'Invalid username or password.').should('be.visible');
  });

  it('Verify that user is able to login with registered username and password', () => {

    cy.get('input[name="username"]').type('Spec');
    cy.get('input[name="password"]').type('Edwin1@kels');
    cy.get('button').contains('Login').click();
    cy.contains('Login successful')
  
  })
  it('Verify that user is able to login using google', () => {

    cy.get('button')
      .contains('Sign in with Google')
      .should('be.visible')
      .click();

  })

  it('Verify that user is able to login using Facebook', () => {

    cy.get('button')
      .contains('Log in with Facebook')
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
  