describe("User tests", () => {
    it("CAN login and view their profile", () => {
      let email = "Norofftest@noroff.no";
      let password = "Norofftest@noroff.no";
  
      cy.visit("https://norofffeu.github.io/social-media-client/");
      cy.title().should("contain", "Test Client");
      cy.wait(1000);
  
      cy.contains("Login").click({ force: true });
      cy.wait(1000);
  

      cy.get("#loginEmail").type(email);
      cy.get("#loginPassword").type(password);
      cy.wait(1000);
      cy.get("button.btn.btn-success").eq(1).click({force: true});
      cy.wait(1000);
    });


    it("CAN use logout button to logout", () => {
        let email = "Norofftest@noroff.no";
        let password = "Norofftest@noroff.no";
    
        cy.visit("https://norofffeu.github.io/social-media-client/");
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
        });


    it("CANNOT login with invalid credentials, a warning also shows", () => {
        let email = "Norofftest@gmail.com";
        let password = "Norofftest@noroff.no";
    
        cy.visit("https://norofffeu.github.io/social-media-client/");
        cy.title().should("contain", "Test Client");
        cy.wait(1000);
    
        cy.contains("Login").click({ force: true });
        cy.wait(1000);
    
    
        cy.get("#loginEmail").type(email);
        cy.get("#loginPassword").type(password);
        cy.wait(1000);
        cy.get("button.btn.btn-success").eq(1).click({force: true});
        cy.wait(4000);
        });
  });
  