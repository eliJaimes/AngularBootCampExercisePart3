# First commit

## Create application

```shell
ng new ExercisePart3 --standalone false --skip-tests --dry-run
> Which stylesheet format would you like to use? SCSS
> Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? N
```

https://angular.io/cli

## Do clean up

- Sort imports
- Clean app.component.\* files
- Remove unnecessary editor files

## Install Angular Material

https://material.angular.io/guide/getting-started

```shell
ng add @angular/material --dry-run
> Would you like to proceed? Yes
> Choose a prebuilt theme name, or "custom" for a custom theme: Custom
> Set up global Angular Material typography styles? (y/N) y
> Include the Angular animations module? Include and enable animations
```

- This time 'Roboto' font was include by Angular Material

## Update Angular Material custom theme

https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors

- On 'src\styles.scss' update theme variables name
- Change the primary color
- Extend the configuration to provide a dark theme
- Manually set the background according to the theme

https://material.angular.io/guide/theming-your-components

## Create an Angular Material module

- It is a good practice to Isolate the Angular Material Module and in there import needed Angular Material components

```shell
ng generate module AngularMaterial --module app --routing false --flat --dry-run
```

https://angular.io/cli/generate#module-command

## Import our first Angular Material Component

https://material.angular.io/components/toolbar/overview

- Import the MatToolbarModule into the AngularMaterialModule
- Use a pattern that allow us to import and export desired modules
- Use a Toolbar component on the AppComponent template

## Import our second Angular Material Component

- Let's import and export the MatSlideToggleModule
- Extend our toolbar component to include our switch theme toggle
- Configure the toggle with some options

## Set switch theme logic

- Inject the DOCUMENT token to have access to the DOM
- Inject the Renderer2 class to manipulate DOM elements
- From this point we have a basic setup and we can start the Angular Tour Of Heroes tutorial
