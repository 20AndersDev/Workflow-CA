let email = "Norofftest@noroff.no";
let password = "Norofftest@noroff.no";
let invalidEmail = "Norofftest@gmail.com";

describe("User tests", () => {

    it("CAN login and view their profile", () => {
      
      cy.visit("/");
      cy.title().should("contain", "Test Client");
      cy.wait(1000);
      cy.contains("Login").click({ force: true });
      cy.wait(1000);
      cy.get("#loginEmail").type(email);
      cy.get("#loginPassword").type(password);
      cy.wait(1000);
      cy.get("button.btn.btn-success").eq(1).click({force: true});
      cy.wait(1000);
      cy.get("button[data-visible=loggedIn").should("exist");
    });


    it("CAN use logout button to logout", () => {
        let email = "Norofftest@noroff.no";
        let password = "Norofftest@noroff.no";
    
        cy.visit("/");
        cy.title().should("contain", "Test Client");
        cy.wait(1000);
        cy.contains("Login").click({ force: true });
        cy.wait(1000);
        cy.get("#loginEmail").type(email);
        cy.get("#loginPassword").type(password);
        cy.wait(1000);
        cy.get("button.btn.btn-success").eq(1).click({force: true});
        cy.wait(4000);
        cy.contains("Logout").click({ force: true });
        cy.wait(1000);
        cy.get("button[data-visible=loggedOut").should("exist");

        });


    it("CANNOT login with invalid credentials, a warning also shows", () => {
        
    
        cy.visit("/");
        cy.wait(1000);
        cy.contains("Login").click({ force: true });
        cy.wait(1000);
        cy.get("#loginEmail").type(invalidEmail);
        cy.get("#loginPassword").type(password);
        cy.wait(1000);
        cy.get("button.btn.btn-success").eq(1).click({force: true});
        cy.wait(4000);
        });
  });
  