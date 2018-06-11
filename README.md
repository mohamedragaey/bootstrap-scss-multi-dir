## Welcome to Bootstrap multi direction

this npm package is build for bootstrap 4 scss
## File Structure of the package
```
| bootstrap-multi-direction
|   - dist/
|       - css/
|           -bootstrap.css
|           -bootstrap.min.css
|           -bootstrap.min.css.map
|           -bootstrap-rtl.css
|           -bootstrap-rtl.min.css.map
|   - scss/
|       - mixins/
|       - utilities/
|       - ...
|       - ...
|       - bootstrap.scss
|       - bootstrap-rtl.scss
|   - gulpfile.js
|   - .gitignore
|   - _config.yml
|   - gulpfile.js
|   - LICENSE
|   - package.json
|   - README.md
|   - yarn.lock

```
##Install
all You need to do is to run one ot these commands in your terminal in the project root 
* Using NPM `npm i bootstrap-multi-direction -save`
* Using Yarn `yarn add bootstrap-multi-direction`

##Usage

### IF you need to use the hole file
Use any of these two files with LTR direction sites 
* un-minified version 
`@import '~bootstrap-multi-direction/dist/bootstrap.css'`
* minified version
`@import '~bootstrap-multi-direction/dist/bootstrap.min.css'`

Use any of these two files with RTL direction sites

* un-minified version 
`@import '~bootstrap-multi-direction/dist/bootstrap-rtl.css'`
* minified version
`@import '~bootstrap-multi-direction/dist/bootstrap-rtl.min.css'`

### IF you need to use only some components
all you have to do is just import the component in your style.scss

style.scss

```scss
@import '~bootstrap-multi-direction/scss/alert.scss'

@import '~bootstrap-multi-direction/scss/card.scss'

@import '~bootstrap-multi-direction/scss/grid.scss'
```

if you need to make an rtl file just in your 

style-rtl.scss

```css
$direction:rtl;
@import 'style.scss';
```

 
### IF you need to use the same dir variable as bootstrap uses 

* Example 
```css
div{
float: $default;
} 
//this will be in LTR 
div{
float: left;
} 
//this will be in RTL
div{
float: right;
} 
```
```css
div{
float: $opposite;
} 
//this will be in LTR 
div{
float: right;
} 
//this will be in RTL
div{
float: left;
} 
```