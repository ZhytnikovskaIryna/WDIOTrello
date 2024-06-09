<h3>Run Dropbox API test:</h3>

1. Open 'API' folder
2. Create .env file in the root of a project and insert code:

```javascript
TOKEN =
  //here you insert the token that you will learn how to generate in the next steps;
```

2. Go to https://www.dropbox.com/login.
3. Sign in to a Dropbox account using the following credentials:

- email: `testingTrelloEpam@ukr.net`
- password: `Trello@123`

4. Go to https://www.dropbox.com/developers/apps/info/hurcp1kqq0jdwc6
5. Find the button `Generate` in Generated access token section on the opened Settings page.
6. Generate a new temporary token, copy it and paste it in `.env` file. You should have something like this (note that the token provided in the example will not work):

```javascript
TOKEN = "******";
```

2. Execute command

```bash
npm install
```

3. execute command

```bash
npm test
```

4. see results in terminal

<h3>Per-commit hooks</h3>
Before commiting new code pre-commit should be executed manually.
 Please run :

```javascript
  npm run precommit
```

Prettier code formatting and Eslint code fixes will be executed as the result.
