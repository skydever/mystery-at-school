# mystery-at-school

The idea to create a learning app, based on the homwork my sun has to do, was born ...

... and in addition to that i want to learn how to work with angular and github

## the vision (to be extended)

Show a story, some text that our little users should read. After the reading ask some questions about
the content of the text. She/He should solve a mystery by answering the questions.

Example (the raw JSON for a mystery):

```
{
    mysteryText: 'Tom wrote a funny and mysterious story.',
    questions: [
        {
            question: 'Who wrote a story?',
            answer: 'Tom'
        },{
            question: 'How is the story Tom wrote?',
            possibilities: [
                    'funny and mysterious',
                    'boring'
            ],
            answer: 'funny and mysterious'
        }
    ]
}
```

### special: add a word learning box game

Define a list of words. The game: Show a word to our little users and after some secs she/he should type the word she/he just read.
Make boxes (1 to 5). All words start in box 1. If a word was typed correctly, it goes to box 2, from there to box 3 and so on. When
all words are in box 5 and from there typed correctly, they go back to box 1 with a star. For every round (box 1 to 5) a word goes, 
it gets a star. Collect as many stars as possible. If all words have at least one star, let the user play [super mario](https://fir.sh/projects/jsnes/) 
for a little time period (the more stars, the longer) :-)

- - -

# MysteryAtSchool

## Tech

- [Angular CLI](http://cli.angular.io)
- [Material Design](http://material.angular.io)
- [Angular Router](http://vsavkin.com/)
  - lazy loading
  - preloading
- AoT is coming soon (when the CLI is ready)
- contribute if you have nice technical stuff to add
- or just contribute if you like :-)

## Angular CLI

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17.

### Development server
Run `ng serve` for a dev server. Navigate to [`http://localhost:4200/`](http://localhost:4200/). The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
