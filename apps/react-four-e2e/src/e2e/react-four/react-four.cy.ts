describe('react-four: ReactFour component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=reactfour--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ReactFour!');
    });
});
