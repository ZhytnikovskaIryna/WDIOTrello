# TrelloJSWdio
WDIO Trello Tests (PO)
Initial setup in Trello:
- Empty board named 'Board Initial' should be present Trello before running the test ( it is already there, please don't delete it)
- All other boards created by tests should be manually deleted after each run run (as Trello doesn't allow to creation of more than 10 boards for a free account)
Notes:
- The 'search' test is still not stable on Firefox. I tried many things ( adding different waituntil...) but it didn't help. Browser.pause() solving the issue but I decided that it is bad practice to add it.
- config.js contains all constants used in tests

HOME TASK
1. Walk through the provided materials (official documentation, video) to understand how WDIO works and the main benefits of the tool.
2. Create an initial setup of WDIO on the local machine
3. Create WDIO config if it does not exist and familiarize
3. Create first specs using the existing BDD scenario created in Module 1
4. Execute these tests using CLI in different browsers (Chrome, Firefox, Safari) in headless mode
5. Execute tests in parallel using 2 instances
6. Add the option to run tests 2 times before marking it as failed
7. Push the code to remote repository and create Merge Request

