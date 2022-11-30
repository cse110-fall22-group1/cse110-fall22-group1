## Pipeline Status

![text](admin/cipipeline/pipeline-diagram.png)

* Pipeline is triggered by push and pull request
* Once triggered the code is checkedout and build
* All unit tests are run
* JSDoc generates documentation
* Linter is run
* Lastly HTML validator is run - the pipeline functionality works correctly, however there are some errors to be fixed in the HTML code