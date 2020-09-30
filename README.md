# starter-sass-site-files
Starting file package for a sass site, with a Gulp workflow. This [YouTube Course by The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iEwigam3gTjU_7IA3W2WZA) is a great refresher on the basics of SASS.

## Setup

This set up will output a **disc** folder from Gulp, based on the **src** folder. 

```
1) npm i gulp-cli -g

2a) npm i

or if error… 

2b) npm i -D autoprefixer cssnano gulp gulp-clean-css gulp-concat gulp-imagemin gulp-postcss gulp-sass gulp-sourcemaps gulp-terser
```

## Includes 

* **src**

* `package.json` *Includes dev dependencies*

* `gulpfile.js` *This holds all the rules for the code processing. Input `gulp default` to start.*

* **src**

    * **html** *Contains one base html file to start, with full meta tags.*

    * **img**

        * `og-image.jpg` *(should be replaced)*
        
        * `logo.svg` *Left as a reminder to add a new version of this file from [Favicon Generator](https://favicon.io/favicon-generator/)*
        

    * **JS**

    * **scss**
            
        * **1-utils**
                
            * `_functions.scss`
            
            * `_mixins.scss`
            
            * `_variables.scss`


        * **2-base**

            * `_buttons.scss`
                
            * `_global.scss`
                
            * `_links.scss`
                
            * `_typography.scss`

        * **3-mainComponents**

            * `_404hero.scss`
            
            * `_footer.scss`
            
            * `_homeHero.scss`
            
            * `_interiorHero.scss`
            
            * `_navbar.scss`


        * **4-subComponents**

        * **5-pages**

            * `_404.scss`
            
            * `_about.scss`
            
            * `_contact.scss`
            
            * `_home_.scss`
            
            * `_Services_.scss`
        
        * `main.scss` *This imports all the scss files.*