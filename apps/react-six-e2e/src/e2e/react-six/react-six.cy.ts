describe('react-six: ReactSix component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=reactsix--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ReactSix!');
    });
});
