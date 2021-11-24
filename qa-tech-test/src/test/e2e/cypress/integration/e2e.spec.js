const getCentralIndex = require('../../../util');

describe('ECS Interview test app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Able to submit answers', () => {
    cy.get('[data-test-id="render-challenge"]').click();

    let all_rows = [];
    cy.get('table > tbody > tr')
      .each(($el, $index) => {
        let row_vals = [];
        cy.wrap($el)
        .find('td')
        .each(($rel, $rindex) => {
          cy.wrap($rel)
          .invoke('text')
          .then(text => {
            row_vals.push(parseInt(text.trim()))
          })
        })
        all_rows.push(row_vals);
      })
      .then(() => {
        let answer1 = getCentralIndex(all_rows[0]);
        let answer2 = getCentralIndex(all_rows[1]);
        let answer3 = getCentralIndex(all_rows[2]);

        cy.get('[data-test-id="submit-1"]').type(answer1);
        cy.get('[data-test-id="submit-2"]').type(answer2);
        cy.get('[data-test-id="submit-3"]').type(answer3);

        cy.fixture('data').then((user) => {
          cy.get('[data-test-id="submit-4"]').type(user.candidate_name);
        })

        cy.contains('Submit Answers').click();
      })
  })
})
