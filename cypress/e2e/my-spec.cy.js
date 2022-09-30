describe("test main page", () => {
  it("chack h1", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="MySpan"]').contains("Children");
  });
});
