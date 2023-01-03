describe('react-two: ReactTwo component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=reacttwo--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ReactTwo!');
    });
});
