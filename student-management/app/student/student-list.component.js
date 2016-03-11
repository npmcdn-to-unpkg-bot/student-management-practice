System.register(['angular2/core', 'angular2/router', './create-student.component', './edit-student.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, create_student_component_1, edit_student_component_1;
    var StudentListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (create_student_component_1_1) {
                create_student_component_1 = create_student_component_1_1;
            },
            function (edit_student_component_1_1) {
                edit_student_component_1 = edit_student_component_1_1;
            }],
        execute: function() {
            StudentListComponent = (function () {
                function StudentListComponent() {
                }
                StudentListComponent = __decorate([
                    core_1.Component({
                        selector: 'student-list',
                        // templateUrl: "app/student/student-list.component.html"
                        template: "\n  <div class=\"link\">\n    <nav>\n      <a [routerLink] = \"['CreateStudent']\">Link to CreateStudentComponent</a>\n      <a [routerLink] = \"['EditStudent']\">Link to EditStudentComponent</a>\n    </nav>\n    <router-outlet></router-outlet>\n  </div>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/create-student', name: 'CreateStudent', component: create_student_component_1.CreateStudentComponent },
                        { path: '/edit-student', name: 'EditStudent', component: edit_student_component_1.EditStudentComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], StudentListComponent);
                return StudentListComponent;
            }());
            exports_1("StudentListComponent", StudentListComponent);
        }
    }
});
//# sourceMappingURL=student-list.component.js.map