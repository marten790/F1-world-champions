# F1WorldChampions

## First time setup

- Make sure you have [NodeJS](https://nodejs.org/en/download/) installed
- run `npm i` in the root of the project to install npm packages

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server auto open browser

Run `npm run start` for a dev server. Your default browser will automatically open. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Code coverage

Code coverage can be seen after running `npm run test` and navigating to the root coverage folder and opening the html file in your browser
eg. `./coverage/f1-world-champions/index.html`

## Coverage exclusions

Api and files without methods were excluded.
APIs were excluded because they would be tested by the API creators
Files without methods are not tested because we only test `units` of code to assure stablility in the project.

## Improvments

Initial API call can be stored in localStorage to allow faster future loading.

## Notes

- Decided to not make the year winners page a routing child for champions page because it doesnt seem to have a logical place as a child so I made it a page of its own. `champions/winners/{year}` doesnt make sense
- If champoins page results are in localStorage you can avoid route checking for winner to highligh table row when required.

## Wireframes

![Inital wireframe for a starting point](./src/assets/wireframe.jpg)
