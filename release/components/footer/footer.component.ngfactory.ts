/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../../build/components/footer/footer.component';
import * as import3 from './pager.component.ngfactory';
import * as import4 from '../../../../build/components/footer/pager.component';
const styles_DataTableFooterComponent:any[] = ([] as any[]);
export const RenderType_DataTableFooterComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_DataTableFooterComponent,
  data: {}
}
);
function View_DataTableFooterComponent_1(log:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (log()(),import0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (log()(),import0.ɵted((null as any),[
      '\n          ',
      ' ',
      ' / \n        '
    ]
    ))
  ]
  ,(null as any),(check,view) => {
    var comp:any = view.component;
    check(view,0,0);
    const currVal_0:any = comp.selectedCount.toLocaleString();
    const currVal_1:any = comp.selectedMessage;
    check(view,1,0,currVal_0,currVal_1);
  });
}
export function View_DataTableFooterComponent_0(log:any):import0.ɵViewDefinition {
  return import0.ɵvid(2,[
    (log()(),import0.ɵted((null as any),['\n    '])),
      (log()(),import0.ɵeld(0,(null as any),(null as any),13,'div',([] as any[]),[[
        2,
        'height',
        'px'
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (log()(),import0.ɵdid(139264,(null as any),0,import1.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngClass: [
        0,
        'ngClass'
      ]
    },(null as any))),
    (log()(),import0.ɵpod(['selected-count'])),
    (log()(),import0.ɵted((null as any),['\n      '])),
      (log()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'page-count'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (log()(),import0.ɵted((null as any),['\n        '])),
    (log()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DataTableFooterComponent_1)),
    (log()(),import0.ɵdid(8192,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any))),
    (log()(),import0.ɵted((null as any),[
      '\n\n        ',
      ' ',
      '\n      '
    ]
    )),
    (log()(),import0.ɵted((null as any),['\n      '])),
      (log()(),import0.ɵeld(0,(null as any),(null as any),2,'datatable-pager',[[
        'class',
        'datatable-pager'
      ]
      ],[[
        3,
        'hidden',
        0
      ]
      ],[[
        (null as any),
        'change'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:import2.DataTableFooterComponent = view.component;
      if (('change' === eventName)) {
        const pd_0:any = ((<any>comp.page.emit($event)) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },import3.View_DataTablePagerComponent_0,import3.RenderType_DataTablePagerComponent)),
    (log()(),import0.ɵdid(24576,(null as any),0,import4.DataTablePagerComponent,([] as any[]),{
      pagerLeftArrowIcon: [
        0,
        'pagerLeftArrowIcon'
      ]
      ,
      pagerRightArrowIcon: [
        1,
        'pagerRightArrowIcon'
      ]
      ,
      pagerPreviousIcon: [
        2,
        'pagerPreviousIcon'
      ]
      ,
      pagerNextIcon: [
        3,
        'pagerNextIcon'
      ]
      ,
      size: [
        4,
        'size'
      ]
      ,
      count: [
        5,
        'count'
      ]
      ,
      page: [
        6,
        'page'
      ]

    }
    ,{change: 'change'})),
    (log()(),import0.ɵted((null as any),['\n      '])),
    (log()(),import0.ɵted((null as any),['\n    '])),
    (log()(),import0.ɵted((null as any),['\n  ']))
  ]
  ,(check,view) => {
    var comp:import2.DataTableFooterComponent = view.component;
    const currVal_1:any = check(view,3,0,comp.selectedMessage);
    check(view,2,0,currVal_1);
    const currVal_2:any = comp.selectedMessage;
    check(view,8,0,currVal_2);
    const currVal_6:any = comp.pagerLeftArrowIcon;
    const currVal_7:any = comp.pagerRightArrowIcon;
    const currVal_8:any = comp.pagerPreviousIcon;
    const currVal_9:any = comp.pagerNextIcon;
    const currVal_10:any = comp.pageSize;
    const currVal_11:any = comp.rowCount;
    const currVal_12:any = comp.curPage;
    check(view,12,0,currVal_6,currVal_7,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12);
  },(check,view) => {
    var comp:import2.DataTableFooterComponent = view.component;
    const currVal_0:any = comp.footerHeight;
    check(view,1,0,currVal_0);
    check(view,5,0);
    const currVal_3:any = comp.rowCount.toLocaleString();
    const currVal_4:any = comp.totalMessage;
    check(view,9,0,currVal_3,currVal_4);
    const currVal_5:boolean = !comp.isVisible;
    check(view,11,0,currVal_5);
  });
}
function View_DataTableFooterComponent_Host_0(log:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (log()(),import0.ɵeld(0,(null as any),(null as any),1,'datatable-footer',[[
        'class',
        'datatable-footer'
      ]
    ],(null as any),(null as any),(null as any),View_DataTableFooterComponent_0,RenderType_DataTableFooterComponent)),
    (log()(),import0.ɵdid(24576,(null as any),0,import2.DataTableFooterComponent,([] as any[]),(null as any),(null as any)))
  ]
  ,(check,view) => {
    check(view,1,0);
  },(check,view) => {
    check(view,0,0);
  });
}
export const DataTableFooterComponentNgFactory:import0.ComponentFactory<import2.DataTableFooterComponent> = import0.ɵccf('datatable-footer',import2.DataTableFooterComponent,View_DataTableFooterComponent_Host_0);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovZGV2L3RlbXAvbmd4LWRhdGF0YWJsZS9uZ3gtZGF0YXRhYmxlLmZvcmsvYnVpbGQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9kZXYvdGVtcC9uZ3gtZGF0YXRhYmxlL25neC1kYXRhdGFibGUuZm9yay9idWlsZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovZGV2L3RlbXAvbmd4LWRhdGF0YWJsZS9uZ3gtZGF0YXRhYmxlLmZvcmsvYnVpbGQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cy5EYXRhVGFibGVGb290ZXJDb21wb25lbnQuaHRtbCIsIm5nOi8vL0M6L2Rldi90ZW1wL25neC1kYXRhdGFibGUvbmd4LWRhdGF0YWJsZS5mb3JrL2J1aWxkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMuRGF0YVRhYmxlRm9vdGVyQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsIlxuICAgIDxkaXZcbiAgICAgIFtuZ0NsYXNzXT1cInsnc2VsZWN0ZWQtY291bnQnOiBzZWxlY3RlZE1lc3NhZ2V9XCJcbiAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwiZm9vdGVySGVpZ2h0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZS1jb3VudFwiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cInNlbGVjdGVkTWVzc2FnZVwiPlxuICAgICAgICAgIHt7c2VsZWN0ZWRDb3VudC50b0xvY2FsZVN0cmluZygpfX0ge3tzZWxlY3RlZE1lc3NhZ2V9fSAvIFxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAge3tyb3dDb3VudC50b0xvY2FsZVN0cmluZygpfX0ge3t0b3RhbE1lc3NhZ2V9fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGF0YXRhYmxlLXBhZ2VyXG4gICAgICAgIFtwYWdlckxlZnRBcnJvd0ljb25dPVwicGFnZXJMZWZ0QXJyb3dJY29uXCJcbiAgICAgICAgW3BhZ2VyUmlnaHRBcnJvd0ljb25dPVwicGFnZXJSaWdodEFycm93SWNvblwiXG4gICAgICAgIFtwYWdlclByZXZpb3VzSWNvbl09XCJwYWdlclByZXZpb3VzSWNvblwiXG4gICAgICAgIFtwYWdlck5leHRJY29uXT1cInBhZ2VyTmV4dEljb25cIlxuICAgICAgICBbcGFnZV09XCJjdXJQYWdlXCJcbiAgICAgICAgW3NpemVdPVwicGFnZVNpemVcIlxuICAgICAgICBbY291bnRdPVwicm93Q291bnRcIlxuICAgICAgICBbaGlkZGVuXT1cIiFpc1Zpc2libGVcIlxuICAgICAgICAoY2hhbmdlKT1cInBhZ2UuZW1pdCgkZXZlbnQpXCI+XG4gICAgICA8L2RhdGF0YWJsZS1wYWdlcj5cbiAgICA8L2Rpdj5cbiAgIiwiPGRhdGF0YWJsZS1mb290ZXI+PC9kYXRhdGFibGUtZm9vdGVyPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNLUTtJQUE4QjtNQUFBO01BQUE7TUFBQTtJQUFBO0lBQUE7Ozs7SUFBOUI7SUFBOEI7SUFBQTtJQUFBOzs7OztJQUx0QztNQUNJO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFBOzs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUNFO0lBQ2lDO01BQ2pDO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0I7SUFDdEI7SUFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBRU87TUFBQTtNQUFBO01BQUE7SUFBQTtJQUFBO0lBR0g7TUFDTjtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQVNFO1FBQUE7UUFBQTtNQUFBO01BVEY7SUFBQTtJQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQVMrQjtJQUNiO0lBQ2Q7Ozs7SUFwQko7SUFERixlQUNFLFNBREY7SUFJVTtJQUFOLGVBQU0sU0FBTjtJQU9BO0lBQ0E7SUFDQTtJQUNBO0lBRUE7SUFDQTtJQUZBO0lBTEYsZ0JBQ0UsVUFDQSxVQUNBLFVBQ0EsVUFFQSxXQUNBLFdBRkEsVUFMRjs7O0lBUkE7SUFGRixlQUVFLFNBRkY7SUFHRTtJQUdTO0lBQUE7SUFBQTtJQVlQO0lBUkYsZ0JBUUUsU0FSRjs7Ozs7TUNYTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQUE7OztJQUFBOztJQUFBOzs7In0=
