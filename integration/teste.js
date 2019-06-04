describe("Knowledge Base Application", () => {
  it("Shows a placeholder", () => {
    cy.visit("www.globo.com");
    cy.screenshot('teste')
    cy.get("input[id='home-search-field']")
       .type('admin-email').click();
      //.should("have.text", "Coming Soon...");
  });
});