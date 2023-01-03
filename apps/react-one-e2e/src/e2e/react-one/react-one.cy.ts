describe('react-one: ReactOne component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=reactone--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ReactOne!');
    });
});
