
describe('Remote Bingo How to Play Page', () => {
  
  beforeEach(() => {
    cy.visit('/how-to-play', { timeout: 10000 });
  });

  it('should display How to Play header', () => {

    cy.get('h1.text-primary-900.font-bold.text-4xl')
      .should('be.visible')
      .and('contain.text', 'How To Play');
  })

  it('should display the numbers and alphabets buttons', () => {  
    
    cy.get('button', { timeout: 10000 })
      .contains('Numbers')
      .should('be.visible')
      .click();
    
    cy.get('button', { timeout: 10000 })
      .contains('Alphabets')
      .should('be.visible')
      .click();

  });

  it('should display all the content elements',()=>{

    cy.get('article.mt-10').should('be.visible')

  })

  it('should interact with the displayed contents', () => {  
    
    cy.get('.space-y-3')
      .should('be.visible')
  })
});
