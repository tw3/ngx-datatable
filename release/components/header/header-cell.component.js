"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var types_1 = require("../../types");
var utils_1 = require("../../utils");
var DataTableHeaderCellComponent = (function () {
    function DataTableHeaderCellComponent() {
        this.sort = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
        this.sortFn = this.onSort.bind(this);
    }
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "sorts", {
        get: function () {
            return this._sorts;
        },
        set: function (val) {
            this._sorts = val;
            this.sortDir = this.calcSortDir(val);
            this.sortClass = this.calcSortClass(this.sortDir);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "columnCssClasses", {
        get: function () {
            var cls = 'datatable-header-cell';
            if (this.column.sortable)
                cls += ' sortable';
            if (this.column.resizeable)
                cls += ' resizeable';
            if (this.column.cssClasses)
                cls += ' ' + this.column.cssClasses;
            var sortDir = this.sortDir;
            if (sortDir) {
                cls += " sort-active sort-" + sortDir;
            }
            return cls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "name", {
        get: function () {
            return this.column.name || this.column.prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "minWidth", {
        get: function () {
            return this.column.minWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "maxWidth", {
        get: function () {
            return this.column.maxWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "width", {
        get: function () {
            return this.column.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellComponent.prototype, "isCheckboxable", {
        get: function () {
            return this.column.checkboxable &&
                this.column.headerCheckboxable &&
                this.selectionType === types_1.SelectionType.checkbox;
        },
        enumerable: true,
        configurable: true
    });
    DataTableHeaderCellComponent.prototype.calcSortDir = function (sorts) {
        var _this = this;
        if (sorts && this.column) {
            var sort = sorts.find(function (s) {
                return s.prop === _this.column.prop;
            });
            if (sort)
                return sort.dir;
        }
    };
    DataTableHeaderCellComponent.prototype.onSort = function () {
        if (!this.column.sortable)
            return;
        var newValue = utils_1.nextSortDir(this.sortType, this.sortDir);
        this.sort.emit({
            column: this.column,
            prevValue: this.sortDir,
            newValue: newValue
        });
    };
    DataTableHeaderCellComponent.prototype.calcSortClass = function (sortDir) {
        if (sortDir === types_1.SortDirection.asc) {
            return "sort-btn sort-asc " + this.sortAscendingIcon;
        }
        else if (sortDir === types_1.SortDirection.desc) {
            return "sort-btn sort-desc " + this.sortDescendingIcon;
        }
        else {
            return "sort-btn";
        }
    };
    return DataTableHeaderCellComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DataTableHeaderCellComponent.prototype, "sortType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTableHeaderCellComponent.prototype, "column", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTableHeaderCellComponent.prototype, "sortAscendingIcon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTableHeaderCellComponent.prototype, "sortDescendingIcon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTableHeaderCellComponent.prototype, "allRowsSelected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DataTableHeaderCellComponent.prototype, "selectionType", void 0);
__decorate([
    core_1.HostBinding('style.height.px'),
    core_1.Input(),
    __metadata("design:type", Number)
], DataTableHeaderCellComponent.prototype, "headerHeight", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], DataTableHeaderCellComponent.prototype, "sorts", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTableHeaderCellComponent.prototype, "sort", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTableHeaderCellComponent.prototype, "select", void 0);
__decorate([
    core_1.HostBinding('class'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], DataTableHeaderCellComponent.prototype, "columnCssClasses", null);
__decorate([
    core_1.HostBinding('attr.title'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], DataTableHeaderCellComponent.prototype, "name", null);
__decorate([
    core_1.HostBinding('style.minWidth.px'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], DataTableHeaderCellComponent.prototype, "minWidth", null);
__decorate([
    core_1.HostBinding('style.maxWidth.px'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], DataTableHeaderCellComponent.prototype, "maxWidth", null);
__decorate([
    core_1.HostBinding('style.width.px'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], DataTableHeaderCellComponent.prototype, "width", null);
DataTableHeaderCellComponent = __decorate([
    core_1.Component({
        selector: 'datatable-header-cell',
        template: "\n    <div>\n      <label\n        *ngIf=\"isCheckboxable\" \n        class=\"datatable-checkbox\">\n        <input \n          type=\"checkbox\"\n          [attr.checked]=\"allRowsSelected\"\n          (change)=\"select.emit(!allRowsSelected)\" \n        />\n      </label>\n      <span \n        *ngIf=\"!column.headerTemplate\"\n        class=\"datatable-header-cell-wrapper\">\n        <span\n          class=\"datatable-header-cell-label draggable\"\n          (click)=\"onSort()\"\n          [innerHTML]=\"name\">\n        </span>\n      </span>\n      <ng-template\n        *ngIf=\"column.headerTemplate\"\n        [ngTemplateOutlet]=\"column.headerTemplate\"\n        [ngOutletContext]=\"{ \n          column: column, \n          sortDir: sortDir,\n          sortFn: sortFn\n        }\">\n      </ng-template>\n      <span\n        (click)=\"onSort()\"\n        [class]=\"sortClass\">\n      </span>\n    </div>\n  "
    })
], DataTableHeaderCellComponent);
exports.DataTableHeaderCellComponent = DataTableHeaderCellComponent;
//# sourceMappingURL=header-cell.component.js.map