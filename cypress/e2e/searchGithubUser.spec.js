describe("Github user profile search", () => {
  it("Search and find an existing user", () => {
    const USERNAME = "omonteon";
    const BUTTON_SEARCH_SELECTOR = ".search-bar > button";
    cy.visit("/");
    cy.get("#inputSearch").type(USERNAME);
    cy.fetchGithubUser(BUTTON_SEARCH_SELECTOR);
    cy.get(".user-handle").contains(USERNAME);
  });

  it("Search for a non existing user", () => {
    const USERNAME = "adsf135135";
    const BUTTON_SEARCH_SELECTOR = ".search-bar > button";
    cy.visit("/");
    cy.get("#inputSearch").type(USERNAME);
    cy.fetchGithubUser(BUTTON_SEARCH_SELECTOR);
    cy.get(".error-message");
  });

  it("Change theme", () => {
    cy.visit("/");
    cy.get(".theme-switch").click();
  });
});
