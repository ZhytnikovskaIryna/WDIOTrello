import { When, Then } from "@wdio/cucumber-framework";
import BoardsPage from "../POM/boards.page.js";

When(/^I create card with (\w+)$/, async (cardName) => {
  await browser.refresh();
  await BoardsPage.createCard(cardName);
});

Then(/^Card with (\w+) is present$/, async (cardName) => {
  await expect(BoardsPage.createdCardName).toHaveText(cardName);
});
