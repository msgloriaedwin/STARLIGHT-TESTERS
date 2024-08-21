
describe('Remote Bingo Privacy Policy Page', () => {
    
  beforeEach(() => {
    cy.visit('/privacy', { timeout: 10000 });
  });
  
  it('Should navigate to Privacy Policy Page', () => {
      
    cy.get('h2').should('contain.text', 'Privacy Policy');
    cy.get('h3').should('be.visible').should('contain.text', 'Information We Collect');
    cy.get('h3').should('be.visible').should('contain.text', 'How We Use Your Information');
    cy.get('h3').should('contain.text', 'How We Share Your Information');
    cy.get('h3').should('contain.text', 'Data Security');
    cy.get('h3').should('contain.text', 'Your Rights and Choices');
      
      
  });
});
  