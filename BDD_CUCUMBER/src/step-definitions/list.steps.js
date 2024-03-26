import { When, Then } from "@wdio/cucumber-framework";
import BoardsPage from "../POM/boards.page.js";

When(/^I set (\w+) as a name for new list$/, async (listName) => {
  await BoardsPage.listTitle.setValue(listName);
});

When(/^I confirm list creation$/, async () => {
  await BoardsPage.addListButton.click();
});

Then(/^New list with (\w+) is added$/, async (listName) => {
  await expect(BoardsPage.listName).toHaveText(listName);
});

Then(/^widget for adding new list is displayed$/, async () => {
  await expect(BoardsPage.listTitle).toBeDisplayed();
});
