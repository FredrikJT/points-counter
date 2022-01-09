# points-counter


## Development
npx tailwindcss -i ./src/styles.scss -o ./dist/output.css --watch
npm run start
## Release process
npm install -g angular-cli-ghpages  
ng build --base-href https://FredrikJT.github.io/points-counter/  
ngh --dir=dist/points-counter
