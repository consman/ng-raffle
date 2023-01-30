describe("Test GDG Raffle App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Shows the tool bar.",()=>{
    cy.get("[data-test='gdg-banner']").should("include.text","GDG Sacramento Raffle App");
  });

  it("should add one entry",()=>{

    cy.get("[data-test='enter-name']").type("Bob");
    cy.get("[data-test='add-entry']").click();
    cy.get("[data-test='entry']").should('include.text','Bob');
  });

  it("should add multiple entries",()=>{

    cy.get("[data-test='enter-name']").type("Bob");
    cy.get("[data-test='add-entry']").click();
    cy.get("[data-test='enter-name']").type("Josh");
    cy.get("[data-test='add-entry']").click();
    cy.get("[data-test='enter-name']").type("Al");
    cy.get("[data-test='add-entry']").click();
    cy.get("[data-test='enter-name']").type("Magendiran");
    cy.get("[data-test='add-entry']").click();
    cy.get("[data-test='enter-name']").type("Ryan");
    cy.get("[data-test='add-entry']").click();
    cy.get("[data-test='enter-name']").type("Oleg");
    cy.get("[data-test='add-entry']").click();

    cy.get("[data-test='entry']").eq(0).should('include.text','Bob');
    cy.get("[data-test='entry']").eq(1).should('include.text','Josh');
    cy.get("[data-test='entry']").eq(2).should('include.text','Al');
    cy.get("[data-test='entry']").eq(3).should('include.text','Magendiran');
    cy.get("[data-test='entry']").eq(4).should('include.text','Ryan');
    cy.get("[data-test='entry']").eq(5).should('include.text','Oleg');
  });

  it("should draw winners",()=>{

    cy.get("[data-test='enter-name']").type("Bob");
    cy.get("[data-test='add-entry']").click();
    cy.get("[data-test='enter-name']").type("Josh");
    cy.get("[data-test='add-entry']").click();
    cy.get("[data-test='enter-name']").type("Al");
    cy.get("[data-test='add-entry']").click();
    cy.get("[data-test='enter-name']").type("Magendiran");
    cy.get("[data-test='add-entry']").click();
    cy.get("[data-test='enter-name']").type("Ryan");
    cy.get("[data-test='add-entry']").click();
    cy.get("[data-test='enter-name']").type("Oleg");
    cy.get("[data-test='add-entry']").click();

    cy.get("[data-test='draw-winners']").click();
    cy.get("[data-test='winner']").eq(5).should("exist");
  });

  it("should reset the raffle.",()=>{
    cy.get("[data-test='reset-raffle']").click();
    cy.get("[data-test='enter-name']").type("Bob");
    cy.get("[data-test='add-entry']").click();
    cy.get("[data-test='enter-name']").type("Josh");
    cy.get("[data-test='add-entry']").click();
    cy.get("[data-test='enter-name']").type("Al");
    cy.get("[data-test='add-entry']").click();
    cy.get("[data-test='enter-name']").type("Magendiran");
    cy.get("[data-test='add-entry']").click();
    cy.get("[data-test='enter-name']").type("Ryan");
    cy.get("[data-test='add-entry']").click();
    cy.get("[data-test='enter-name']").type("Oleg");
    cy.get("[data-test='add-entry']").click();

    cy.get("[data-test='draw-winners']").click();
    cy.get("[data-test='winner']").eq(5).should("exist");

    cy.get("[data-test='reset-raffle']").click();
    cy.get("[data-test='entry']").should("not.exist");
    cy.get("[data-test='winner']").should("not.exist");

  });

})
