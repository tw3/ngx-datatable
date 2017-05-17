import { EventEmitter } from '@angular/core';
import { SortDirection, SortType, SelectionType, TableColumn } from '../../types';
export declare class DataTableHeaderCellComponent {
    sortType: SortType;
    column: TableColumn;
    sortAscendingIcon: string;
    sortDescendingIcon: string;
    allRowsSelected: boolean;
    selectionType: SelectionType;
    headerHeight: number;
    sorts: any[];
    sort: EventEmitter<any>;
    select: EventEmitter<any>;
    columnContextmenu: EventEmitter<{
        event: MouseEvent;
        column: any;
    }>;
    sortFn: any;
    sortClass: string;
    sortDir: SortDirection;
    _sorts: any[];
    selectFn: any;
    readonly columnCssClasses: any;
    readonly name: string;
    readonly minWidth: number;
    readonly maxWidth: number;
    readonly width: number;
    onContextmenu($event: MouseEvent): void;
    readonly isCheckboxable: boolean;
    calcSortDir(sorts: any[]): any;
    onSort(): void;
    calcSortClass(sortDir: SortDirection): string;
}
