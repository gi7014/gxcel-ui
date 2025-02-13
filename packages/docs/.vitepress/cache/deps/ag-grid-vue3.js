import {
  ALWAYS_SYNC_GLOBAL_EVENTS,
  BaseComponentWrapper,
  ModuleRegistry,
  RowApiModule,
  VanillaFrameworkOverrides,
  _ALL_EVENTS,
  _ALL_GRID_OPTIONS,
  _combineAttributesAndGridOptions,
  _error,
  _getCallbackForEvent,
  _processOnChange,
  _warn,
  createGrid
} from "./chunk-5TCGG3HX.js";
import {
  createElementBlock,
  createVNode,
  defineComponent,
  getCurrentInstance,
  isProxy,
  isReactive,
  isRef,
  markRaw,
  mergeDefaults,
  mergeModels,
  onMounted,
  onUnmounted,
  openBlock,
  ref,
  render,
  toRaw,
  toRefs,
  useModel,
  useTemplateRef,
  watch
} from "./chunk-7BFP2LLL.js";

// ../../node_modules/.pnpm/ag-grid-vue3@33.0.4_vue@3.5.13_typescript@5.7.2_/node_modules/ag-grid-vue3/dist/main.mjs
var V = Object.defineProperty;
var W = (d, n, e) => n in d ? V(d, n, { enumerable: true, configurable: true, writable: true, value: e }) : d[n] = e;
var y = (d, n, e) => W(d, typeof n != "symbol" ? n + "" : n, e);
var R = class _R {
  static getComponentDefinition(n, e) {
    let o;
    return typeof n == "string" ? o = this.searchForComponentInstance(e, n) : o = { extends: defineComponent({ ...n }) }, o || _error(114, { component: n }), o.extends ? (o.extends.setup && (o.setup = o.extends.setup), o.extends.props = this.addParamsToProps(o.extends.props)) : o.props = this.addParamsToProps(o.props), o;
  }
  static addParamsToProps(n) {
    return !n || Array.isArray(n) && n.indexOf("params") === -1 ? n = ["params", ...n || []] : typeof n == "object" && !n.params && (n.params = {
      type: Object
    }), n;
  }
  static createAndMountComponent(n, e, o, l) {
    const i = _R.getComponentDefinition(n, o);
    if (!i)
      return;
    const { vNode: s, destroy: t, el: r } = this.mount(
      i,
      { params: Object.freeze(e) },
      o,
      l || {}
    );
    return {
      componentInstance: s.component.proxy,
      element: r,
      destroy: t
    };
  }
  static mount(n, e, o, l) {
    let i = createVNode(n, e);
    i.appContext = { ...o.appContext, provides: l };
    let s = document.createElement("div");
    return render(i, s), { vNode: i, destroy: () => {
      s && render(null, s), s = null, i = null;
    }, el: s };
  }
  static searchForComponentInstance(n, e, o = 10, l = false) {
    let i = null, s = 0, t = n.parent;
    for (; !i && t && t.components && ++s < o; )
      t.components && t.components[e] && (i = t.components[e]), t = t.parent;
    for (s = 0, t = n.parent; !i && t && t.$options && ++s < o; ) {
      const r = t;
      r.$options && r.$options.components && r.$options.components[e] ? i = r.$options.components[e] : r[e] && (i = r[e]), t = t.parent;
    }
    for (s = 0, t = n.parent; !i && t && ++s < o; ) {
      if (t.exposed) {
        const r = t;
        r.exposed && r.exposed[e] ? i = r.exposed[e] : r[e] && (i = r[e]);
      }
      t = t.parent;
    }
    if (!i) {
      const r = n.appContext.components;
      r && r[e] && (i = r[e]);
    }
    return !i && !l ? (_error(114, { component: e }), null) : i;
  }
};
var ve = class extends BaseComponentWrapper {
  constructor(e, o) {
    super();
    y(this, "parent");
    y(this, "provides");
    this.parent = e, this.provides = o;
  }
  createWrapper(e) {
    const o = this;
    class l extends ce {
      init(t) {
        super.init(t);
      }
      hasMethod(t) {
        var u, v;
        const r = i.getFrameworkComponentInstance();
        return r[t] ? true : ((u = r.$.exposed) == null ? void 0 : u[t]) != null || ((v = r.exposed) == null ? void 0 : v[t]) != null || r.$.setupState[t] != null;
      }
      callMethod(t, r) {
        var S, w;
        const u = this.getFrameworkComponentInstance(), v = i.getFrameworkComponentInstance();
        if (v[t])
          return v[t].apply(u, r);
        {
          const m = ((S = u.$.exposed) == null ? void 0 : S[t]) || ((w = u.exposed) == null ? void 0 : w[t]) || u.$.setupState[t];
          return m == null ? void 0 : m.apply(u, r);
        }
      }
      addMethod(t, r) {
        i[t] = r;
      }
      processMethod(t, r) {
        return t === "refresh" && (this.getFrameworkComponentInstance().params = r[0]), this.hasMethod(t) ? this.callMethod(t, r) : t === "refresh";
      }
      createComponent(t) {
        return o.createComponent(e, t);
      }
    }
    const i = new l();
    return i;
  }
  createComponent(e, o) {
    return R.createAndMountComponent(e, o, this.parent, this.provides);
  }
  createMethodProxy(e, o, l) {
    return function() {
      return e.hasMethod(o) ? e.callMethod(o, arguments) : (l && _warn(233, { methodName: o }), null);
    };
  }
  destroy() {
    this.parent = null;
  }
};
var ce = class {
  constructor() {
    y(this, "componentInstance");
    y(this, "element");
    y(this, "unmount");
  }
  getGui() {
    return this.element;
  }
  destroy() {
    this.getFrameworkComponentInstance() && typeof this.getFrameworkComponentInstance().destroy == "function" && this.getFrameworkComponentInstance().destroy(), this.unmount();
  }
  getFrameworkComponentInstance() {
    return this.componentInstance;
  }
  init(n) {
    const { componentInstance: e, element: o, destroy: l } = this.createComponent(n);
    this.componentInstance = e, this.unmount = l, this.element = o.firstElementChild ?? o;
  }
};
var ge = class extends VanillaFrameworkOverrides {
  constructor(e) {
    super("vue");
    y(this, "parent");
    this.parent = e;
  }
  /*
   * vue components are specified in the "components" part of the vue component - as such we need a way to determine
   * if a given component is within that context - this method provides this
   * Note: This is only really used/necessary with cellRendererSelectors
   */
  frameworkComponent(e, o) {
    let l = R.searchForComponentInstance(this.parent, e, 10, true) ? e : null;
    if (!l && o && o[e]) {
      const i = o[e];
      l = R.searchForComponentInstance(this.parent, i, 10, true) ? i : null;
    }
    return l;
  }
  isFrameworkComponent(e) {
    return typeof e == "object";
  }
};
function ye() {
  return {
    gridOptions: {},
    modules: [],
    // @START_DEFAULTS@
    statusBar: void 0,
    sideBar: void 0,
    suppressContextMenu: void 0,
    preventDefaultOnContextMenu: void 0,
    allowContextMenuWithControlKey: void 0,
    columnMenu: void 0,
    suppressMenuHide: void 0,
    enableBrowserTooltips: void 0,
    tooltipTrigger: void 0,
    tooltipShowDelay: void 0,
    tooltipHideDelay: void 0,
    tooltipMouseTrack: void 0,
    tooltipShowMode: void 0,
    tooltipInteraction: void 0,
    popupParent: void 0,
    copyHeadersToClipboard: void 0,
    copyGroupHeadersToClipboard: void 0,
    clipboardDelimiter: void 0,
    suppressCopyRowsToClipboard: void 0,
    suppressCopySingleCellRanges: void 0,
    suppressLastEmptyLineOnPaste: void 0,
    suppressClipboardPaste: void 0,
    suppressClipboardApi: void 0,
    suppressCutToClipboard: void 0,
    columnDefs: void 0,
    defaultColDef: void 0,
    defaultColGroupDef: void 0,
    columnTypes: void 0,
    dataTypeDefinitions: void 0,
    maintainColumnOrder: void 0,
    enableStrictPivotColumnOrder: void 0,
    suppressFieldDotNotation: void 0,
    headerHeight: void 0,
    groupHeaderHeight: void 0,
    floatingFiltersHeight: void 0,
    pivotHeaderHeight: void 0,
    pivotGroupHeaderHeight: void 0,
    allowDragFromColumnsToolPanel: void 0,
    suppressMovableColumns: void 0,
    suppressColumnMoveAnimation: void 0,
    suppressMoveWhenColumnDragging: void 0,
    suppressDragLeaveHidesColumns: void 0,
    suppressGroupChangesColumnVisibility: void 0,
    suppressMakeColumnVisibleAfterUnGroup: void 0,
    suppressRowGroupHidesColumns: void 0,
    colResizeDefault: void 0,
    suppressAutoSize: void 0,
    autoSizePadding: void 0,
    skipHeaderOnAutoSize: void 0,
    autoSizeStrategy: void 0,
    components: void 0,
    editType: void 0,
    singleClickEdit: void 0,
    suppressClickEdit: void 0,
    readOnlyEdit: void 0,
    stopEditingWhenCellsLoseFocus: void 0,
    enterNavigatesVertically: void 0,
    enterNavigatesVerticallyAfterEdit: void 0,
    enableCellEditingOnBackspace: void 0,
    undoRedoCellEditing: void 0,
    undoRedoCellEditingLimit: void 0,
    defaultCsvExportParams: void 0,
    suppressCsvExport: void 0,
    defaultExcelExportParams: void 0,
    suppressExcelExport: void 0,
    excelStyles: void 0,
    quickFilterText: void 0,
    cacheQuickFilter: void 0,
    includeHiddenColumnsInQuickFilter: void 0,
    quickFilterParser: void 0,
    quickFilterMatcher: void 0,
    applyQuickFilterBeforePivotOrAgg: void 0,
    excludeChildrenWhenTreeDataFiltering: void 0,
    enableAdvancedFilter: void 0,
    alwaysPassFilter: void 0,
    includeHiddenColumnsInAdvancedFilter: void 0,
    advancedFilterParent: void 0,
    advancedFilterBuilderParams: void 0,
    suppressAdvancedFilterEval: void 0,
    suppressSetFilterByDefault: void 0,
    enableCharts: void 0,
    chartThemes: void 0,
    customChartThemes: void 0,
    chartThemeOverrides: void 0,
    chartToolPanelsDef: void 0,
    chartMenuItems: void 0,
    loadingCellRenderer: void 0,
    loadingCellRendererParams: void 0,
    loadingCellRendererSelector: void 0,
    localeText: void 0,
    masterDetail: void 0,
    keepDetailRows: void 0,
    keepDetailRowsCount: void 0,
    detailCellRenderer: void 0,
    detailCellRendererParams: void 0,
    detailRowHeight: void 0,
    detailRowAutoHeight: void 0,
    context: void 0,
    dragAndDropImageComponent: void 0,
    dragAndDropImageComponentParams: void 0,
    alignedGrids: void 0,
    tabIndex: void 0,
    rowBuffer: void 0,
    valueCache: void 0,
    valueCacheNeverExpires: void 0,
    enableCellExpressions: void 0,
    suppressTouch: void 0,
    suppressFocusAfterRefresh: void 0,
    suppressBrowserResizeObserver: void 0,
    suppressPropertyNamesCheck: void 0,
    suppressChangeDetection: void 0,
    debug: void 0,
    loading: void 0,
    overlayLoadingTemplate: void 0,
    loadingOverlayComponent: void 0,
    loadingOverlayComponentParams: void 0,
    suppressLoadingOverlay: void 0,
    overlayNoRowsTemplate: void 0,
    noRowsOverlayComponent: void 0,
    noRowsOverlayComponentParams: void 0,
    suppressNoRowsOverlay: void 0,
    pagination: void 0,
    paginationPageSize: void 0,
    paginationPageSizeSelector: void 0,
    paginationAutoPageSize: void 0,
    paginateChildRows: void 0,
    suppressPaginationPanel: void 0,
    pivotMode: void 0,
    pivotPanelShow: void 0,
    pivotMaxGeneratedColumns: void 0,
    pivotDefaultExpanded: void 0,
    pivotColumnGroupTotals: void 0,
    pivotRowTotals: void 0,
    pivotSuppressAutoColumn: void 0,
    suppressExpandablePivotGroups: void 0,
    functionsReadOnly: void 0,
    aggFuncs: void 0,
    suppressAggFuncInHeader: void 0,
    alwaysAggregateAtRootLevel: void 0,
    aggregateOnlyChangedColumns: void 0,
    suppressAggFilteredOnly: void 0,
    removePivotHeaderRowWhenSingleValueColumn: void 0,
    animateRows: void 0,
    cellFlashDuration: void 0,
    cellFadeDuration: void 0,
    allowShowChangeAfterFilter: void 0,
    domLayout: void 0,
    ensureDomOrder: void 0,
    enableRtl: void 0,
    suppressColumnVirtualisation: void 0,
    suppressMaxRenderedRowRestriction: void 0,
    suppressRowVirtualisation: void 0,
    rowDragManaged: void 0,
    suppressRowDrag: void 0,
    suppressMoveWhenRowDragging: void 0,
    rowDragEntireRow: void 0,
    rowDragMultiRow: void 0,
    rowDragText: void 0,
    fullWidthCellRenderer: void 0,
    fullWidthCellRendererParams: void 0,
    embedFullWidthRows: void 0,
    groupDisplayType: void 0,
    groupDefaultExpanded: void 0,
    autoGroupColumnDef: void 0,
    groupMaintainOrder: void 0,
    groupSelectsChildren: void 0,
    groupLockGroupColumns: void 0,
    groupAggFiltering: void 0,
    groupTotalRow: void 0,
    grandTotalRow: void 0,
    suppressStickyTotalRow: void 0,
    groupSuppressBlankHeader: void 0,
    groupSelectsFiltered: void 0,
    showOpenedGroup: void 0,
    groupHideParentOfSingleChild: void 0,
    groupRemoveSingleChildren: void 0,
    groupRemoveLowestSingleChildren: void 0,
    groupHideOpenParents: void 0,
    groupAllowUnbalanced: void 0,
    rowGroupPanelShow: void 0,
    groupRowRenderer: void 0,
    groupRowRendererParams: void 0,
    treeData: void 0,
    rowGroupPanelSuppressSort: void 0,
    suppressGroupRowsSticky: void 0,
    pinnedTopRowData: void 0,
    pinnedBottomRowData: void 0,
    rowModelType: void 0,
    rowData: void 0,
    asyncTransactionWaitMillis: void 0,
    suppressModelUpdateAfterUpdateTransaction: void 0,
    datasource: void 0,
    cacheOverflowSize: void 0,
    infiniteInitialRowCount: void 0,
    serverSideInitialRowCount: void 0,
    suppressServerSideFullWidthLoadingRow: void 0,
    cacheBlockSize: void 0,
    maxBlocksInCache: void 0,
    maxConcurrentDatasourceRequests: void 0,
    blockLoadDebounceMillis: void 0,
    purgeClosedRowNodes: void 0,
    serverSideDatasource: void 0,
    serverSideSortAllLevels: void 0,
    serverSideEnableClientSideSort: void 0,
    serverSideOnlyRefreshFilteredGroups: void 0,
    serverSidePivotResultFieldSeparator: void 0,
    viewportDatasource: void 0,
    viewportRowModelPageSize: void 0,
    viewportRowModelBufferSize: void 0,
    alwaysShowHorizontalScroll: void 0,
    alwaysShowVerticalScroll: void 0,
    debounceVerticalScrollbar: void 0,
    suppressHorizontalScroll: void 0,
    suppressScrollOnNewData: void 0,
    suppressScrollWhenPopupsAreOpen: void 0,
    suppressAnimationFrame: void 0,
    suppressMiddleClickScrolls: void 0,
    suppressPreventDefaultOnMouseWheel: void 0,
    scrollbarWidth: void 0,
    rowSelection: void 0,
    cellSelection: void 0,
    rowMultiSelectWithClick: void 0,
    suppressRowDeselection: void 0,
    suppressRowClickSelection: void 0,
    suppressCellFocus: void 0,
    suppressHeaderFocus: void 0,
    selectionColumnDef: void 0,
    suppressMultiRangeSelection: void 0,
    enableCellTextSelection: void 0,
    enableRangeSelection: void 0,
    enableRangeHandle: void 0,
    enableFillHandle: void 0,
    fillHandleDirection: void 0,
    suppressClearOnFillReduction: void 0,
    sortingOrder: void 0,
    accentedSort: void 0,
    unSortIcon: void 0,
    suppressMultiSort: void 0,
    alwaysMultiSort: void 0,
    multiSortKey: void 0,
    suppressMaintainUnsortedOrder: void 0,
    icons: void 0,
    rowHeight: void 0,
    rowStyle: void 0,
    rowClass: void 0,
    rowClassRules: void 0,
    suppressRowHoverHighlight: void 0,
    suppressRowTransform: void 0,
    columnHoverHighlight: void 0,
    gridId: void 0,
    deltaSort: void 0,
    treeDataDisplayType: void 0,
    enableGroupEdit: void 0,
    initialState: void 0,
    theme: void 0,
    loadThemeGoogleFonts: void 0,
    getContextMenuItems: void 0,
    getMainMenuItems: void 0,
    postProcessPopup: void 0,
    processUnpinnedColumns: void 0,
    processCellForClipboard: void 0,
    processHeaderForClipboard: void 0,
    processGroupHeaderForClipboard: void 0,
    processCellFromClipboard: void 0,
    sendToClipboard: void 0,
    processDataFromClipboard: void 0,
    isExternalFilterPresent: void 0,
    doesExternalFilterPass: void 0,
    getChartToolbarItems: void 0,
    createChartContainer: void 0,
    focusGridInnerElement: void 0,
    navigateToNextHeader: void 0,
    tabToNextHeader: void 0,
    navigateToNextCell: void 0,
    tabToNextCell: void 0,
    getLocaleText: void 0,
    getDocument: void 0,
    paginationNumberFormatter: void 0,
    getGroupRowAgg: void 0,
    isGroupOpenByDefault: void 0,
    initialGroupOrderComparator: void 0,
    processPivotResultColDef: void 0,
    processPivotResultColGroupDef: void 0,
    getDataPath: void 0,
    getChildCount: void 0,
    getServerSideGroupLevelParams: void 0,
    isServerSideGroupOpenByDefault: void 0,
    isApplyServerSideTransaction: void 0,
    isServerSideGroup: void 0,
    getServerSideGroupKey: void 0,
    getBusinessKeyForNode: void 0,
    getRowId: void 0,
    resetRowDataOnUpdate: void 0,
    processRowPostCreate: void 0,
    isRowSelectable: void 0,
    isRowMaster: void 0,
    fillOperation: void 0,
    postSortRows: void 0,
    getRowStyle: void 0,
    getRowClass: void 0,
    getRowHeight: void 0,
    isFullWidthRow: void 0,
    // @END_DEFAULTS@
    // @START_EVENT_PROPS@
    "onColumn-everything-changed": void 0,
    "onNew-columns-loaded": void 0,
    "onColumn-pivot-mode-changed": void 0,
    "onPivot-max-columns-exceeded": void 0,
    "onColumn-row-group-changed": void 0,
    "onExpand-or-collapse-all": void 0,
    "onColumn-pivot-changed": void 0,
    "onGrid-columns-changed": void 0,
    "onColumn-value-changed": void 0,
    "onColumn-moved": void 0,
    "onColumn-visible": void 0,
    "onColumn-pinned": void 0,
    "onColumn-group-opened": void 0,
    "onColumn-resized": void 0,
    "onDisplayed-columns-changed": void 0,
    "onVirtual-columns-changed": void 0,
    "onColumn-header-mouse-over": void 0,
    "onColumn-header-mouse-leave": void 0,
    "onColumn-header-clicked": void 0,
    "onColumn-header-context-menu": void 0,
    "onAsync-transactions-flushed": void 0,
    "onRow-group-opened": void 0,
    "onRow-data-updated": void 0,
    "onPinned-row-data-changed": void 0,
    "onRange-selection-changed": void 0,
    "onCell-selection-changed": void 0,
    "onChart-created": void 0,
    "onChart-range-selection-changed": void 0,
    "onChart-options-changed": void 0,
    "onChart-destroyed": void 0,
    "onTool-panel-visible-changed": void 0,
    "onTool-panel-size-changed": void 0,
    "onModel-updated": void 0,
    "onCut-start": void 0,
    "onCut-end": void 0,
    "onPaste-start": void 0,
    "onPaste-end": void 0,
    "onFill-start": void 0,
    "onFill-end": void 0,
    "onCell-selection-delete-start": void 0,
    "onCell-selection-delete-end": void 0,
    "onRange-delete-start": void 0,
    "onRange-delete-end": void 0,
    "onUndo-started": void 0,
    "onUndo-ended": void 0,
    "onRedo-started": void 0,
    "onRedo-ended": void 0,
    "onCell-clicked": void 0,
    "onCell-double-clicked": void 0,
    "onCell-mouse-down": void 0,
    "onCell-context-menu": void 0,
    "onCell-value-changed": void 0,
    "onCell-edit-request": void 0,
    "onRow-value-changed": void 0,
    "onHeader-focused": void 0,
    "onCell-focused": void 0,
    "onRow-selected": void 0,
    "onSelection-changed": void 0,
    "onTooltip-show": void 0,
    "onTooltip-hide": void 0,
    "onCell-key-down": void 0,
    "onCell-mouse-over": void 0,
    "onCell-mouse-out": void 0,
    "onFilter-changed": void 0,
    "onFilter-modified": void 0,
    "onFilter-opened": void 0,
    "onAdvanced-filter-builder-visible-changed": void 0,
    "onSort-changed": void 0,
    "onVirtual-row-removed": void 0,
    "onRow-clicked": void 0,
    "onRow-double-clicked": void 0,
    "onGrid-ready": void 0,
    "onGrid-pre-destroyed": void 0,
    "onGrid-size-changed": void 0,
    "onViewport-changed": void 0,
    "onFirst-data-rendered": void 0,
    "onDrag-started": void 0,
    "onDrag-stopped": void 0,
    "onDrag-cancelled": void 0,
    "onRow-editing-started": void 0,
    "onRow-editing-stopped": void 0,
    "onCell-editing-started": void 0,
    "onCell-editing-stopped": void 0,
    "onBody-scroll": void 0,
    "onBody-scroll-end": void 0,
    "onPagination-changed": void 0,
    "onComponent-state-changed": void 0,
    "onStore-refreshed": void 0,
    "onState-updated": void 0,
    "onColumn-menu-visible-changed": void 0,
    "onContext-menu-visible-changed": void 0,
    "onRow-drag-enter": void 0,
    "onRow-drag-move": void 0,
    "onRow-drag-leave": void 0,
    "onRow-drag-end": void 0,
    "onRow-drag-cancel": void 0
    // @END_EVENT_PROPS@
  };
}
var Ce = (d, n) => {
  let e;
  return () => {
    const o = function() {
      d();
    };
    window.clearTimeout(e), e = window.setTimeout(o, n);
  };
};
function me(d) {
  return d && d.constructor && d.constructor.toString().substring(0, 5) === "class";
}
function h(d) {
  const n = (e) => Array.isArray(e) ? e.map((o) => n(o)) : isRef(e) || isReactive(e) || isProxy(e) ? n(toRaw(e)) : e && typeof e == "object" && Object.keys(e).length > 0 ? Object.keys(e).reduce((o, l) => (o[l] = me(e[l]) ? e[l] : n(e[l]), o), {}) : e;
  return n(d);
}
var he = { ref: "root" };
var Be = defineComponent({
  __name: "AgGridVue",
  props: mergeModels(mergeDefaults({
    gridOptions: {},
    modules: {},
    statusBar: {},
    sideBar: { type: [Object, String, Array, Boolean, null] },
    suppressContextMenu: { type: Boolean },
    preventDefaultOnContextMenu: { type: Boolean },
    allowContextMenuWithControlKey: { type: Boolean },
    columnMenu: {},
    suppressMenuHide: { type: Boolean },
    enableBrowserTooltips: { type: Boolean },
    tooltipTrigger: {},
    tooltipShowDelay: {},
    tooltipHideDelay: {},
    tooltipMouseTrack: { type: Boolean },
    tooltipShowMode: {},
    tooltipInteraction: { type: Boolean },
    popupParent: {},
    copyHeadersToClipboard: { type: Boolean },
    copyGroupHeadersToClipboard: { type: Boolean },
    clipboardDelimiter: {},
    suppressCopyRowsToClipboard: { type: Boolean },
    suppressCopySingleCellRanges: { type: Boolean },
    suppressLastEmptyLineOnPaste: { type: Boolean },
    suppressClipboardPaste: { type: Boolean },
    suppressClipboardApi: { type: Boolean },
    suppressCutToClipboard: { type: Boolean },
    columnDefs: {},
    defaultColDef: {},
    defaultColGroupDef: {},
    columnTypes: {},
    dataTypeDefinitions: {},
    maintainColumnOrder: { type: Boolean },
    enableStrictPivotColumnOrder: { type: Boolean },
    suppressFieldDotNotation: { type: Boolean },
    headerHeight: {},
    groupHeaderHeight: {},
    floatingFiltersHeight: {},
    pivotHeaderHeight: {},
    pivotGroupHeaderHeight: {},
    allowDragFromColumnsToolPanel: { type: Boolean },
    suppressMovableColumns: { type: Boolean },
    suppressColumnMoveAnimation: { type: Boolean },
    suppressMoveWhenColumnDragging: { type: Boolean },
    suppressDragLeaveHidesColumns: { type: Boolean },
    suppressGroupChangesColumnVisibility: { type: [Boolean, String] },
    suppressMakeColumnVisibleAfterUnGroup: { type: Boolean },
    suppressRowGroupHidesColumns: { type: Boolean },
    colResizeDefault: {},
    suppressAutoSize: { type: Boolean },
    autoSizePadding: {},
    skipHeaderOnAutoSize: { type: Boolean },
    autoSizeStrategy: {},
    components: {},
    editType: {},
    singleClickEdit: { type: Boolean },
    suppressClickEdit: { type: Boolean },
    readOnlyEdit: { type: Boolean },
    stopEditingWhenCellsLoseFocus: { type: Boolean },
    enterNavigatesVertically: { type: Boolean },
    enterNavigatesVerticallyAfterEdit: { type: Boolean },
    enableCellEditingOnBackspace: { type: Boolean },
    undoRedoCellEditing: { type: Boolean },
    undoRedoCellEditingLimit: {},
    defaultCsvExportParams: {},
    suppressCsvExport: { type: Boolean },
    defaultExcelExportParams: {},
    suppressExcelExport: { type: Boolean },
    excelStyles: {},
    quickFilterText: {},
    cacheQuickFilter: { type: Boolean },
    includeHiddenColumnsInQuickFilter: { type: Boolean },
    quickFilterParser: { type: Function },
    quickFilterMatcher: { type: Function },
    applyQuickFilterBeforePivotOrAgg: { type: Boolean },
    excludeChildrenWhenTreeDataFiltering: { type: Boolean },
    enableAdvancedFilter: { type: Boolean },
    alwaysPassFilter: { type: Function },
    includeHiddenColumnsInAdvancedFilter: { type: Boolean },
    advancedFilterParent: {},
    advancedFilterBuilderParams: {},
    suppressAdvancedFilterEval: { type: Boolean },
    suppressSetFilterByDefault: { type: Boolean },
    enableCharts: { type: Boolean },
    chartThemes: {},
    customChartThemes: {},
    chartThemeOverrides: {},
    chartToolPanelsDef: {},
    chartMenuItems: { type: [Array, Function] },
    loadingCellRenderer: {},
    loadingCellRendererParams: {},
    loadingCellRendererSelector: { type: Function },
    localeText: {},
    masterDetail: { type: Boolean },
    keepDetailRows: { type: Boolean },
    keepDetailRowsCount: {},
    detailCellRenderer: {},
    detailCellRendererParams: {},
    detailRowHeight: {},
    detailRowAutoHeight: { type: Boolean },
    context: {},
    dragAndDropImageComponent: {},
    dragAndDropImageComponentParams: {},
    alignedGrids: { type: [Array, Function] },
    tabIndex: {},
    rowBuffer: {},
    valueCache: { type: Boolean },
    valueCacheNeverExpires: { type: Boolean },
    enableCellExpressions: { type: Boolean },
    suppressTouch: { type: Boolean },
    suppressFocusAfterRefresh: { type: Boolean },
    suppressBrowserResizeObserver: { type: Boolean },
    suppressPropertyNamesCheck: { type: Boolean },
    suppressChangeDetection: { type: Boolean },
    debug: { type: Boolean },
    loading: { type: Boolean },
    overlayLoadingTemplate: {},
    loadingOverlayComponent: {},
    loadingOverlayComponentParams: {},
    suppressLoadingOverlay: { type: Boolean },
    overlayNoRowsTemplate: {},
    noRowsOverlayComponent: {},
    noRowsOverlayComponentParams: {},
    suppressNoRowsOverlay: { type: Boolean },
    pagination: { type: Boolean },
    paginationPageSize: {},
    paginationPageSizeSelector: { type: [Array, Boolean] },
    paginationAutoPageSize: { type: Boolean },
    paginateChildRows: { type: Boolean },
    suppressPaginationPanel: { type: Boolean },
    pivotMode: { type: Boolean },
    pivotPanelShow: {},
    pivotMaxGeneratedColumns: {},
    pivotDefaultExpanded: {},
    pivotColumnGroupTotals: {},
    pivotRowTotals: {},
    pivotSuppressAutoColumn: { type: Boolean },
    suppressExpandablePivotGroups: { type: Boolean },
    functionsReadOnly: { type: Boolean },
    aggFuncs: {},
    suppressAggFuncInHeader: { type: Boolean },
    alwaysAggregateAtRootLevel: { type: Boolean },
    aggregateOnlyChangedColumns: { type: Boolean },
    suppressAggFilteredOnly: { type: Boolean },
    removePivotHeaderRowWhenSingleValueColumn: { type: Boolean },
    animateRows: { type: Boolean },
    cellFlashDuration: {},
    cellFadeDuration: {},
    allowShowChangeAfterFilter: { type: Boolean },
    domLayout: {},
    ensureDomOrder: { type: Boolean },
    enableRtl: { type: Boolean },
    suppressColumnVirtualisation: { type: Boolean },
    suppressMaxRenderedRowRestriction: { type: Boolean },
    suppressRowVirtualisation: { type: Boolean },
    rowDragManaged: { type: Boolean },
    suppressRowDrag: { type: Boolean },
    suppressMoveWhenRowDragging: { type: Boolean },
    rowDragEntireRow: { type: Boolean },
    rowDragMultiRow: { type: Boolean },
    rowDragText: { type: Function },
    fullWidthCellRenderer: {},
    fullWidthCellRendererParams: {},
    embedFullWidthRows: { type: Boolean },
    groupDisplayType: {},
    groupDefaultExpanded: {},
    autoGroupColumnDef: {},
    groupMaintainOrder: { type: Boolean },
    groupSelectsChildren: { type: Boolean },
    groupLockGroupColumns: {},
    groupAggFiltering: { type: [Boolean, Function] },
    groupTotalRow: { type: [String, Function] },
    grandTotalRow: {},
    suppressStickyTotalRow: { type: [Boolean, String] },
    groupSuppressBlankHeader: { type: Boolean },
    groupSelectsFiltered: { type: Boolean },
    showOpenedGroup: { type: Boolean },
    groupHideParentOfSingleChild: { type: [Boolean, String] },
    groupRemoveSingleChildren: { type: Boolean },
    groupRemoveLowestSingleChildren: { type: Boolean },
    groupHideOpenParents: { type: Boolean },
    groupAllowUnbalanced: { type: Boolean },
    rowGroupPanelShow: {},
    groupRowRenderer: {},
    groupRowRendererParams: {},
    treeData: { type: Boolean },
    rowGroupPanelSuppressSort: { type: Boolean },
    suppressGroupRowsSticky: { type: Boolean },
    pinnedTopRowData: {},
    pinnedBottomRowData: {},
    rowModelType: {},
    rowData: {},
    asyncTransactionWaitMillis: {},
    suppressModelUpdateAfterUpdateTransaction: { type: Boolean },
    datasource: {},
    cacheOverflowSize: {},
    infiniteInitialRowCount: {},
    serverSideInitialRowCount: {},
    suppressServerSideFullWidthLoadingRow: { type: Boolean },
    cacheBlockSize: {},
    maxBlocksInCache: {},
    maxConcurrentDatasourceRequests: {},
    blockLoadDebounceMillis: {},
    purgeClosedRowNodes: { type: Boolean },
    serverSideDatasource: {},
    serverSideSortAllLevels: { type: Boolean },
    serverSideEnableClientSideSort: { type: Boolean },
    serverSideOnlyRefreshFilteredGroups: { type: Boolean },
    serverSidePivotResultFieldSeparator: {},
    viewportDatasource: {},
    viewportRowModelPageSize: {},
    viewportRowModelBufferSize: {},
    alwaysShowHorizontalScroll: { type: Boolean },
    alwaysShowVerticalScroll: { type: Boolean },
    debounceVerticalScrollbar: { type: Boolean },
    suppressHorizontalScroll: { type: Boolean },
    suppressScrollOnNewData: { type: Boolean },
    suppressScrollWhenPopupsAreOpen: { type: Boolean },
    suppressAnimationFrame: { type: Boolean },
    suppressMiddleClickScrolls: { type: Boolean },
    suppressPreventDefaultOnMouseWheel: { type: Boolean },
    scrollbarWidth: {},
    rowSelection: {},
    cellSelection: { type: [Boolean, Object] },
    rowMultiSelectWithClick: { type: Boolean },
    suppressRowDeselection: { type: Boolean },
    suppressRowClickSelection: { type: Boolean },
    suppressCellFocus: { type: Boolean },
    suppressHeaderFocus: { type: Boolean },
    selectionColumnDef: {},
    suppressMultiRangeSelection: { type: Boolean },
    enableCellTextSelection: { type: Boolean },
    enableRangeSelection: { type: Boolean },
    enableRangeHandle: { type: Boolean },
    enableFillHandle: { type: Boolean },
    fillHandleDirection: {},
    suppressClearOnFillReduction: { type: Boolean },
    sortingOrder: {},
    accentedSort: { type: Boolean },
    unSortIcon: { type: Boolean },
    suppressMultiSort: { type: Boolean },
    alwaysMultiSort: { type: Boolean },
    multiSortKey: {},
    suppressMaintainUnsortedOrder: { type: Boolean },
    icons: {},
    rowHeight: {},
    rowStyle: {},
    rowClass: {},
    rowClassRules: {},
    suppressRowHoverHighlight: { type: Boolean },
    suppressRowTransform: { type: Boolean },
    columnHoverHighlight: { type: Boolean },
    gridId: {},
    deltaSort: { type: Boolean },
    treeDataDisplayType: {},
    enableGroupEdit: { type: Boolean },
    initialState: {},
    theme: {},
    loadThemeGoogleFonts: { type: Boolean },
    getContextMenuItems: { type: Function },
    getMainMenuItems: { type: Function },
    postProcessPopup: { type: Function },
    processUnpinnedColumns: { type: Function },
    processCellForClipboard: { type: Function },
    processHeaderForClipboard: { type: Function },
    processGroupHeaderForClipboard: { type: Function },
    processCellFromClipboard: { type: Function },
    sendToClipboard: { type: Function },
    processDataFromClipboard: { type: Function },
    isExternalFilterPresent: { type: Function },
    doesExternalFilterPass: { type: Function },
    getChartToolbarItems: { type: Function },
    createChartContainer: { type: Function },
    focusGridInnerElement: { type: Function },
    navigateToNextHeader: { type: Function },
    tabToNextHeader: { type: Function },
    navigateToNextCell: { type: Function },
    tabToNextCell: { type: Function },
    getLocaleText: { type: Function },
    getDocument: { type: Function },
    paginationNumberFormatter: { type: Function },
    getGroupRowAgg: { type: Function },
    isGroupOpenByDefault: { type: Function },
    initialGroupOrderComparator: { type: Function },
    processPivotResultColDef: { type: Function },
    processPivotResultColGroupDef: { type: Function },
    getDataPath: { type: Function },
    getChildCount: { type: Function },
    getServerSideGroupLevelParams: { type: Function },
    isServerSideGroupOpenByDefault: { type: Function },
    isApplyServerSideTransaction: { type: Function },
    isServerSideGroup: { type: Function },
    getServerSideGroupKey: { type: Function },
    getBusinessKeyForNode: { type: Function },
    getRowId: { type: Function },
    resetRowDataOnUpdate: { type: Boolean },
    processRowPostCreate: { type: Function },
    isRowSelectable: { type: Function },
    isRowMaster: { type: Function },
    fillOperation: { type: Function },
    postSortRows: { type: Function },
    getRowStyle: { type: Function },
    getRowClass: { type: Function },
    getRowHeight: { type: Function },
    isFullWidthRow: { type: Function },
    "onTool-panel-visible-changed": {},
    "onTool-panel-size-changed": {},
    "onColumn-menu-visible-changed": {},
    "onContext-menu-visible-changed": {},
    "onCut-start": {},
    "onCut-end": {},
    "onPaste-start": {},
    "onPaste-end": {},
    "onColumn-visible": {},
    "onColumn-pinned": {},
    "onColumn-resized": {},
    "onColumn-moved": {},
    "onColumn-value-changed": {},
    "onColumn-pivot-mode-changed": {},
    "onColumn-pivot-changed": {},
    "onColumn-group-opened": {},
    "onNew-columns-loaded": {},
    "onGrid-columns-changed": {},
    "onDisplayed-columns-changed": {},
    "onVirtual-columns-changed": {},
    "onColumn-everything-changed": {},
    "onColumn-header-mouse-over": {},
    "onColumn-header-mouse-leave": {},
    "onColumn-header-clicked": {},
    "onColumn-header-context-menu": {},
    "onComponent-state-changed": {},
    "onCell-value-changed": {},
    "onCell-edit-request": {},
    "onRow-value-changed": {},
    "onCell-editing-started": {},
    "onCell-editing-stopped": {},
    "onRow-editing-started": {},
    "onRow-editing-stopped": {},
    "onUndo-started": {},
    "onUndo-ended": {},
    "onRedo-started": {},
    "onRedo-ended": {},
    "onCell-selection-delete-start": {},
    "onCell-selection-delete-end": {},
    "onRange-delete-start": {},
    "onRange-delete-end": {},
    "onFill-start": {},
    "onFill-end": {},
    "onFilter-opened": {},
    "onFilter-changed": {},
    "onFilter-modified": {},
    "onAdvanced-filter-builder-visible-changed": {},
    "onChart-created": {},
    "onChart-range-selection-changed": {},
    "onChart-options-changed": {},
    "onChart-destroyed": {},
    "onCell-key-down": {},
    "onGrid-ready": {},
    "onGrid-pre-destroyed": {},
    "onFirst-data-rendered": {},
    "onGrid-size-changed": {},
    "onModel-updated": {},
    "onVirtual-row-removed": {},
    "onViewport-changed": {},
    "onBody-scroll": {},
    "onBody-scroll-end": {},
    "onDrag-started": {},
    "onDrag-stopped": {},
    "onDrag-cancelled": {},
    "onState-updated": {},
    "onPagination-changed": {},
    "onRow-drag-enter": {},
    "onRow-drag-move": {},
    "onRow-drag-leave": {},
    "onRow-drag-end": {},
    "onRow-drag-cancel": {},
    "onColumn-row-group-changed": {},
    "onRow-group-opened": {},
    "onExpand-or-collapse-all": {},
    "onPivot-max-columns-exceeded": {},
    "onPinned-row-data-changed": {},
    "onRow-data-updated": {},
    "onAsync-transactions-flushed": {},
    "onStore-refreshed": {},
    "onHeader-focused": {},
    "onCell-clicked": {},
    "onCell-double-clicked": {},
    "onCell-focused": {},
    "onCell-mouse-over": {},
    "onCell-mouse-out": {},
    "onCell-mouse-down": {},
    "onRow-clicked": {},
    "onRow-double-clicked": {},
    "onRow-selected": {},
    "onSelection-changed": {},
    "onCell-context-menu": {},
    "onRange-selection-changed": {},
    "onCell-selection-changed": {},
    "onTooltip-show": {},
    "onTooltip-hide": {},
    "onSort-changed": {}
  }, ye()), {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: mergeModels(["update:modelValue"], ["update:modelValue"]),
  setup(d, { expose: n, emit: e }) {
    const o = d, l = useTemplateRef("root"), i = ref(void 0), s = ref(false), t = ref(false), r = ref(false), u = ref({}), v = ref(null), S = toRefs(o);
    _ALL_GRID_OPTIONS.filter((a) => a != "gridOptions").forEach((a) => {
      watch(
        () => S[a],
        (p, c) => {
          D(a, p);
        },
        { deep: true }
      );
    });
    const w = /* @__PURE__ */ new Set(["rowDataUpdated", "cellValueChanged", "rowValueChanged"]), m = useModel(d, "modelValue"), B = ref(false), A = e;
    watch(
      m,
      (a, p) => {
        s.value && (B.value = true, D("rowData", h(a), h(p)));
      },
      { deep: true }
    );
    const k = Ce(() => {
      A("update:modelValue", h(E()));
    }, 20), H = (a) => {
      r.value && w.has(a) && k();
    }, G = () => m.value || o.rowData || o.gridOptions.rowData, E = () => {
      const a = [];
      return i == null || i.value.forEachNode((p) => {
        a.push(p.data);
      }), a;
    }, F = (a) => (p) => {
      if (t.value)
        return;
      p === "gridReady" && (r.value = true);
      const c = ALWAYS_SYNC_GLOBAL_EVENTS.has(p);
      c && !a || !c && a || w.has(p) && (B.value || H(p), B.value = false);
    }, D = (a, p, c) => {
      if (s.value) {
        let g = p.value || p;
        a === "rowData" && g != null && (g = h(g)), u.value[a] = g, v.value == null && (v.value = window.setTimeout(() => {
          v.value = null, _processOnChange(u.value, i.value), u.value = {};
        }, 0));
      }
    }, I = () => Object.create(getCurrentInstance().provides);
    return onMounted(() => {
      ModuleRegistry.registerModules([RowApiModule]);
      const a = new ve(getCurrentInstance(), I()), p = {
        globalListener: F(),
        globalSyncListener: F(true),
        frameworkOverrides: new ge(getCurrentInstance()),
        providedBeanInstances: {
          frameworkCompWrapper: a
        },
        modules: o.modules
      }, c = markRaw(
        _combineAttributesAndGridOptions(h(o.gridOptions), o, [
          ..._ALL_GRID_OPTIONS,
          ..._ALL_EVENTS.map((L) => _getCallbackForEvent(L))
        ])
      ), g = G();
      g !== void 0 && (c.rowData = h(g)), i.value = createGrid(l.value, c, p), s.value = true;
    }), onUnmounted(() => {
      var a;
      s.value && ((a = i == null ? void 0 : i.value) == null || a.destroy(), t.value = true);
    }), n({
      api: i
    }), (a, p) => (openBlock(), createElementBlock("div", he, null, 512));
  }
});
export {
  Be as AgGridVue
};
//# sourceMappingURL=ag-grid-vue3.js.map
