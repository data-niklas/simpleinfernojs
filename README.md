# SimpleInfernoJS
This small project aims to help you setup InfernoJS with just 2 Javascript files.<br>
No transpiling / npm / ... needed!<br>
https://github.com/infernojs/inferno

Files can be found on jsdelivr or other cdn's:

File 1: The main InfernoJS file:
- https://cdn.jsdelivr.net/npm/inferno/dist/index.esm.js<br>

File 2: The InfernoJS createElement file:
- https://cdn.jsdelivr.net/npm/inferno-create-element/dist/index.esm.js

When using the files on your own server (you downloaded the files), the imports need to be slightly modified:

Replace every <br>
   - import * from "./inferno*"<br>
   
with<br>
  - import * from "./inferno*path.js"<br>

Next:
InfernoJS can be used in the following way<br>
https://github.com/infernojs/inferno/tree/master/packages/inferno-create-element
