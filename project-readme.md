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
Video 17: Binding form elements to Employee object
Video 18: Email validation using email directive
Video 19: Validation using regex 'pattern' directive
Video 20: Validation check on radio button
Video 21: Adding required validation dynamically
    a)*instead of [required]="expression" , i used [attr.required] in phone and ng-required in email of create component.html. required is attribute hence used [attr.required] format.
    b)*using [required]="expression" was throwing internal error in console.
Video 22: Validation on isActive checkbox
Video 23: Validation on select box, and filling select box with invalid placeholder 'select department'
Video 24: Diff b/w value and ngValue
    a)value binds to string even [value] also binds to string for eg in our options of department
    b)[ngValue] binds to object
    c)so to bind to null object we use [ngValue]="null" and not [value]="null" since later means binding to null string.
Video 25: In template driven form writing our own custom form using directive
    a)*use Validator as parent interface
    b)*use providers and selector properties in Directive using @Directive. NG_VALIDATORS is set of all validators in angular.
    c)declare this directive in our component's module which is in this case app.module.ts
    d)use errors property on formControl i.e department to know is our customValidation passed or not
Video 26: Reusable Custom validator
    a)*if we want to pass value to validator then read next steps
    b)use validator like appSelectValidator="-101" in html
    c)use @Input() appSelectValidator; as property in directive
    d)*selector and name of input property should be same
    e)So angular passes -101 to input property internally
    f)if want to use aother name for input property then use like '@Input('appSelectValidator') defaultValue: string;'
Video 27: Reusable Confirm Password Custom Validator
    a)*send name of one input to directive and apply that directive on second input
    b)using passed name to directive get value of that input from dom using control.parent.get('password') method
Video 28.1 : Making validation robust on password and confirmPassword
    a)adding help-block class to password field also when user enters diff. password
    b)use ngModelGroup to group both fields
Video 28.2 : when user enters correct password and confirmpassword and then changes password then there is  no   
    validation error lets see why
    a)since validator directive is added only to confirmPassword we have to manually trigger validation on password
    b)*Manually trigger validation - use updateValueAndValidity() mehtod on control of confirmPassword when change event is emitted on password field. Change event will trigger when we click outside of input so we will use input event
Video 29: Custom Validation on ngModelGroup
    a)*significance: no need to add validation in password and confirmPassword separately
    b)since its applied on group that ngModdelGroup is passed to customvalidator class
    c)ngModelGroup should be child to ngForm
Video 30: Adding service .Removed password and confirm password field by kudvenkat in previous video 
    a)*from maintainability point of view use providers of module/component to add services
Video 31: saving employee temporary and routing to list employees
Video 32: ngswitch to display department name instead of id
    a)*its a combination of 3 directives ngSwitch,ngSwitchCase,ngSwitchDefault
    b)*we are not using * in ngSwitch because its not a structural directive
Video 33: Passing data from parent to child using @Input() decoarator
Video 34: Input(@Input decorator we used in video 33) property change detection
    a)ways to detect and react on changes : i)using property setter and ii)ngOnChanges lifecycle hook
    b)using ngOnChanges with functions onChanges(changes: SimpleChanges)