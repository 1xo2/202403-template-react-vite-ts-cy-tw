import App from './App';

describe('LoginForm', () => {
  it('should redirect to welcome screen when creds are correct', () => {
    cy.mount(<App />);
    cy.find('h1');
  });


});
