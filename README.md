# Instructions
- Use `npm install` command to install dependencies.

- Execute command `npm run start` to run webpack development server and top open preview in the browser.

- Execute command `npm run build` to create plugin distribution files in the `dist` directory.

- Execute command `npm run lint` to run liner

# How it works
Github repo downlader takes two attributes from custom element tag, named `github-repo`.

``` <github-repo data-user="devballteam" data-update="2019-01-30"></github-repo>```

where:
**data-user**: github account's name;
**data-update**: selects repositories updated at this date;

It creates a Custom HTML Element with the table element, which contains all the data about the selected repository. The app also has error handling. Users will be informed if the repository is not found or there are connection problems.