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

## Set InMemoryWebApi and Data Services

https://www.npmjs.com/package/angular-in-memory-web-api

- We to install the 'angular-in-memory-web-api' package

```shell
npm i angular-in-memory-web-api
```

- Create 'src\app\app-data' folder
- Create 'src\app\app-data\users' folder
- Create 'src\app\app-data\users\user.type.ts' file with content
- Create 'src\app\app-data\users\user.data.ts' file with content
- Create UsersService

```shell
ng generate service app-data/users/users --skip-tests --dry-run
```

- Create 'src\app\app-data\albums' folder
- Create 'src\app\app-data\albums\album.type.ts' file with content
- Create 'src\app\app-data\albums\album.data.ts' file with content
- Create 'src\app\app-data\app-data.ts' file with content
- Create AlbumsService

```shell
ng generate service app-data/albums/albums --skip-tests --dry-run
```

- Include InMemoryWebApiModule on 'src\app\app.module.ts' and configure the module
- Include HttpClientModule on 'src\app\app.module.ts'

# Create components and modules

- Create HomeModule and HomeComponent

```shell
ng generate module home --module app --routing false --dry-run

ng generate component home/Home --module home --skip-tests --dry-run
```

- Create UserModule and UserListComponent

```shell
ng generate module user --module app --routing false --dry-run

ng generate component user/UserList --module user --skip-tests --dry-run
```

- Create AlbumModule and AlbumListComponent

```shell
ng generate module album --module app --routing false --dry-run

ng generate component album/AlbumList --module album --skip-tests --dry-run
```

## Include MatTabsModule from Angular Material

https://v16.material.angular.io/components/tabs/overview

- Import the MatTabsModule into the AngularMaterialModule

## Configure the router with routes

- Add routes to 'src\app\app-routing.module.ts'
- Add a 'router-outlet' directive into AppComponent template

## Use the MatTabsComponent

- Configure the AppComponent to include a links property
- Configure the AppComponent template to use the MatTabs component

## Add NotFound modules, component and logic

```shell
ng generate module notFound --module app --routing false --dry-run

ng generate component not-found/notFound --module not-found --skip-tests --dry-run
```

## Improve NotFoundComponent UI and include home navigation

https://material.angular.io/components/card/overview
https://material.angular.io/components/button/overview

- Import the MatCardModule into the AngularMaterialModule
- Import the MatButtonModule into the AngularMaterialModule
- Import the AngularMaterialModule into the NotFoundModule
- Import the RouterModule into the NotFoundModule
- Improve NotFoundComponent UI, using MatCard and MatButton components
- Use the .app-name element on AppComponent template as a home link

## Fix Angular Material Theme fonts

- On 'src\styles.scss' add '@include mat.all-component-typographies();' rule
- On 'src\styles.scss' add 'color: mat.get-theme-color($exercise-part3-dark-theme, foreground, text);' for the dark theme

## Improve UI with MatCard on HomeComponent, AlbumListComponent and UserListComponent

- Import the AngularMaterialModule into the HomeModule
- Improve UI with MatCard on HomeComponent
- Import the AngularMaterialModule into the AlbumModule
- Improve UI with MatCard on AlbumListComponent
- Import the AngularMaterialModule into the UserModule
- Improve UI with MatCard on UserListComponent
- Fix application title, does anyone notice this ☺

## Render Albums on AlbumListComponent

https://material.angular.io/components/list/overview
https://material.angular.io/components/icon/overview
https://fonts.google.com/icons

- Inject AlbumsService on AlbumListComponent
- Create an albums$ property on AlbumListComponent
- Import the MatListModule into the AngularMaterialModule
- Import the MatIconModule into the AngularMaterialModule
- Use a MatList component to render the albums

## Render Users on UserListComponent

- On 'src\app\app-data\users\user.type.ts' lets create a type UserIdT out of UserT
- On 'src\app\app-data\users\users.service.ts' lets expose an usersId$ that maps users$ to a less complex type

- Inject UsersService on UserListComponent
- Create an usersId$ property on UserListComponent
- Use a MatList component to render the users

## Add filter functionality to AlbumListComponent

https://material.angular.io/components/input/overview

- Import the MatInputModule into the AngularMaterialModule
- Import the FormsModule into the AlbumModule
- Add a filterValue property to the AlbumListComponent
- Add a filter with a MatFormField component
- Implement the filter logic
- Add a ng-template for an empty albums scenario

## Add filter functionality to UserListComponent

- Import the FormsModule into the UserModule
- This time DO NOT include a filterValue property, we will use a template reference
- Add a filter with a MatFormField component
- Implement the filter logic
- Add a ng-template for an empty users scenario

## Add a loading indicator

https://material.angular.io/components/progress-spinner/overview

- Import the MatInputModule into the AngularMaterialModule
- Add a loading template using the MatSpinner component on AlbumListComponent and UserListComponent

## Add nested routes and navigate from template on AlbumListComponents

- Create AlbumDetailComponent

```shell
ng generate component album/AlbumDetail --module album --skip-tests --dry-run
```

- Add a 'children' property on the routes with the 'albums' path
- Include the new configuration to navigate to a child route, add a navigation parameter
- Import the RouterModule into the AlbumModule
- Add the routerLink directive into AlbumListComponent template
- Add the router-outlet directive into AlbumListComponent template
- On AlbumDetailComponent get the value of the navigation parameter and render it on the template

## Add nested routes and navigate from template on UserListComponents

- Create UserDetailComponent

```shell
ng generate component user/UserDetail --module user --skip-tests --dry-run
```

- Add a 'children' property on the routes with the 'users' path
- Include the new configuration to navigate to a child route, add a navigation parameter
- Import the RouterModule into the UserModule
- Extend UserIdT type to select 'id' property from UserT
- Update UsersService.usersId$ logic to get the user id
- Add a click event into UserListComponent template and pass the user id
- Create a method 'selectUser' on UserListComponent to handle the click event
- Add logic on selectUser to programmatically navigate to the child route
- Add the router-outlet directive into AlbumListComponent template
- On UserDetailComponent get the value of the navigation parameter and render it on the template

## Extend AlbumDetailComponent UI to retrieve album details

- Create reactive logic to get the album details. Here we will use a reactive approach to react to actions
- Create a albumSelectedSubject$$ Subject that allow to reactively emit a selected album Id
- Create an albumSelected$ observable from albumSelectedSubject$$ that emits albums ids over time
- Create a selectAlbum method that expose functionality from the AlbumsService to programmatically select an album
- Create a albumDetail$ observable that will react to emissions of albums$ and albumSelected$ to retrieve the desired album
- Use the albumSelected$ observable on AlbumDetailComponent to get the data

## Extend UserDetailComponent UI to retrieve user details

- Follow the last approach to retrieve and render user details

## Improve layout on AlbumListComponent and UserListComponent

https://material.angular.io/components/grid-list/overview

- Import the MatGridListModule into the AngularMaterialModule
- Add a MatGridList component into AlbumListComponent template
- Add styles on 'src\styles.scss' to change scroll appearance
- Add styles to 'src\app\album\album-list\album-list.component.scss' to improve MatGridTile component

## Use the BreakpointObserver to change layout on AlbumListComponent based on viewport size

https://material.angular.io/cdk/layout/overview

- Import the LayoutModule into the AngularMaterialModule
- Inject the breakpointObserver service into AlbumListComponent
- Create isAtLeastMediumBreakpoint$ observable out of the observe method from the
  breakpointObserver service
- Subscribe to the isAtLeastMediumBreakpoint$ observable into the AlbumListComponent template and update MatGridList component logic

## Improve layout on UserListComponent and use the BreakpointObserver to change layout based on viewport size

- Note: first fix AlbumListComponent so isAtLeastMediumBreakpoint$ observable is configured on ngOnInit life cicle hook, it is a good practice to have simplest constructors
- Follow the last approach to improve the UI on UserListComponent
- Note: this time we will not map the BreakpointState, so you got to see this scenario

## Hide AlbumListComponent and UserListComponent when they are not needed

- On AlbumListComponent and UserListComponent wire activate and deactivate events to set routerOutletIsActivated property
- Extend and improve layout logic using the routerOutletIsActivated property

## Improve AlbumDetailComponent and UserDetailComponent UI

https://material.angular.io/components/divider/overview

- Import the MatDividerModule into the AngularMaterialModule
- Use MatCard and MatList components to create the UI

## Create an AuthenticateSystemUser service to fake user authentication and authorization

- Create a 'src\app\entities\systemUserType.type.ts' file with an enum definition SystemUserTypeE and a SystemUserTypeT type definition
- Create authenticateUserService

```shell
ng generate service services/authenticateSystemUser --skip-tests --dry-run
```
