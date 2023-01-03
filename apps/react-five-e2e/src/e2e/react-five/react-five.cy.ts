describe('react-five: ReactFive component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=reactfive--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ReactFive!');
    });
});
