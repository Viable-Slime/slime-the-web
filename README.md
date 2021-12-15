# A Project EdTechJoker creation

[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Lit](https://img.shields.io/badge/-Lit-324fff?style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyBmaWxsPSIjZmZmIiB2aWV3Qm94PSIwIDAgMTYwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTYwIDgwdjgwbC00MC00MHptLTQwIDQwdjgwbDQwLTQwem0wLTgwdjgwbC00MC00MHptLTQwIDQwdjgwbDQwLTQwem0tNDAtNDB2ODBsNDAtNDB6bTQwLTQwdjgwbC00MC00MHptLTQwIDEyMHY4MGwtNDAtNDB6bS00MC00MHY4MGw0MC00MHoiLz48L3N2Zz4%3D)](https://lit.dev/)
[![#HAXTheWeb](https://img.shields.io/badge/-HAXTheWeb-999999FF?style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyBpZD0iZmVhMTExZTAtMjEwZC00Y2QwLWJhMWQtZGZmOTQyODc0Njg1IiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE4NC40IDEzNS45NyI+PGRlZnM+PHN0eWxlPi5lMWJjMjAyNS0xODAwLTRkYzItODc4NS1jNDZlZDEwM2Y0OTJ7ZmlsbDojMjMxZjIwO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iZTFiYzIwMjUtMTgwMC00ZGMyLTg3ODUtYzQ2ZWQxMDNmNDkyIiBkPSJNNzguMDcsODMuNDVWNTVIODYuMnY4LjEzaDE2LjI2djQuMDdoNC4wN1Y4My40NUg5OC40VjY3LjE5SDg2LjJWODMuNDVaIi8+PHBvbHlnb24gcG9pbnRzPSIxNTMuMTMgNjMuNyAxNTMuMTMgNTEuMzkgMTQwLjU0IDUxLjM5IDE0MC41NCAzOS4wOSAxMjcuOTUgMzkuMDkgMTI3Ljk1IDI2Ljc5IDEwMi43OCAyNi43OSAxMDIuNzggMzkuMDkgMTE1LjM2IDM5LjA5IDExNS4zNiA1MS4zOSAxMjcuOTUgNTEuMzkgMTI3Ljk1IDYzLjcgMTQwLjU0IDYzLjcgMTQwLjU0IDc2IDEyNy4zNiA3NiAxMjcuMzYgODguMyAxMTQuNzggODguMyAxMTQuNzggMTAwLjYxIDEwMi4xOSAxMDAuNjEgMTAyLjE5IDExMi45MSAxMjcuMzYgMTEyLjkxIDEyNy4zNiAxMDAuNjEgMTM5Ljk1IDEwMC42MSAxMzkuOTUgODguMyAxNTIuNTQgODguMyAxNTIuNTQgNzYgMTY1LjcyIDc2IDE2NS43MiA2My43IDE1My4xMyA2My43Ii8+PHBvbHlnb24gcG9pbnRzPSIzMy4xMyA2My43IDMzLjEzIDUxLjM5IDQ1LjcyIDUxLjM5IDQ1LjcyIDM5LjA5IDU4LjMxIDM5LjA5IDU4LjMxIDI2Ljc5IDgzLjQ4IDI2Ljc5IDgzLjQ4IDM5LjA5IDcwLjg5IDM5LjA5IDcwLjg5IDUxLjM5IDU4LjMxIDUxLjM5IDU4LjMxIDYzLjcgNDUuNzIgNjMuNyA0NS43MiA3NiA1OC44OSA3NiA1OC44OSA4OC4zIDcxLjQ4IDg4LjMgNzEuNDggMTAwLjYxIDg0LjA3IDEwMC42MSA4NC4wNyAxMTIuOTEgNTguODkgMTEyLjkxIDU4Ljg5IDEwMC42MSA0Ni4zMSAxMDAuNjEgNDYuMzEgODguMyAzMy43MiA4OC4zIDMzLjcyIDc2IDIwLjU0IDc2IDIwLjU0IDYzLjcgMzMuMTMgNjMuNyIvPjwvc3ZnPg==)](https://haxtheweb.org/)

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## About the sorting question tag

- use the tag in your html as shown below.
- dark attribute -> dark theme
- celebrate -> plays audio and shows confetti if 100% correct
- shame -> plays audio and throws rotten tomatoes if > 100% correct
- mute -> stops audio from playing for celebrate and shame
- no-background -> stops background gif from displaying for celebrate and shame
- disabled -> stops options from being re-ordered, disables reset button and submit button

### More on the Sorting question tag

- is a custom web component that when used as directed will generate an element that displays options in a randomized order
- the user can use the mouse to drag and drop elements or the up and down arrows on the options themselves
- the submit button checks the order of options and then can celebrate or shame the user
- the reset button removes all indicators of correct/ incorrect answers and re-randomizes the order of the options
- when using this tag code the options in the correct order and the tag will automatically randomize them

## Sorting Question usage

```bash

<script type="module">

import @viable-slime/SlimeSortingQuestion.js

</script>

<sorting-question dark celebrate shame mute no-background question="Sort the following in order">

<sorting-option></sorting-option>

<sorting-option></sorting-option>

<sorting-option></sorting-option>

</sorting-question>

```

## Coded By Viable-Slime (Sean Brill)

- IST 402 at Penn State taught by Bryan Ollendyke

## Quickstart

To get started:

```bash
npm install
npm run start
# requires node 10 & npm 6 or higher
```

Navigate to the HAX page to see it in context. Make sure to change `rename-me` in ALL parts of the repo to your project name.

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project
- `format` fixes linting and formatting errors

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.
