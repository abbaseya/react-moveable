export declare const MOVEABLE_ABLES: readonly [{
    readonly isPinch: true;
    readonly name: "beforeRenderable";
    readonly props: {};
    readonly events: {
        readonly onBeforeRenderStart: "beforeRenderStart";
        readonly onBeforeRender: "beforeRender";
        readonly onBeforeRenderEnd: "beforeRenderEnd";
        readonly onBeforeRenderGroupStart: "beforeRenderGroupStart";
        readonly onBeforeRenderGroup: "beforeRenderGroup";
        readonly onBeforeRenderGroupEnd: "beforeRenderGroupEnd";
    };
    readonly dragRelation: "weak";
    readonly setTransform: (moveable: import("../types").MoveableManagerInterface<import("../types").BeforeRenderableProps, {}>, e: any) => void;
    readonly resetStyle: (e: any) => void;
    readonly fillDragStartParams: (moveable: import("../types").MoveableManagerInterface<import("../types").BeforeRenderableProps, {}>, e: any) => import("../types").OnBeforeRenderStart;
    readonly fillDragParams: (moveable: import("../types").MoveableManagerInterface<import("../types").BeforeRenderableProps, {}>, e: any) => import("../types").OnBeforeRender;
    readonly dragStart: (moveable: import("../types").MoveableManagerInterface<import("../types").BeforeRenderableProps, {}>, e: any) => void;
    readonly drag: (moveable: import("../types").MoveableManagerInterface<import("../types").BeforeRenderableProps, {}>, e: any) => void;
    readonly dragEnd: (moveable: import("../types").MoveableManagerInterface<import("../types").BeforeRenderableProps, {}>, e: any) => void;
    readonly dragGroupStart: (moveable: import("../types").MoveableGroupInterface<import("../types").BeforeRenderableProps, {}>, e: any) => void;
    readonly dragGroup: (moveable: import("../types").MoveableGroupInterface<import("../types").BeforeRenderableProps, {}>, e: any) => void;
    readonly dragGroupEnd: (moveable: import("../types").MoveableGroupInterface<import("../types").BeforeRenderableProps, {}>, e: any) => void;
    readonly dragControlStart: (moveable: import("../types").MoveableManagerInterface<import("../types").BeforeRenderableProps, {}>, e: any) => void;
    readonly dragControl: (moveable: import("../types").MoveableManagerInterface<import("../types").BeforeRenderableProps, {}>, e: any) => void;
    readonly dragControlEnd: (moveable: import("../types").MoveableManagerInterface<import("../types").BeforeRenderableProps, {}>, e: any) => void;
    readonly dragGroupControlStart: (moveable: import("../types").MoveableGroupInterface<import("../types").BeforeRenderableProps, {}>, e: any) => void;
    readonly dragGroupControl: (moveable: import("../types").MoveableGroupInterface<import("../types").BeforeRenderableProps, {}>, e: any) => void;
    readonly dragGroupControlEnd: (moveable: import("../types").MoveableGroupInterface<import("../types").BeforeRenderableProps, {}>, e: any) => void;
}, {
    name: string;
    props: {
        readonly target: ObjectConstructor;
        readonly dragTarget: ObjectConstructor;
        readonly container: ObjectConstructor;
        readonly portalContainer: ObjectConstructor;
        readonly rootContainer: ObjectConstructor;
        readonly useResizeObserver: BooleanConstructor;
        readonly zoom: NumberConstructor;
        readonly transformOrigin: ArrayConstructor;
        readonly edge: ObjectConstructor;
        readonly ables: ArrayConstructor;
        readonly className: StringConstructor;
        readonly pinchThreshold: NumberConstructor;
        readonly pinchOutside: BooleanConstructor;
        readonly triggerAblesSimultaneously: BooleanConstructor;
        readonly checkInput: BooleanConstructor;
        readonly cspNonce: StringConstructor;
        readonly translateZ: NumberConstructor;
        readonly hideDefaultLines: BooleanConstructor;
        readonly props: ObjectConstructor;
        readonly flushSync: FunctionConstructor;
        readonly stopPropagation: BooleanConstructor;
        readonly preventClickEventOnDrag: BooleanConstructor;
        readonly preventClickDefault: BooleanConstructor;
    };
    events: {};
}, {
    name: string;
    dragRelation: string;
    props: {
        readonly snappable: readonly [BooleanConstructor, ArrayConstructor];
        readonly snapContainer: ObjectConstructor;
        readonly snapDirections: readonly [BooleanConstructor, ObjectConstructor];
        readonly elementSnapDirections: readonly [BooleanConstructor, ObjectConstructor];
        readonly snapGap: BooleanConstructor;
        readonly snapGridWidth: NumberConstructor;
        readonly snapGridHeight: NumberConstructor;
        readonly isDisplaySnapDigit: BooleanConstructor;
        readonly isDisplayInnerSnapDigit: BooleanConstructor;
        readonly snapDigit: NumberConstructor;
        readonly snapThreshold: NumberConstructor;
        readonly horizontalGuidelines: ArrayConstructor;
        readonly verticalGuidelines: ArrayConstructor;
        readonly elementGuidelines: ArrayConstructor;
        readonly bounds: ObjectConstructor;
        readonly innerBounds: ObjectConstructor;
        readonly snapDistFormat: FunctionConstructor;
    };
    events: {
        readonly onSnap: "snap";
    };
    css: string[];
    render(moveable: import("../types").MoveableManagerInterface<import("../types").SnappableProps, import("../types").SnappableState>, React: import("../types").Renderer): any[];
    dragStart(moveable: import("../types").MoveableManagerInterface<import("../types").SnappableProps, import("../types").SnappableState>, e: any): void;
    drag(moveable: import("../types").MoveableManagerInterface<import("../types").SnappableProps, import("../types").SnappableState>): void;
    pinchStart(moveable: import("../types").MoveableManagerInterface<import("../types").SnappableProps, import("../types").SnappableState>): void;
    dragEnd(moveable: import("../types").MoveableManagerInterface<import("../types").SnappableProps, import("../types").SnappableState>): void;
    dragControlCondition(moveable: import("../types").MoveableManagerInterface<{}, {}>, e: any): boolean | undefined;
    dragControlStart(moveable: import("../types").MoveableManagerInterface<import("../types").SnappableProps, import("../types").SnappableState>): void;
    dragControl(moveable: import("../types").MoveableManagerInterface<import("../types").SnappableProps, import("../types").SnappableState>): void;
    dragControlEnd(moveable: import("../types").MoveableManagerInterface<import("../types").SnappableProps, import("../types").SnappableState>): void;
    dragGroupStart(moveable: any, e: any): void;
    dragGroup(moveable: import("../types").MoveableGroupInterface<import("../types").SnappableProps, import("../types").SnappableState>): void;
    dragGroupEnd(moveable: import("../types").MoveableGroupInterface<import("../types").SnappableProps, import("../types").SnappableState>): void;
    dragGroupControlStart(moveable: import("../types").MoveableGroupInterface<import("../types").SnappableProps, import("../types").SnappableState>): void;
    dragGroupControl(moveable: import("../types").MoveableManagerInterface<import("../types").SnappableProps, import("../types").SnappableState>): void;
    dragGroupControlEnd(moveable: import("../types").MoveableGroupInterface<import("../types").SnappableProps, import("../types").SnappableState>): void;
    unset(moveable: any): void;
}, {
    readonly events: {};
    readonly props: {
        readonly pinchable: BooleanConstructor;
    };
    readonly name: "pinchable";
} & {
    events: {
        readonly onPinchStart: "pinchStart";
        readonly onPinch: "pinch";
        readonly onPinchEnd: "pinchEnd";
        readonly onPinchGroupStart: "pinchGroupStart";
        readonly onPinchGroup: "pinchGroup";
        readonly onPinchGroupEnd: "pinchGroupEnd";
    };
    dragStart(): boolean;
    pinchStart(moveable: import("../types").MoveableManagerInterface<import("../types").PinchableProps, import("../types").SnappableState>, e: any): any;
    pinch(moveable: import("../types").MoveableManagerInterface<import("../types").PinchableProps, {}>, e: any): any;
    pinchEnd(moveable: import("../types").MoveableManagerInterface<import("../types").PinchableProps, {}>, e: any): any;
    pinchGroupStart(moveable: import("../types").MoveableGroupInterface<any, any>, e: any): any;
    pinchGroup(moveable: import("../types").MoveableGroupInterface<{}, {}>, e: any): any;
    pinchGroupEnd(moveable: import("../types").MoveableGroupInterface<{}, {}>, e: any): any;
}, {
    name: string;
    props: {
        readonly draggable: BooleanConstructor;
        readonly throttleDrag: NumberConstructor;
        readonly throttleDragRotate: NumberConstructor;
        readonly startDragRotate: NumberConstructor;
        readonly edgeDraggable: BooleanConstructor;
    };
    events: {
        readonly onDragStart: "dragStart";
        readonly onDrag: "drag";
        readonly onDragEnd: "dragEnd";
        readonly onDragGroupStart: "dragGroupStart";
        readonly onDragGroup: "dragGroup";
        readonly onDragGroupEnd: "dragGroupEnd";
    };
    render(moveable: import("../types").MoveableManagerInterface<import("../types").DraggableProps, import("../types").DraggableState>, React: import("../types").Renderer): any[];
    dragStart(moveable: import("../types").MoveableManagerInterface<import("../types").DraggableProps, any>, e: any): false | import("../types").OnDragStart;
    drag(moveable: import("../types").MoveableManagerInterface<import("../types").DraggableProps, any>, e: any): import("../types").OnDrag | undefined;
    dragAfter(moveable: import("../types").MoveableManagerInterface<import("../types").DraggableProps, import("../types").DraggableState>, e: any): false | import("../types").OnDrag | undefined;
    dragEnd(moveable: import("../types").MoveableManagerInterface<import("../types").DraggableProps, import("../types").DraggableState>, e: any): import("../types").OnDragEnd | undefined;
    dragGroupStart(moveable: import("../types").MoveableGroupInterface<any, any>, e: any): false | import("../types").OnDragStart;
    dragGroup(moveable: import("../types").MoveableGroupInterface<any, any>, e: any): import("../types").OnDragGroup | undefined;
    dragGroupEnd(moveable: import("../types").MoveableGroupInterface<any, any>, e: any): any;
    request(moveable: import("../types").MoveableManagerInterface<any, any>): {
        isControl: boolean;
        requestStart(): {
            datas: {};
        };
        request(e: import("@daybrush/utils").IObject<any>): {
            datas: {};
            distX: number;
            distY: number;
        };
        requestEnd(): {
            datas: {};
            isDrag: boolean;
        };
    };
    unset(moveable: any): void;
}, {
    readonly events: {};
    readonly props: {
        readonly edgeDraggable: BooleanConstructor;
    };
    readonly name: "edgeDraggable";
} & {
    css: string[];
    render(moveable: import("../types").MoveableManagerInterface<import("../types").DraggableProps, {}>, React: import("../types").Renderer): any[];
    dragControlCondition(moveable: import("../types").MoveableManagerInterface<import("../types").DraggableProps, {}>, e: any): boolean;
    dragControlStart(moveable: import("../types").MoveableManagerInterface<import("../types").DraggableProps, {}>, e: any): false | import("../types").OnDragStart;
    dragControl(moveable: import("../types").MoveableManagerInterface<import("../types").DraggableProps, {}>, e: any): import("../types").OnDrag | undefined;
    dragControlEnd(moveable: import("../types").MoveableManagerInterface<import("../types").DraggableProps, any>, e: any): import("../types").OnDragEnd | undefined;
    dragGroupControlCondition(moveable: import("../types").MoveableGroupInterface<import("../types").DraggableProps, {}>, e: any): boolean;
    dragGroupControlStart(moveable: import("../types").MoveableGroupInterface<import("../types").DraggableProps, {}>, e: any): false | import("../types").OnDragStart;
    dragGroupControl(moveable: import("../types").MoveableGroupInterface<import("../types").DraggableProps, {}>, e: any): import("../types").OnDragGroup | undefined;
    dragGroupControlEnd(moveable: import("../types").MoveableGroupInterface<import("../types").DraggableProps, any>, e: any): any;
    unset(moveable: any): void;
}, {
    name: string;
    ableGroup: string;
    canPinch: boolean;
    props: {
        readonly resizable: BooleanConstructor;
        readonly throttleResize: NumberConstructor;
        readonly renderDirections: ArrayConstructor;
        readonly keepRatio: BooleanConstructor;
        readonly resizeFormat: FunctionConstructor;
        readonly keepRatioFinally: BooleanConstructor;
        readonly edge: BooleanConstructor;
    };
    events: {
        readonly onResizeStart: "resizeStart";
        readonly onBeforeResize: "beforeResize";
        readonly onResize: "resize";
        readonly onResizeEnd: "resizeEnd";
        readonly onResizeGroupStart: "resizeGroupStart";
        readonly onBeforeResizeGroup: "beforeResizeGroup";
        readonly onResizeGroup: "resizeGroup";
        readonly onResizeGroupEnd: "resizeGroupEnd";
    };
    render: (moveable: import("../types").MoveableManagerInterface<Partial<import("../types").RenderDirections>, {}>, React: import("../types").Renderer) => any[];
    dragControlCondition: (moveable: any, e: any) => any;
    dragControlStart(moveable: import("../types").MoveableManagerInterface<import("../types").ResizableProps & import("../types").DraggableProps, import("../types").SnappableState>, e: any): false | import("../types").OnResizeStart;
    dragControl(moveable: import("../types").MoveableManagerInterface<import("../types").ResizableProps & import("../types").DraggableProps & import("../types").SnappableProps, {}>, e: any): import("../types").OnResize | undefined;
    dragControlAfter(moveable: import("../types").MoveableManagerInterface<import("../types").ResizableProps & import("../types").DraggableProps, {}>, e: any): import("../types").OnResize | undefined;
    dragControlEnd(moveable: import("../types").MoveableManagerInterface<import("../types").ResizableProps & import("../types").DraggableProps, {}>, e: any): import("../types").OnResizeEnd | undefined;
    dragGroupControlCondition: (moveable: any, e: any) => any;
    dragGroupControlStart(moveable: import("../types").MoveableGroupInterface<any, any>, e: any): false | import("../types").OnResizeStart;
    dragGroupControl(moveable: import("../types").MoveableGroupInterface<any, any>, e: any): import("../types").OnResizeGroup | undefined;
    dragGroupControlEnd(moveable: import("../types").MoveableGroupInterface<any, any>, e: any): any;
    request(moveable: import("../types").MoveableManagerInterface<any, {}>): {
        isControl: boolean;
        requestStart(e: import("../types").ResizableRequestParam): {
            datas: Record<string, any>;
            parentDirection: number[];
            parentIsWidth: boolean;
        };
        request(e: import("../types").ResizableRequestParam): {
            datas: Record<string, any>;
            parentDist: number[];
            parentKeepRatio: boolean | undefined;
        };
        requestEnd(): {
            datas: Record<string, any>;
            isDrag: boolean;
        };
    };
}, {
    name: string;
    ableGroup: string;
    canPinch: boolean;
    props: {
        readonly scalable: BooleanConstructor;
        readonly throttleScale: NumberConstructor;
        readonly renderDirections: StringConstructor;
        readonly keepRatio: BooleanConstructor;
        readonly edge: BooleanConstructor;
    };
    events: {
        readonly onScaleStart: "scaleStart";
        readonly onBeforeScale: "beforeScale";
        readonly onScale: "scale";
        readonly onScaleEnd: "scaleEnd";
        readonly onScaleGroupStart: "scaleGroupStart";
        readonly onBeforeScaleGroup: "beforeScaleGroup";
        readonly onScaleGroup: "scaleGroup";
        readonly onScaleGroupEnd: "scaleGroupEnd";
    };
    render: (moveable: import("../types").MoveableManagerInterface<Partial<import("../types").RenderDirections>, {}>, React: import("../types").Renderer) => any[];
    dragControlCondition: (moveable: any, e: any) => any;
    dragControlStart(moveable: import("../types").MoveableManagerInterface<import("../types").ScalableProps & import("../types").DraggableProps, import("../types").SnappableState>, e: any): false | import("../types").OnScaleStart;
    dragControl(moveable: import("../types").MoveableManagerInterface<import("../types").ScalableProps & import("../types").DraggableProps & import("../types").GroupableProps, import("../types").SnappableState>, e: any): false | import("../types").OnScale;
    dragControlEnd(moveable: import("../types").MoveableManagerInterface<import("../types").ScalableProps, {}>, e: any): any;
    dragGroupControlCondition: (moveable: any, e: any) => any;
    dragGroupControlStart(moveable: import("../types").MoveableGroupInterface<any, any>, e: any): false | import("../types").OnScaleGroupStart;
    dragGroupControl(moveable: import("../types").MoveableGroupInterface<any, any>, e: any): import("../types").OnScaleGroup | undefined;
    dragGroupControlEnd(moveable: import("../types").MoveableGroupInterface<any, any>, e: any): any;
    request(): {
        isControl: boolean;
        requestStart(e: import("@daybrush/utils").IObject<any>): {
            datas: {};
            parentDirection: any;
        };
        request(e: import("@daybrush/utils").IObject<any>): {
            datas: {};
            parentDist: number[];
            parentKeepRatio: any;
        };
        requestEnd(): {
            datas: {};
            isDrag: boolean;
        };
    };
}, {
    name: string;
    ableGroup: string;
    props: {
        readonly warpable: BooleanConstructor;
        readonly renderDirections: ArrayConstructor;
        readonly edge: BooleanConstructor;
    };
    events: {
        readonly onWarpStart: "warpStart";
        readonly onWarp: "warp";
        readonly onWarpEnd: "warpEnd";
    };
    render(moveable: import("../types").MoveableManagerInterface<import("../types").ResizableProps & import("../types").ScalableProps & import("../types").WarpableProps, {}>, React: import("../types").Renderer): any[];
    dragControlCondition(moveable: any, e: any): boolean;
    dragControlStart(moveable: import("../types").MoveableManagerInterface<import("../types").WarpableProps, import("../types").SnappableState>, e: any): any;
    dragControl(moveable: import("../types").MoveableManagerInterface<import("../types").WarpableProps & import("../types").SnappableProps, import("../types").SnappableState>, e: any): boolean;
    dragControlEnd(moveable: import("../types").MoveableManagerInterface<import("../types").WarpableProps, {}>, e: any): any;
}, {
    name: string;
    canPinch: boolean;
    props: {
        readonly rotatable: BooleanConstructor;
        readonly rotationPosition: StringConstructor;
        readonly throttleRotate: NumberConstructor;
        readonly renderDirections: ObjectConstructor;
        readonly rotationTarget: ObjectConstructor;
        readonly rotateAroundControls: BooleanConstructor;
        readonly edge: BooleanConstructor;
        readonly resolveAblesWithRotatable: ObjectConstructor;
    };
    events: {
        readonly onRotateStart: "rotateStart";
        readonly onBeforeRotate: "beforeRotate";
        readonly onRotate: "rotate";
        readonly onRotateEnd: "rotateEnd";
        readonly onRotateGroupStart: "rotateGroupStart";
        readonly onBeforeRotateGroup: "beforeRotateGroup";
        readonly onRotateGroup: "rotateGroup";
        readonly onRotateGroupEnd: "rotateGroupEnd";
    };
    css: string[];
    render(moveable: import("../types").MoveableManagerInterface<import("../types").RotatableProps, {}>, React: import("../types").Renderer): any;
    dragControlCondition: (moveable: any, e: any) => boolean;
    dragControlStart(moveable: import("../types").MoveableManagerInterface<import("../types").RotatableProps & import("../types").SnappableProps & import("../types").DraggableProps, import("../types").SnappableState>, e: any): false | import("../types").OnRotateStart;
    dragControl(moveable: import("../types").MoveableManagerInterface<import("../types").RotatableProps & import("../types").DraggableProps, {}>, e: any): import("../types").OnRotate | undefined;
    dragControlAfter(moveable: import("../types").MoveableManagerInterface<import("../types").RotatableProps, {}>, e: any): void;
    dragControlEnd(moveable: import("../types").MoveableManagerInterface<import("../types").RotatableProps, {}>, e: any): import("../types").OnRotateEnd | undefined;
    dragGroupControlCondition: (moveable: any, e: any) => boolean;
    dragGroupControlStart(moveable: import("../types").MoveableGroupInterface<any, any>, e: any): false | import("../types").OnRotateStart;
    dragGroupControl(moveable: import("../types").MoveableGroupInterface<any, any>, e: any): import("../types").OnRotateGroup | undefined;
    dragGroupControlEnd(moveable: import("../types").MoveableGroupInterface<any, any>, e: any): any;
    request(moveable: import("../types").MoveableManagerInterface<import("../types").RotatableProps, {}>): {
        isControl: boolean;
        requestStart(): {
            datas: {};
        };
        request(e: import("@daybrush/utils").IObject<any>): {
            datas: {};
            parentDist: number;
        };
        requestEnd(): {
            datas: {};
            isDrag: boolean;
        };
    };
}, {
    name: string;
    canPinch: boolean;
    props: {
        readonly scrollable: BooleanConstructor;
        readonly scrollContainer: ObjectConstructor;
        readonly scrollThreshold: NumberConstructor;
        readonly getScrollPosition: FunctionConstructor;
    };
    events: {
        readonly onScroll: "scroll";
        readonly onScrollGroup: "scrollGroup";
    };
    dragRelation: string;
    dragStart(moveable: import("../types").MoveableManagerInterface<import("../types").ScrollableProps, {}>, e: any): void;
    checkScroll(moveable: import("../types").MoveableManagerInterface<import("../types").ScrollableProps, {}>, e: any): true | undefined;
    drag(moveable: import("../types").MoveableManagerInterface<import("../types").ScrollableProps, {}>, e: any): true | undefined;
    dragEnd(moveable: import("../types").MoveableManagerInterface<import("../types").ScrollableProps, {}>, e: any): void;
    dragControlStart(moveable: import("../types").MoveableManagerInterface<import("../types").ScrollableProps, {}>, e: any): void;
    dragControl(moveable: import("../types").MoveableManagerInterface<import("../types").ScrollableProps, {}>, e: any): true | undefined;
    dragControlEnd(moveable: import("../types").MoveableManagerInterface<import("../types").ScrollableProps, {}>, e: any): void;
    dragGroupStart(moveable: import("../types").MoveableGroupInterface<{}, {}>, e: any): void;
    dragGroup(moveable: import("../types").MoveableGroupInterface<{}, {}>, e: any): true | undefined;
    dragGroupEnd(moveable: import("../types").MoveableGroupInterface<{}, {}>, e: any): void;
    dragGroupControlStart(moveable: import("../types").MoveableGroupInterface<{}, {}>, e: any): void;
    dragGroupContro(moveable: import("../types").MoveableGroupInterface<{}, {}>, e: any): true | undefined;
    dragGroupControEnd(moveable: import("../types").MoveableGroupInterface<{}, {}>, e: any): void;
}, {
    readonly events: {};
    readonly props: {
        readonly padding: BooleanConstructor;
    };
    readonly name: "padding";
} & {
    render(moveable: import("../types").MoveableManagerInterface<{}, {}>, React: import("../types").Renderer): any[];
}, {
    readonly events: {};
    readonly props: {
        readonly origin: BooleanConstructor;
    };
    readonly name: "origin";
} & {
    render(moveable: import("../types").MoveableManagerInterface<import("../types").OriginOptions, {}>, React: import("../types").Renderer): any[];
}, {
    name: string;
    props: {
        readonly originDraggable: BooleanConstructor;
        readonly originRelative: BooleanConstructor;
    };
    events: {
        readonly onDragOriginStart: "dragOriginStart";
        readonly onDragOrigin: "dragOrigin";
        readonly onDragOriginEnd: "dragOriginEnd";
    };
    css: string[];
    dragControlCondition(_: any, e: any): boolean;
    dragControlStart(moveable: import("../types").MoveableManagerInterface<import("../types").OriginDraggableProps & import("../types").DraggableProps, {}>, e: any): false | import("../types").OnDragOriginStart;
    dragControl(moveable: import("../types").MoveableManagerInterface<import("../types").OriginDraggableProps & import("../types").DraggableProps, {}>, e: any): false | import("../types").OnDragOrigin;
    dragControlEnd(moveable: import("../types").MoveableManagerInterface<import("../types").OriginDraggableProps, {}>, e: any): boolean;
    dragGroupControlCondition(moveable: any, e: any): boolean;
    dragGroupControlStart(moveable: import("../types").MoveableGroupInterface<import("../types").OriginDraggableProps, {}>, e: any): boolean;
    dragGroupControl(moveable: import("../types").MoveableGroupInterface<import("../types").OriginDraggableProps, {}>, e: any): boolean;
    request(moveable: import("../types").MoveableManagerInterface<any, any>): {
        isControl: boolean;
        requestStart(): {
            datas: {};
        };
        request(e: import("@daybrush/utils").IObject<any>): {
            datas: {};
            distX: number;
            distY: number;
            distOrigin: number[];
        };
        requestEnd(): {
            datas: {};
            isDrag: boolean;
        };
    };
}, {
    name: string;
    props: {
        readonly clippable: BooleanConstructor;
        readonly defaultClipPath: StringConstructor;
        readonly customClipPath: StringConstructor;
        readonly keepRatio: BooleanConstructor;
        readonly clipRelative: BooleanConstructor;
        readonly clipArea: BooleanConstructor;
        readonly dragWithClip: BooleanConstructor;
        readonly clipTargetBounds: BooleanConstructor;
        readonly clipVerticalGuidelines: ArrayConstructor;
        readonly clipHorizontalGuidelines: ArrayConstructor;
        readonly clipSnapThreshold: BooleanConstructor;
    };
    events: {
        readonly onClipStart: "clipStart";
        readonly onClip: "clip";
        readonly onClipEnd: "clipEnd";
    };
    css: string[];
    render(moveable: import("../types").MoveableManagerInterface<import("../types").ClippableProps, import("../types").ClippableState>, React: import("../types").Renderer): any[];
    dragControlCondition(moveable: any, e: any): any;
    dragStart(moveable: import("../types").MoveableManagerInterface<import("../types").ClippableProps, import("../types").ClippableState>, e: any): boolean;
    drag(moveable: import("../types").MoveableManagerInterface<import("../types").ClippableProps, import("../types").ClippableState>, e: any): boolean;
    dragEnd(moveable: import("../types").MoveableManagerInterface<import("../types").ClippableProps, import("../types").ClippableState>, e: any): any;
    dragControlStart(moveable: import("../types").MoveableManagerInterface<import("../types").ClippableProps, import("../types").ClippableState>, e: any): boolean;
    dragControl(moveable: import("../types").MoveableManagerInterface<import("../types").ClippableProps & import("../types").DraggableProps, import("../types").ClippableState>, e: any): boolean;
    dragControlEnd(moveable: import("../types").MoveableManagerInterface<import("../types").ClippableProps, import("../types").ClippableState>, e: any): any;
    unset(moveable: import("../types").MoveableManagerInterface<import("../types").ClippableProps, import("../types").ClippableState>): void;
}, {
    name: string;
    props: {
        readonly roundable: BooleanConstructor;
        readonly roundRelative: BooleanConstructor;
        readonly minRoundControls: ArrayConstructor;
        readonly maxRoundControls: ArrayConstructor;
        readonly roundClickable: BooleanConstructor;
    };
    events: {
        readonly onRoundStart: "roundStart";
        readonly onRound: "round";
        readonly onRoundEnd: "roundEnd";
    };
    css: string[];
    render(moveable: import("../types").MoveableManagerInterface<import("../types").RoundableProps, import("../types").RoundableState>, React: import("../types").Renderer): any;
    dragControlCondition(moveable: any, e: any): boolean;
    dragControlStart(moveable: import("../types").MoveableManagerInterface<import("../types").RoundableProps, import("../types").RoundableState>, e: any): boolean;
    dragControl(moveable: import("../types").MoveableManagerInterface<import("../types").RoundableProps, import("../types").RoundableState>, e: any): boolean;
    dragControlEnd(moveable: import("../types").MoveableManagerInterface<import("../types").RoundableProps, import("../types").RoundableState>, e: any): boolean;
    unset(moveable: import("../types").MoveableManagerInterface<import("../types").RoundableProps, import("../types").RoundableState>): void;
}, {
    name: string;
    props: {
        readonly defaultGroupRotate: NumberConstructor;
        readonly defaultGroupOrigin: StringConstructor;
        readonly groupable: BooleanConstructor;
        readonly hideChildMoveableDefaultLines: BooleanConstructor;
    };
    events: {};
    render(moveable: import("../types").MoveableGroupInterface<import("../types").GroupableProps, {}>, React: import("../types").Renderer): any[];
}, {
    readonly name: "individualGroupable";
    readonly props: {
        readonly individualGroupable: BooleanConstructor;
    };
    readonly events: {};
}, {
    readonly events: {};
    readonly props: {
        clickable: BooleanConstructor;
    };
    readonly name: "clickable";
} & {
    props: {
        clickable: BooleanConstructor;
    };
    events: {
        readonly onClick: "click";
        readonly onClickGroup: "clickGroup";
    };
    always: true;
    dragRelation: "weak";
    dragStart(): void;
    dragControlStart(): void;
    dragGroupStart(moveable: import("../types").MoveableManagerInterface<import("../types").ClickableProps, {}>, e: any): void;
    dragEnd(moveable: import("../types").MoveableManagerInterface<import("../types").ClickableProps, {}>, e: any): void;
    dragGroupEnd(moveable: import("../types").MoveableGroupInterface<import("../types").ClickableProps, {}>, e: any): void;
    dragControlEnd(moveable: import("../types").MoveableManagerInterface<import("../types").ClickableProps, {}>, e: any): void;
    dragGroupControlEnd(moveable: import("../types").MoveableManagerInterface<import("../types").ClickableProps, {}>, e: any): void;
}, {
    name: string;
    props: {
        readonly dragArea: BooleanConstructor;
        readonly passDragArea: BooleanConstructor;
    };
    events: {
        readonly onClick: "click";
        readonly onClickGroup: "clickGroup";
    };
    render(moveable: import("../types").MoveableManagerInterface<import("../types").GroupableProps, {}>, React: import("../types").Renderer): any[];
    dragStart(moveable: import("../types").MoveableManagerInterface<{}, {}>, { datas, clientX, clientY, inputEvent }: any): false | undefined;
    drag(moveable: import("../types").MoveableManagerInterface<{}, {}>, { datas, inputEvent }: any): false | undefined;
    dragEnd(moveable: import("../types").MoveableManagerInterface<import("../types").DragAreaProps, {}>, e: any): false | undefined;
    dragGroupStart(moveable: import("../types").MoveableGroupInterface<{}, {}>, e: any): false | undefined;
    dragGroup(moveable: import("../types").MoveableGroupInterface<{}, {}>, e: any): false | undefined;
    dragGroupEnd(moveable: import("../types").MoveableGroupInterface<import("../types").DragAreaProps, {}>, e: any): false | undefined;
    unset(moveable: import("../types").MoveableManagerInterface<import("../types").DragAreaProps, {}>): void;
    enableNativeEvent(moveable: import("../types").MoveableManagerInterface<import("../types").DragAreaProps, {}>): void;
}, {
    readonly name: "renderable";
    readonly props: {};
    readonly events: {
        readonly onRenderStart: "renderStart";
        readonly onRender: "render";
        readonly onRenderEnd: "renderEnd";
        readonly onRenderGroupStart: "renderGroupStart";
        readonly onRenderGroup: "renderGroup";
        readonly onRenderGroupEnd: "renderGroupEnd";
    };
    readonly dragRelation: "weak";
    readonly dragStart: (moveable: import("../types").MoveableManagerInterface<import("../types").RenderableProps, {}>, e: any) => void;
    readonly drag: (moveable: import("../types").MoveableManagerInterface<import("../types").RenderableProps, {}>, e: any) => void;
    readonly dragAfter: (moveable: import("../types").MoveableManagerInterface<import("../types").RenderableProps, {}>, e: any) => void;
    readonly dragEnd: (moveable: import("../types").MoveableManagerInterface<import("../types").RenderableProps, {}>, e: any) => void;
    readonly dragGroupStart: (moveable: import("../types").MoveableGroupInterface<import("../types").RenderableProps, {}>, e: any) => void;
    readonly dragGroup: (moveable: import("../types").MoveableGroupInterface<import("../types").RenderableProps, {}>, e: any) => void;
    readonly dragGroupEnd: (moveable: import("../types").MoveableGroupInterface<import("../types").RenderableProps, {}>, e: any) => void;
    readonly dragControlStart: (moveable: import("../types").MoveableManagerInterface<import("../types").RenderableProps, {}>, e: any) => void;
    readonly dragControl: (moveable: import("../types").MoveableManagerInterface<import("../types").RenderableProps, {}>, e: any) => void;
    readonly dragControlAfter: (moveable: import("../types").MoveableManagerInterface<import("../types").RenderableProps, {}>, e: any) => void;
    readonly dragControlEnd: (moveable: import("../types").MoveableManagerInterface<import("../types").RenderableProps, {}>, e: any) => void;
    readonly dragGroupControlStart: (moveable: import("../types").MoveableGroupInterface<import("../types").RenderableProps, {}>, e: any) => void;
    readonly dragGroupControl: (moveable: import("../types").MoveableGroupInterface<import("../types").RenderableProps, {}>, e: any) => void;
    readonly dragGroupControlEnd: (moveable: import("../types").MoveableGroupInterface<import("../types").RenderableProps, {}>, e: any) => void;
    readonly fillDragParams: (moveable: import("../types").MoveableManagerInterface<import("../types").RenderableProps, {}>, e: any) => import("../types").OnRender;
    readonly fillDragEndParams: (moveable: import("../types").MoveableManagerInterface<import("../types").RenderableProps, {}>, e: any) => import("../types").OnRenderEnd;
}];
export declare const MOVEABLE_EVENTS_PROPS_MAP: {
    readonly onSnap: "snap";
} & {
    readonly onDragStart: "dragStart";
    readonly onDrag: "drag";
    readonly onDragEnd: "dragEnd";
    readonly onDragGroupStart: "dragGroupStart";
    readonly onDragGroup: "dragGroup";
    readonly onDragGroupEnd: "dragGroupEnd";
} & {
    readonly onResizeStart: "resizeStart";
    readonly onBeforeResize: "beforeResize";
    readonly onResize: "resize";
    readonly onResizeEnd: "resizeEnd";
    readonly onResizeGroupStart: "resizeGroupStart";
    readonly onBeforeResizeGroup: "beforeResizeGroup";
    readonly onResizeGroup: "resizeGroup";
    readonly onResizeGroupEnd: "resizeGroupEnd";
} & {
    readonly onRotateStart: "rotateStart";
    readonly onBeforeRotate: "beforeRotate";
    readonly onRotate: "rotate";
    readonly onRotateEnd: "rotateEnd";
    readonly onRotateGroupStart: "rotateGroupStart";
    readonly onBeforeRotateGroup: "beforeRotateGroup";
    readonly onRotateGroup: "rotateGroup";
    readonly onRotateGroupEnd: "rotateGroupEnd";
} & {
    readonly onScaleStart: "scaleStart";
    readonly onBeforeScale: "beforeScale";
    readonly onScale: "scale";
    readonly onScaleEnd: "scaleEnd";
    readonly onScaleGroupStart: "scaleGroupStart";
    readonly onBeforeScaleGroup: "beforeScaleGroup";
    readonly onScaleGroup: "scaleGroup";
    readonly onScaleGroupEnd: "scaleGroupEnd";
} & {
    readonly onClick: "click";
    readonly onClickGroup: "clickGroup";
} & {
    readonly onScroll: "scroll";
    readonly onScrollGroup: "scrollGroup";
} & {
    readonly onClipStart: "clipStart";
    readonly onClip: "clip";
    readonly onClipEnd: "clipEnd";
} & {
    readonly onDragOriginStart: "dragOriginStart";
    readonly onDragOrigin: "dragOrigin";
    readonly onDragOriginEnd: "dragOriginEnd";
} & {
    readonly onBeforeRenderStart: "beforeRenderStart";
    readonly onBeforeRender: "beforeRender";
    readonly onBeforeRenderEnd: "beforeRenderEnd";
    readonly onBeforeRenderGroupStart: "beforeRenderGroupStart";
    readonly onBeforeRenderGroup: "beforeRenderGroup";
    readonly onBeforeRenderGroupEnd: "beforeRenderGroupEnd";
} & {
    readonly onRenderStart: "renderStart";
    readonly onRender: "render";
    readonly onRenderEnd: "renderEnd";
    readonly onRenderGroupStart: "renderGroupStart";
    readonly onRenderGroup: "renderGroup";
    readonly onRenderGroupEnd: "renderGroupEnd";
} & {
    readonly onWarpStart: "warpStart";
    readonly onWarp: "warp";
    readonly onWarpEnd: "warpEnd";
} & {
    readonly onRoundStart: "roundStart";
    readonly onRound: "round";
    readonly onRoundEnd: "roundEnd";
} & {} & {
    readonly onPinchStart: "pinchStart";
    readonly onPinch: "pinch";
    readonly onPinchEnd: "pinchEnd";
    readonly onPinchGroupStart: "pinchGroupStart";
    readonly onPinchGroup: "pinchGroup";
    readonly onPinchGroupEnd: "pinchGroupEnd";
} & {} & {
    readonly onClick: "click";
    readonly onClickGroup: "clickGroup";
} & {} & {} & {};
export declare const MOVEABLE_PROPS_MAP: {
    readonly pinchable: BooleanConstructor;
} & {
    readonly snappable: readonly [BooleanConstructor, ArrayConstructor];
    readonly snapContainer: ObjectConstructor;
    readonly snapDirections: readonly [BooleanConstructor, ObjectConstructor];
    readonly elementSnapDirections: readonly [BooleanConstructor, ObjectConstructor];
    readonly snapGap: BooleanConstructor;
    readonly snapGridWidth: NumberConstructor;
    readonly snapGridHeight: NumberConstructor;
    readonly isDisplaySnapDigit: BooleanConstructor;
    readonly isDisplayInnerSnapDigit: BooleanConstructor;
    readonly snapDigit: NumberConstructor;
    readonly snapThreshold: NumberConstructor;
    readonly horizontalGuidelines: ArrayConstructor;
    readonly verticalGuidelines: ArrayConstructor;
    readonly elementGuidelines: ArrayConstructor;
    readonly bounds: ObjectConstructor;
    readonly innerBounds: ObjectConstructor;
    readonly snapDistFormat: FunctionConstructor;
} & {
    readonly draggable: BooleanConstructor;
    readonly throttleDrag: NumberConstructor;
    readonly throttleDragRotate: NumberConstructor;
    readonly startDragRotate: NumberConstructor;
    readonly edgeDraggable: BooleanConstructor;
} & {
    readonly resizable: BooleanConstructor;
    readonly throttleResize: NumberConstructor;
    readonly renderDirections: ArrayConstructor;
    readonly keepRatio: BooleanConstructor;
    readonly resizeFormat: FunctionConstructor;
    readonly keepRatioFinally: BooleanConstructor;
    readonly edge: BooleanConstructor;
} & {
    readonly rotatable: BooleanConstructor;
    readonly rotationPosition: StringConstructor;
    readonly throttleRotate: NumberConstructor;
    readonly renderDirections: ObjectConstructor;
    readonly rotationTarget: ObjectConstructor;
    readonly rotateAroundControls: BooleanConstructor;
    readonly edge: BooleanConstructor;
    readonly resolveAblesWithRotatable: ObjectConstructor;
} & {
    readonly scalable: BooleanConstructor;
    readonly throttleScale: NumberConstructor;
    readonly renderDirections: StringConstructor;
    readonly keepRatio: BooleanConstructor;
    readonly edge: BooleanConstructor;
} & {
    readonly dragArea: BooleanConstructor;
    readonly passDragArea: BooleanConstructor;
} & {
    readonly origin: BooleanConstructor;
} & {
    readonly scrollable: BooleanConstructor;
    readonly scrollContainer: ObjectConstructor;
    readonly scrollThreshold: NumberConstructor;
    readonly getScrollPosition: FunctionConstructor;
} & {
    readonly padding: BooleanConstructor;
} & {
    readonly clippable: BooleanConstructor;
    readonly defaultClipPath: StringConstructor;
    readonly customClipPath: StringConstructor;
    readonly keepRatio: BooleanConstructor;
    readonly clipRelative: BooleanConstructor;
    readonly clipArea: BooleanConstructor;
    readonly dragWithClip: BooleanConstructor;
    readonly clipTargetBounds: BooleanConstructor;
    readonly clipVerticalGuidelines: ArrayConstructor;
    readonly clipHorizontalGuidelines: ArrayConstructor;
    readonly clipSnapThreshold: BooleanConstructor;
} & {
    readonly originDraggable: BooleanConstructor;
    readonly originRelative: BooleanConstructor;
} & {
    clickable: BooleanConstructor;
} & {
    readonly edgeDraggable: BooleanConstructor;
} & {
    readonly target: ObjectConstructor;
    readonly dragTarget: ObjectConstructor;
    readonly container: ObjectConstructor;
    readonly portalContainer: ObjectConstructor;
    readonly rootContainer: ObjectConstructor;
    readonly useResizeObserver: BooleanConstructor;
    readonly zoom: NumberConstructor;
    readonly transformOrigin: ArrayConstructor;
    readonly edge: ObjectConstructor;
    readonly ables: ArrayConstructor;
    readonly className: StringConstructor;
    readonly pinchThreshold: NumberConstructor;
    readonly pinchOutside: BooleanConstructor;
    readonly triggerAblesSimultaneously: BooleanConstructor;
    readonly checkInput: BooleanConstructor;
    readonly cspNonce: StringConstructor;
    readonly translateZ: NumberConstructor;
    readonly hideDefaultLines: BooleanConstructor;
    readonly props: ObjectConstructor;
    readonly flushSync: FunctionConstructor;
    readonly stopPropagation: BooleanConstructor;
    readonly preventClickEventOnDrag: BooleanConstructor;
    readonly preventClickDefault: BooleanConstructor;
} & {
    readonly warpable: BooleanConstructor;
    readonly renderDirections: ArrayConstructor;
    readonly edge: BooleanConstructor;
} & {
    readonly roundable: BooleanConstructor;
    readonly roundRelative: BooleanConstructor;
    readonly minRoundControls: ArrayConstructor;
    readonly maxRoundControls: ArrayConstructor;
    readonly roundClickable: BooleanConstructor;
} & {
    readonly defaultGroupRotate: NumberConstructor;
    readonly defaultGroupOrigin: StringConstructor;
    readonly groupable: BooleanConstructor;
    readonly hideChildMoveableDefaultLines: BooleanConstructor;
} & {
    readonly individualGroupable: BooleanConstructor;
};
export declare const MOVEABLE_EVENTS_MAP: import("framework-utils").InvertObject<{
    readonly onSnap: "snap";
} & {
    readonly onDragStart: "dragStart";
    readonly onDrag: "drag";
    readonly onDragEnd: "dragEnd";
    readonly onDragGroupStart: "dragGroupStart";
    readonly onDragGroup: "dragGroup";
    readonly onDragGroupEnd: "dragGroupEnd";
} & {
    readonly onResizeStart: "resizeStart";
    readonly onBeforeResize: "beforeResize";
    readonly onResize: "resize";
    readonly onResizeEnd: "resizeEnd";
    readonly onResizeGroupStart: "resizeGroupStart";
    readonly onBeforeResizeGroup: "beforeResizeGroup";
    readonly onResizeGroup: "resizeGroup";
    readonly onResizeGroupEnd: "resizeGroupEnd";
} & {
    readonly onRotateStart: "rotateStart";
    readonly onBeforeRotate: "beforeRotate";
    readonly onRotate: "rotate";
    readonly onRotateEnd: "rotateEnd";
    readonly onRotateGroupStart: "rotateGroupStart";
    readonly onBeforeRotateGroup: "beforeRotateGroup";
    readonly onRotateGroup: "rotateGroup";
    readonly onRotateGroupEnd: "rotateGroupEnd";
} & {
    readonly onScaleStart: "scaleStart";
    readonly onBeforeScale: "beforeScale";
    readonly onScale: "scale";
    readonly onScaleEnd: "scaleEnd";
    readonly onScaleGroupStart: "scaleGroupStart";
    readonly onBeforeScaleGroup: "beforeScaleGroup";
    readonly onScaleGroup: "scaleGroup";
    readonly onScaleGroupEnd: "scaleGroupEnd";
} & {
    readonly onClick: "click";
    readonly onClickGroup: "clickGroup";
} & {
    readonly onScroll: "scroll";
    readonly onScrollGroup: "scrollGroup";
} & {
    readonly onClipStart: "clipStart";
    readonly onClip: "clip";
    readonly onClipEnd: "clipEnd";
} & {
    readonly onDragOriginStart: "dragOriginStart";
    readonly onDragOrigin: "dragOrigin";
    readonly onDragOriginEnd: "dragOriginEnd";
} & {
    readonly onBeforeRenderStart: "beforeRenderStart";
    readonly onBeforeRender: "beforeRender";
    readonly onBeforeRenderEnd: "beforeRenderEnd";
    readonly onBeforeRenderGroupStart: "beforeRenderGroupStart";
    readonly onBeforeRenderGroup: "beforeRenderGroup";
    readonly onBeforeRenderGroupEnd: "beforeRenderGroupEnd";
} & {
    readonly onRenderStart: "renderStart";
    readonly onRender: "render";
    readonly onRenderEnd: "renderEnd";
    readonly onRenderGroupStart: "renderGroupStart";
    readonly onRenderGroup: "renderGroup";
    readonly onRenderGroupEnd: "renderGroupEnd";
} & {
    readonly onWarpStart: "warpStart";
    readonly onWarp: "warp";
    readonly onWarpEnd: "warpEnd";
} & {
    readonly onRoundStart: "roundStart";
    readonly onRound: "round";
    readonly onRoundEnd: "roundEnd";
} & {} & {
    readonly onPinchStart: "pinchStart";
    readonly onPinch: "pinch";
    readonly onPinchEnd: "pinchEnd";
    readonly onPinchGroupStart: "pinchGroupStart";
    readonly onPinchGroup: "pinchGroup";
    readonly onPinchGroupEnd: "pinchGroupEnd";
} & {} & {
    readonly onClick: "click";
    readonly onClickGroup: "clickGroup";
} & {} & {} & {}, import("framework-utils").EntriesObject<{
    readonly onSnap: "snap";
} & {
    readonly onDragStart: "dragStart";
    readonly onDrag: "drag";
    readonly onDragEnd: "dragEnd";
    readonly onDragGroupStart: "dragGroupStart";
    readonly onDragGroup: "dragGroup";
    readonly onDragGroupEnd: "dragGroupEnd";
} & {
    readonly onResizeStart: "resizeStart";
    readonly onBeforeResize: "beforeResize";
    readonly onResize: "resize";
    readonly onResizeEnd: "resizeEnd";
    readonly onResizeGroupStart: "resizeGroupStart";
    readonly onBeforeResizeGroup: "beforeResizeGroup";
    readonly onResizeGroup: "resizeGroup";
    readonly onResizeGroupEnd: "resizeGroupEnd";
} & {
    readonly onRotateStart: "rotateStart";
    readonly onBeforeRotate: "beforeRotate";
    readonly onRotate: "rotate";
    readonly onRotateEnd: "rotateEnd";
    readonly onRotateGroupStart: "rotateGroupStart";
    readonly onBeforeRotateGroup: "beforeRotateGroup";
    readonly onRotateGroup: "rotateGroup";
    readonly onRotateGroupEnd: "rotateGroupEnd";
} & {
    readonly onScaleStart: "scaleStart";
    readonly onBeforeScale: "beforeScale";
    readonly onScale: "scale";
    readonly onScaleEnd: "scaleEnd";
    readonly onScaleGroupStart: "scaleGroupStart";
    readonly onBeforeScaleGroup: "beforeScaleGroup";
    readonly onScaleGroup: "scaleGroup";
    readonly onScaleGroupEnd: "scaleGroupEnd";
} & {
    readonly onClick: "click";
    readonly onClickGroup: "clickGroup";
} & {
    readonly onScroll: "scroll";
    readonly onScrollGroup: "scrollGroup";
} & {
    readonly onClipStart: "clipStart";
    readonly onClip: "clip";
    readonly onClipEnd: "clipEnd";
} & {
    readonly onDragOriginStart: "dragOriginStart";
    readonly onDragOrigin: "dragOrigin";
    readonly onDragOriginEnd: "dragOriginEnd";
} & {
    readonly onBeforeRenderStart: "beforeRenderStart";
    readonly onBeforeRender: "beforeRender";
    readonly onBeforeRenderEnd: "beforeRenderEnd";
    readonly onBeforeRenderGroupStart: "beforeRenderGroupStart";
    readonly onBeforeRenderGroup: "beforeRenderGroup";
    readonly onBeforeRenderGroupEnd: "beforeRenderGroupEnd";
} & {
    readonly onRenderStart: "renderStart";
    readonly onRender: "render";
    readonly onRenderEnd: "renderEnd";
    readonly onRenderGroupStart: "renderGroupStart";
    readonly onRenderGroup: "renderGroup";
    readonly onRenderGroupEnd: "renderGroupEnd";
} & {
    readonly onWarpStart: "warpStart";
    readonly onWarp: "warp";
    readonly onWarpEnd: "warpEnd";
} & {
    readonly onRoundStart: "roundStart";
    readonly onRound: "round";
    readonly onRoundEnd: "roundEnd";
} & {} & {
    readonly onPinchStart: "pinchStart";
    readonly onPinch: "pinch";
    readonly onPinchEnd: "pinchEnd";
    readonly onPinchGroupStart: "pinchGroupStart";
    readonly onPinchGroup: "pinchGroup";
    readonly onPinchGroupEnd: "pinchGroupEnd";
} & {} & {
    readonly onClick: "click";
    readonly onClickGroup: "clickGroup";
} & {} & {} & {}>>;
export declare const MOVEABLE_EVENTS: string[];
export declare const MOVEABLE_PROPS: string[];
