Commands :
    1)Create project : 'ng new 'ProjetName' --skip-tests true'
    2)Install Bootstrap 3.0 :'npm install bootstrap@3 --save' and add '
    './node_modules/bootstrap/dist/css/bootstrap.min.css' to angular.json style property
    3)Skip test file for one component: 'ng generate component --skipTests=true component-name'
    4)install ngx-bootstrap(prerequisite bootstrap 3/4) : npm install ngx-bootstrap --save
    5)Install json-server : npm -g install json-server

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
Video 35: Property setter change detection and reaction to changes
    a)* function name in this case employee should be same in case of get and set methods
Video 36: When to use ngOnChanges or property setter
    a)*when we want to intercept changes to all field then use ngOnChanges as the code to react have to be only in onChanges() method else use setter property of each field for which we want tracking
Video 37: Using @Output decorator to emit event or to pass data to parent component 
Video 38: passing child properties without @Output decorator to paret component
    a)*we do exactly same thing of video 37 using template reference for eg. #childComponent is template reference
    b)#childComponent in <app-display-employee> stores the instance of class which is bound to that selector which is DisplayEmployee class.
    c)now in div we have direct access to all public prperties of DisplayEmployee.
    d)we are also setting template reference for h1 tag and setting its innerhtml in div
Video 39: Route guard to stop user from navigating to list if form is dirty
    a)*Use @ViewChild to access Ngform directive using selector of NgForm
    b)routing guard canDeactivate does not work when routing to external link
Video 40: Routing with params using Router module
Video 41: Reading params using ActivatedRoute module. Two approaches to read params namely :
    a)*snapshot approach : when routing to different component just like list to employee as we did in video 40
    b)*Observable approach: when routing to same component which we will cover in video 42
Video 42: Reading params using Observable
    a)how to subscribe to angular route param change
    b)*why to use observable to read params : when employee-component loads first time it enters ngOnInit() but when we click next employee button then the component is not initialized. So we have to subscribe to changes in route.
    c)*we dont have to unsubscribe to observable as angular router takes care of that part.
Video 43: Optional Route params
    a)*we can pass as many optional params as we want
Video 44: Required VS Optional parameter
    a)prefer optional when params are complex just like we are searching employee then url can be like '/list/vikas/male/gujarat/isActive' for required, but with this route configuration will fail to identify which is name and which is sate so we use optional like 'list;name=vikas;gender=male;state=gujarat;active=isActive'
Video 45: Reset form so that discard alert does not come on saving the form after filling it
    a)there are two ways: 1)in html and 2)programatically is also two ways
    b)use reset() method on ngForm template reference like (ngSubmit)="saveEmployee();employeeForm.reset()"
    c.1)passing employeeForm to function : saveEmployee(employeeForm: NgForm)
    c.2)getting template reference in component using @ViewChild decorator
    d)*if we want some fields to be set to default value on reset we can pass object for those values like reset({name:'default',..}) etc
Video 46: Problem : on resetting form data the values of employees that was saved gets null to reset
    a)*this is bcoz of javascript referencing. To solve this use Object.assign method to copy object
Video 47: Created Custom Filter Pipes. 
    a)But pipes should not be used for filter and sort data instead they should be used only to format data.Why? see video 48,49,50
    b)after video 48,49 the reason of not using pipe for filtering is bcoz pure pipe does not track object property value and impure pipes are way bad as they execute unexpectedly
Video 48: What is pure pipe - enabled by default - very fast as it tracks value of primitive type and only references of object type for change
    a)*set using pure property in @pipe ecorator
    b)*its is executed when pure change is detected
    c)*pure change-when change happens on primitive type(string,number,boolean) or on object reference(Array,Object,Date)
    d)Understand pure change on primitive type: i)Create a button in list-employees ii)change name of first employee to any lowercase on button click iii)we will see as name changes pipe of uppercase is applied
    e)understand pure change on objects: i) create button with method 'changeEmployeesObjectReference()' ii)since out employeeFilter is registerd with employeesArray we'll search term 'j' and john appears iii) Now click button and we will see employeeFilter working. Becuase we changed the reference of employees. Now if we didn't had assigned the new object to employees array then filter would not have worked
    f)to prove point d) and e) lets first search employee using 'j' then click change name filter won't work but name has actually been changed as we wrote name change code in button click
Video 49: Impure Pipe - enable by setting pure:false property - its very slow as it tracks every property value of object
    a)search for 'j' click change name button and we won't see jordan employee but it is there in employees object so to make this work set pure to false in our custom filter
    b)to prove why it is very slow : bind function to mousemove event and set counter in our custom filer
Video 50: Removing pipe filtering and adding filteration in list-component itself.
Video 51: Query params to be retained for previous page
    a)search 'j' click john and then come back to list again and search term will not be there anymore
    b)to pass query params in html we use like this '[queryParams]="{'parameterName':'parameterValue'}"'. It should be used where [routerLink] is there
    c)so when we go back to list we have to get searchTerm from url this can be achieved in html using queryParamsHandling="preserve". to do programatically set {queryParamsHandling:'preserve'} as second object in router.navigate.
    d)queryParamsHandling="merge" means when we click back to list button then we want some queryparams to get merged to existing params that we have in url
    e)queryParamsHandling="preserve" will keep the params in url if we go back to list but will not add any new param
    f)we are loosing params on nextEmployee so keep them lets set preserve programatically
Video 52: Reading query params using queryParamMap of activated route
    a)snapshot and observable in both ways we can read data
Video 53: Create observable from an array and using rxjs/delay to imitate n/w latency
    a)*since on subscribe to observable we are setting to employees and in next few instructions we are assigning it to filteredEployees which we use to display and subscribe works asynchronously , it doesn't work
Video 54: Anuglar resolve guard
    a)because of delay added while fetching employees in employeesservice, the list employee component takes 2 sec to publish data. so what if we click create and then click list again we will go to list page and wait to see data.
    b)Resolver will wait for link to get activated untill it has data to show in list component
Video 55: Enable router navigation events to monitor and debug router issues
    a)see console for navigation events that occur because of enableTracing property
Video 56: Letting user know that some process is going on by showing loader
    a)From video 55)a) we have 3 events navigationStart and navigationEnd and navigationCancel
    b)we subscribe to these events and make reaction like loading spinner
Video 57: Angular canActivate guard to make user go to pagenotfound when he edits id in url on employee-details html
    a)*to convert an object to boolean use '!!'. when object is not null it returns true
Video 58: Adding button view, edit and delete in display employee component
Video 59: Editing Existing Employee
    a)*edit router for creating employee so that it can also support editing by sending id with url
    b)*getting id from url and identifying whether id is existing in list or not
    c)modifying code adding and editing employee in employee-service
Video 60: Delete works as normal but it does not when we search and delete
    a)*in contructor of listcomponent we creating filteredEmployees
    b)In normal delete we are deleting from listEmployees array in employee service and we assign same listEmployees object to filteredEmployees so list in html updated at runtime
    c)but when there is something in search box 'set searchTerm' method gets called which sets filteredEmployees to new employees array object hence deleting from this array will not change listEmployees array in employeeservice so html will not update a runtime
    d)so we need id of employee in listComponent which we will get using @Output decorator
Video 61: Angular accordion
    a)removing body and footer div from dom(using *ngIf="panelExpanded") when panelExpanded gets false on panelHeading click
    b)this removal from dom is bad from performance so we will use hidden property
    c)In video 62 we will make this accordion general to be used by other components
Viddeo 62: Making reusable accordion using technique like content projection also called transclusion
    a)*using ng-content(in accordion.html) tag as placeholder for variable html code and since we use two tags of it , it is called multi slot content projection
    b)by using css selector(such as class selector,element selector,attribute selector) we can tell accordion in which ng-content we want to place our content, we use class selector using same class selector name in parent component to place div's, see displayComponent.html
Video 63: Fake rest api using json-server
Video 64: Basic client server architecture
Video 65: HttpClient tutorial
    a)*by default httpclient returns json object so we don't have to manually convert response to json
Video 66: HttpClient ErrorHandling
    a)its good to handle error where its generated in our case its employeeService
    b)*new ErrorObservable('error string') was removed in rxjs 6 so we used throwError;
    c)to handle errors we use pipeable operator or lettable operators
    d)here we are using catchError operator and passing function that throws 'throwError'
Video 67: Error Handling for resolver if rest request fails
    a)our listEmployees gets data from resolver as given in appmodule so if resolver gets error on that data while fetching it from server then we can handle it in this way
    b)*one way to get employees array and error from resolver is by making it returning observable of an Object which we named 'resolved-employee-list.model.ts' and get object of that in listcomponent
    c)*