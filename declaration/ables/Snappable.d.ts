import { Renderer, SnappableProps, SnappableState, ScalableProps, RotatableProps, RectInfo, MoveableManagerInterface, MoveableGroupInterface } from "../types";
export interface SnapPoses {
    vertical: number[];
    horizontal: number[];
}
export declare function snapStart(moveable: MoveableManagerInterface<SnappableProps, SnappableState>): void;
export declare function normalized(value: number): number;
export declare function getSizeOffsetInfo(moveable: MoveableManagerInterface<SnappableProps, SnappableState>, poses: number[][], direction: number[], keepRatio: boolean, isRequest: boolean, datas: any): {
    width: {
        isBound: boolean;
        offset: number;
    };
    height: {
        isBound: boolean;
        offset: number;
    };
};
export declare function recheckSizeByTwoDirection(moveable: MoveableManagerInterface<SnappableProps, SnappableState>, poses: number[][], width: number, height: number, maxWidth: number, maxHeight: number, direction: number[], isRequest: boolean, datas: any): number[];
export declare function checkSizeDist(moveable: MoveableManagerInterface<any, any>, getNextPoses: (widthOffset: number, heightOffset: number) => number[][], width: number, height: number, direction: number[], fixedPosition: number[], isRequest: boolean, datas: any): number[];
export declare function checkSnapRotate(moveable: MoveableManagerInterface<SnappableProps & RotatableProps, any>, rect: RectInfo, origin: number[], rotation: number): number;
export declare function checkSnapResize(moveable: MoveableManagerInterface<{}, {}>, width: number, height: number, direction: number[], fixedPosition: number[], isRequest: boolean, datas: any): number[];
export declare function checkSnapScale(moveable: MoveableManagerInterface<ScalableProps, any>, scale: number[], direction: number[], isRequest: boolean, datas: any): number[];
export declare function startCheckSnapDrag(moveable: MoveableManagerInterface<any, any>, datas: any): void;
declare const _default: {
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
    render(moveable: MoveableManagerInterface<SnappableProps, SnappableState>, React: Renderer): any[];
    dragStart(moveable: MoveableManagerInterface<SnappableProps, SnappableState>, e: any): void;
    drag(moveable: MoveableManagerInterface<SnappableProps, SnappableState>): void;
    pinchStart(moveable: MoveableManagerInterface<SnappableProps, SnappableState>): void;
    dragEnd(moveable: MoveableManagerInterface<SnappableProps, SnappableState>): void;
    dragControlCondition(moveable: MoveableManagerInterface, e: any): boolean | undefined;
    dragControlStart(moveable: MoveableManagerInterface<SnappableProps, SnappableState>): void;
    dragControl(moveable: MoveableManagerInterface<SnappableProps, SnappableState>): void;
    dragControlEnd(moveable: MoveableManagerInterface<SnappableProps, SnappableState>): void;
    dragGroupStart(moveable: any, e: any): void;
    dragGroup(moveable: MoveableGroupInterface<SnappableProps, SnappableState>): void;
    dragGroupEnd(moveable: MoveableGroupInterface<SnappableProps, SnappableState>): void;
    dragGroupControlStart(moveable: MoveableGroupInterface<SnappableProps, SnappableState>): void;
    dragGroupControl(moveable: MoveableManagerInterface<SnappableProps, SnappableState>): void;
    dragGroupControlEnd(moveable: MoveableGroupInterface<SnappableProps, SnappableState>): void;
    unset(moveable: any): void;
};
/**
 * @namespace Moveable.Snappable
 * @description Whether or not target can be snapped to the guideline. (default: false)
 * @sort 2
 */
export default _default;
/**
 * Whether or not target can be snapped to the guideline. (default: false)
 * @name Moveable.Snappable#snappable
 * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Snappable.html#.SnappableOptions}
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body);
 *
 * moveable.snappable = true;
 */
/**
 *  A snap container that is the basis for snap, bounds, and innerBounds. (default: null = container)
 * @name Moveable.Snappable#snapContainer
 * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Snappable.html#.SnappableOptions}
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.querySelector(".container"));
 *
 * moveable.snapContainer = document.body;
 */
/**
 * You can specify the directions to snap to the target. (default: { left: true, top: true, right: true, bottom: true })
 * @name Moveable.Snappable#snapDirections
 * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Snappable.html#.SnappableOptions}
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *   snappable: true,
 *   snapDirections: true,
 * });
 * // snap center
 * moveable.snapDirections = { left: true, top: true, right: true, bottom: true, center: true, middle: true };
 */
/**
 * You can specify the snap directions of elements. (default: { left: true, top: true, right: true, bottom: true })
 * @name Moveable.Snappable#elementSnapDirections
 * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Snappable.html#.SnappableOptions}
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *   snappable: true,
 *   elementSnapDirections: true,
 * });
 * // snap center
 * moveable.elementSnapDirections = { left: true, top: true, right: true, bottom: true, center: true, middle: true };
 */
/**
 * When you drag, make the gap snap in the element guidelines. (default: true)
 * @name Moveable.Snappable#snapGap
 * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Snappable.html#.SnappableOptions}
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *   snappable: true,
 *   snapElement: true,
 *   snapGap: true,
 * });
 *
 * moveable.snapGap = false;
 */
/**
 * Distance value that can snap to guidelines. (default: 5)
 * @name Moveable.Snappable#snapThreshold
 * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Snappable.html#.SnappableOptions}
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body);
 *
 * moveable.snapThreshold = 5;
 */
/**
 * Add guidelines in the horizontal direction. (default: [])
 * @name Moveable.Snappable#horizontalGuidelines
 * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Snappable.html#.SnappableOptions}
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body);
 *
 * moveable.horizontalGuidelines = [100, 200, 500];
 */
/**
 * Add guidelines in the vertical direction. (default: [])
 * @name Moveable.Snappable#verticalGuidelines
 * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Snappable.html#.SnappableOptions}
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body);
 *
 * moveable.verticalGuidelines = [100, 200, 500];
 */
/**
 * Add guidelines for the element. (default: [])
 * @name Moveable.Snappable#elementGuidelines
 * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Snappable.html#.SnappableOptions}
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body);
 *
 * moveable.elementGuidelines = [
 *   document.querySelector(".element"),
 * ];
 */
/**
 * You can set up boundaries.
 * @name Moveable.Snappable#bounds
 * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Snappable.html#.SnappableOptions}
 * @default null
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body);
 *
 * moveable.bounds = { left: 0, right: 1000, top: 0, bottom: 1000};
 */
/**
 * You can set up inner boundaries.
 * @name Moveable.Snappable#innerBounds
 * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Snappable.html#.SnappableOptions}
 * @default null
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body);
 *
 * moveable.innerBounds = { left: 500, top: 500, width: 100, height: 100};
 */
/**
 * snap distance digits (default: 0)
 * @name Moveable.Snappable#snapDigit
 * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Snappable.html#.SnappableOptions}
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body);
 *
 * moveable.snapDigit = 0
 */
/**
 * If width size is greater than 0, you can vertical snap to the grid. (default: 0)
 * @name Moveable.Snappable#snapGridWidth
 * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Snappable.html#.SnappableOptions}
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body);
 *
 * moveable.snapGridWidth = 5;
 */
/**
 * If height size is greater than 0, you can horizontal snap to the grid. (default: 0)
 * @name Moveable.Snappable#snapGridHeight
 * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Snappable.html#.SnappableOptions}
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body);
 *
 * moveable.snapGridHeight = 5;
 */
/**
 * Whether to show snap distance (default: true)
 * @name Moveable.Snappable#isDisplaySnapDigit
 * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Snappable.html#.SnappableOptions}
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body);
 *
 * moveable.isDisplaySnapDigit = true;
 */
/**
 * Whether to show element inner snap distance (default: false)
 * @name Moveable.Snappable#isDisplayInnerSnapDigit
 * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Snappable.html#.SnappableOptions}
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body);
 *
 * moveable.isDisplayInnerSnapDigit = true;
 */
/**
 * You can set the text format of the distance shown in the guidelines. (default: self)
 * @name Moveable.Snappable#snapDistFormat
 * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Snappable.html#.SnappableOptions}
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *  snappable: true,
 *  snapDistFormat: (v, type) => v,
 * });
 * moveable.snapDistFormat = (v, type) => `${v}px`;
 */
/**
 * When you drag or dragControl, the `snap` event is called.
 * @memberof Moveable.Snappable
 * @event snap
 * @param {Moveable.Snappable.OnSnap} - Parameters for the `snap` event
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *     snappable: true
 * });
 * moveable.on("snap", e => {
 *     console.log("onSnap", e);
 * });
 */
