System.register(['angular2/core', './mock-student', './logger.service'], function(exports_1, context_1) {
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
    var core_1, mock_student_1, logger_service_1;
    var StudentService, MockStudentService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_student_1_1) {
                mock_student_1 = mock_student_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            StudentService = (function () {
                function StudentService(_logger) {
                    this._logger = _logger;
                }
                StudentService.prototype.getName = function () {
                    // Real service
                    return mock_student_1.STUDENTS;
                };
                StudentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], StudentService);
                return StudentService;
            }());
            exports_1("StudentService", StudentService);
            MockStudentService = (function () {
                function MockStudentService() {
                }
                MockStudentService.prototype.getName = function () {
                    // Mock service
                    return [{ "id": 12, "name": "Mock-data1" }, { "id": 13, "name": "Mock-dat2" }];
                };
                MockStudentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MockStudentService);
                return MockStudentService;
            }());
            exports_1("MockStudentService", MockStudentService);
        }
    }
});
//# sourceMappingURL=student.service.js.map