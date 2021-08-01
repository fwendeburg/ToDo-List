/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    static #nextId = 0;

    constructor(name) {
        this.name = name;
        this.tasks = [];
        this.id = Project.#nextId++;
    }

    getTaskIndex(taskId) {
        let index = -1;

        for (let i = 0; i < this.tasks.length; i++) {
            if (taskId == this.tasks[i].getId()) {
                index = i;
            }
        }
        
        return index;
    }

    deleteTask(taskPos) {
        this.tasks.splice(taskPos, 1);
    }

    updateTaskInfo(taskPos, name, desc, dueDate, priority) {
        this.tasks[taskPos].setAttributes(name, desc, dueDate, priority);
    }

    getTask(taskId) {
        let task = null;

        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].getId() == taskId) {
                task = this.tasks[i];
            }
        }

        return task;
    }

    getTasks() {
        return this.tasks
    }

    addTask(task) {
        this.tasks.push(task);
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub0RvLUxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVG9Eby1MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ub0RvLUxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ub0RvLUxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ub0RvLUxpc3QvLi9zcmMvUHJvamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6IlByb2plY3QuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICAgIHN0YXRpYyAjbmV4dElkID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICAgICAgdGhpcy5pZCA9IFByb2plY3QuI25leHRJZCsrO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2tJbmRleCh0YXNrSWQpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAtMTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0YXNrSWQgPT0gdGhpcy50YXNrc1tpXS5nZXRJZCgpKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRhc2sodGFza1Bvcykge1xyXG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKHRhc2tQb3MsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRhc2tJbmZvKHRhc2tQb3MsIG5hbWUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy50YXNrc1t0YXNrUG9zXS5zZXRBdHRyaWJ1dGVzKG5hbWUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYXNrKHRhc2tJZCkge1xyXG4gICAgICAgIGxldCB0YXNrID0gbnVsbDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhc2tzW2ldLmdldElkKCkgPT0gdGFza0lkKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrID0gdGhpcy50YXNrc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhc2s7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFza3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3NcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHRhc2spIHtcclxuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==