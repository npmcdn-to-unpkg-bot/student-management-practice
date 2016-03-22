System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, Rx_1;
    var StudentService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            //Inject Http service
            StudentService = (function () {
                function StudentService(http) {
                    this.http = http;
                }
                // private _studentUrl = 'app/student/student.json'; //URL to JSON file
                StudentService.prototype.getStudentLocalStorage = function () {
                    var studentLocalStorage = localStorage.getItem('student');
                    if (!studentLocalStorage) {
                        studentLocalStorage = "{}";
                        var studentLocalStorageJson = JSON.parse(studentLocalStorage);
                        if (!studentLocalStorageJson.list) {
                            studentLocalStorageJson.list = [];
                        }
                        if (!studentLocalStorageJson.classes) {
                            studentLocalStorageJson.classes = ["A", "B", "C", "D", "E", "F"];
                        }
                        // localStorage.setItem('student', JSON.stringify(studentLocalStorageJson));
                        this.saveStudentStg(studentLocalStorageJson);
                    }
                    var studentStg = JSON.parse(localStorage.getItem('student'));
                    return studentStg;
                };
                StudentService.prototype.saveStudentStg = function (studentStg) {
                    localStorage.setItem('student', JSON.stringify(studentStg));
                };
                StudentService.prototype.getStudent = function () {
                    var _this = this;
                    // console.debug("TEST2:", this.http.get(this._studentUrl));
                    // get data from JSON
                    // return this.http.get(this._studentUrl)
                    //           .map(res => {
                    //             return res.json().data;
                    //           });
                    return Rx_1.Observable.create(function (observe) {
                        var studentStg = _this.getStudentLocalStorage();
                        observe.next(studentStg.list);
                        observe.complete();
                    });
                };
                // find a student has id === currentStudent id
                StudentService.prototype.findStudentById = function (id) {
                    var student = null;
                    return this.getStudent().map(function (students) {
                        for (var i = 0; i < students.length; i++) {
                            if (students[i].id === id) {
                                student = students[i];
                            }
                        }
                        return student;
                    });
                };
                /**
                 * [saveStudent description]
                 * @param {[type]} student [description]
                 */
                StudentService.prototype.saveStudent = function (student) {
                    // localStorage.setItem('students', JSON.stringify(this.students));
                    // this._router.navigate(['StudentList']);
                    console.log("save:", student);
                };
                StudentService.prototype.createNewStudent = function (student) {
                    var studentStg = this.getStudentLocalStorage();
                    student.id = (Math.random() * 10000) + 1;
                    studentStg.list.push(student);
                    this.saveStudentStg(studentStg);
                };
                StudentService.prototype.deleteStudent = function (studentId) {
                    var studentStg = this.getStudentLocalStorage();
                    studentStg.list.forEach(function (student, idx) {
                        console.debug("studentId:", studentId, student.id);
                        console.log("DELETE1:", idx);
                        if (student.id === studentId) {
                            console.log("DELETE:", idx);
                            studentStg.list.splice(idx, 1);
                        }
                    });
                    this.saveStudentStg(studentStg);
                };
                StudentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], StudentService);
                return StudentService;
            }());
            exports_1("StudentService", StudentService);
        }
    }
});
//# sourceMappingURL=student.service.js.map