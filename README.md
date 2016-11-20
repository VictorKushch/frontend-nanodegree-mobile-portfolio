## Website Performance Optimization portfolio project

To get started, check out the live version [here](test.ku-64.com) and see Google test performance [here](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Ftest.ku-64.com%2F&tab=desktop). 

### Performance optimization steps done

####Grunt implementation

1. 3 versions of images created with "grunt-responsive-images"
1. Images compressed with "grunt-imageoptim" and "grunt-contrib-imagemin"
1. CSS optimized with "cssmin"
1. JS compressed with "uglify"

####HTML file
1. Additional CSS loaded on bottom with script
1. JS loading moved to the bottom
1. Smal CSS and JS scripts minified and embeded in HTML.
1. Sourceset attribute added to Images

####Pizza page JS optimization
1. Layout affecting variables set outside of loops
 

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
