meteor-easy-d3
==============

Create easy d3 graphs with a helper

###How to use

**Important** use d3bar helper between {{#constant}}.

````
{{#constant}}
  {{#d3bar name='name-here' data=dataArray}}{{/d3bar}}
{{/constant}}
````

1. Variables:

  The helper have two variables.

  * name: The name of the graph.
  * data: an array with an especific formatting.
  
2. Object format.

The array passed must have objects like this.

`var arrayToD3 = [{key:'1', size:'23'}, {key:'2', size:'76'}, {key:'3', size:'3'}, {key:'4', size:'53'}, {key:'5', size:'19'}]`
