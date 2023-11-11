import { mount } from "@cypress/react";
import App from "./App";

describe("App component", () => {
  it("renders App component", () => {
    mount(<App />);
    cy.get("a").should("contain", "Learn React");
    cy.get("input").should("have.attr", "placeholder", "Search");
    cy.get("button").should("contain", "Go");
  });

  it("types in the input field", () => {
    mount(<App />);
    cy.get("input").type("poodle");
    cy.get("input").should("have.value", "poodle");
  });

  it("clicks the search button", () => {
    mount(<App />);
    cy.get("input").type("poodle");
    cy.get("button").click();
    cy.get("div").should("contain", "Loading...");
  });
});

// npm install--save - dev cypress @testing-library / cypress
// import '@testing-library/cypress/add-commands'
//  tsconfig.json
// {
//   "compilerOptions": {
//     "types": ["cypress", "@testing-library/cypress"]
//   }
// }

cy.findByRole("button", { name: /Jackie Chan/i }).click();
cy.findByRole("button", { name: /Button Text/i }).should("exist");
cy.findByRole("button", { name: /Non-existing Button Text/i }).should(
  "not.exist"
);
cy.findByLabelText(/Label text/i, { timeout: 7000 }).should("exist");

// findByRole _inside_ a form element
cy.get("form")
  .findByRole("button", { name: /Button Text/i })
  .should("exist");
cy.findByRole("dialog").within(() => {
  cy.findByRole("button", { name: /confirm/i });
});
