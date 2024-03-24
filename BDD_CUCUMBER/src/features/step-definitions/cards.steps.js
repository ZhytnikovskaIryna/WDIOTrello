import { When, Then } from "@wdio/cucumber-framework";
import BoardsPage from "../../POM/boards.page.js";

When(/^I create card with (\w+)$/, async (cardName) => {
  await BoardsPage.createCard(cardName);
});

Then(/^card with (\w+) is present$/, async (cardName) => {
  await expect(BoardsPage.createdCardName).toHaveText(cardName);
});
