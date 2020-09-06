Commands :
    1)Create project : 'ng new 'ProjetName' --skip-tests true'
    2)Install Bootstrap 3.0 :'npm install bootstrap@3 --save' and add '
    './node_modules/bootstrap/dist/css/bootstrap.min.css' to angular.json style property
    3)Skip test file for one component: 'ng generate component --skipTests=true component-name'
    4)install ngx-bootstrap(prerequisite bootstrap 3/4) : npm install ngx-bootstrap --save

Links:  
    1)ngx-bootstrap -https://angular.io/resources?category=development or https://valor-software.com/ngx-bootstrap/#/documentation#getting-started
    
Video 2:
    a)Skip spec files by setting skipTests:true in angular.json. Done in command 1)

Video 3:(routing and navigation) 
    a)Basic routing

Video 4:User of <base href="/"></base> in index.html

Video 5: Using ngForm directive to fill form
Video 6: Added bootstrap radio buttons
Video 7: Checked Radio button by default
Video 8: Checked Checkbox by default
Video 9: select box
Video 10: select box data from array
Video 11: Angular Datepicker
    a)why its not gud to use browser builtin datepicker : bcoz diff browser shows diff ux
    b)updating app.module to support ngx-datepicker and also using bsDatepicker in html
Video 12: Configuring DatePicker
    a)Add BsDatePickerConfig to component.module
    b)Date picker showing one date prior date in interpolation on create page
    c)placement of datepicker
Video 13: ngIf structural directive on button
Video 14: ngNativeValidate on form tag to enable browser built in validation and required on input tags
Video 15: Local template variable to access six validation properties :touched,untouched,dirty,pristine,valid,invalid. Local template variable is #fullNameControl in create.component.html
Video 16: displaying validation messages
    a)bootstrap classes used has-error,control-label,help-block
    b)two ways to add classes : using [class.has-success] or [ngClass]="{'has-success':true}"
    c)if any field is invalid then whole form is invalid hence we use local reference of ngForm i.e employeeForm in save button
Video 17:
