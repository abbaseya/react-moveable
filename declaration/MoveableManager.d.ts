import * as React from "react";
import Gesto from "gesto";
import { MoveableManagerProps, MoveableManagerState, Able, RectInfo, Requester, HitRect, MoveableManagerInterface, MoveableDefaultOptions } from "./types";
import { IObject } from "@daybrush/utils";
import EventManager from "./EventManager";
import EventEmitter from "@scena/event-emitter";
export default class MoveableManager<T = {}> extends React.PureComponent<MoveableManagerProps<T>, MoveableManagerState> {
    static defaultProps: Required<MoveableManagerProps>;
    state: MoveableManagerState;
    renderState: Record<string, any>;
    enabledAbles: Able[];
    targetAbles: Able[];
    controlAbles: Able[];
    controlBox: {
        getElement(): HTMLElement;
    };
    areaElement: HTMLElement;
    targetGesto: Gesto;
    controlGesto: Gesto;
    rotation: number;
    scale: number[];
    isUnmounted: boolean;
    events: Record<string, EventManager | null>;
    protected _emitter: EventEmitter;
    protected _prevTarget: HTMLElement | SVGElement | null | undefined;
    protected _prevDragArea: boolean;
    private _observer;
    private _observerId;
    render(): JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    /**
     * Get the able used in MoveableManager.
     * @method Moveable#getAble
     * @param - able name
     */
    getAble<T extends Able>(ableName: string): T | undefined;
    getContainer(): HTMLElement | SVGElement;
    /**
     * Check if the target is an element included in the moveable.
     * @method Moveable#isMoveableElement
     * @param - the target
     * @example
     * import Moveable from "moveable";
     *
     * const moveable = new Moveable(document.body);
     *
     * window.addEventListener("click", e => {
     *     if (!moveable.isMoveableElement(e.target)) {
     *         moveable.target = e.target;
     *     }
     * });
     */
    isMoveableElement(target: Element): boolean;
    /**
     * You can drag start the Moveable through the external `MouseEvent`or `TouchEvent`. (Angular: ngDragStart)
     * @method Moveable#dragStart
     * @param - external `MouseEvent`or `TouchEvent`
     * @example
     * import Moveable from "moveable";
     *
     * const moveable = new Moveable(document.body);
     *
     * document.body.addEventListener("mousedown", e => {
     *     if (!moveable.isMoveableElement(e.target)) {
     *          moveable.dragStart(e);
     *     }
     * });
     */
    dragStart(e: MouseEvent | TouchEvent): this;
    /**
     * Hit test an element or rect on a moveable target.
     * @method Moveable#hitTest
     * @param - element or rect to test
     * @return - Get hit test rate (rate > 0 is hitted)
     * @example
     * import Moveable from "moveable";
     *
     * const moveable = new Moveable(document.body);
     *
     * document.body.addEventListener("mousedown", e => {
     *     if (moveable.hitTest(e.target) > 0) {
     *          console.log("hiited");
     *     }
     * });
     */
    hitTest(el: Element | HitRect): number;
    /**
     * Whether the coordinates are inside Moveable
     * @method Moveable#isInside
     * @param - x coordinate
     * @param - y coordinate
     * @return - True if the coordinate is in moveable or false
     * @example
     * import Moveable from "moveable";
     *
     * const moveable = new Moveable(document.body);
     *
     * document.body.addEventListener("mousedown", e => {
     *     if (moveable.isInside(e.clientX, e.clientY)) {
     *          console.log("inside");
     *     }
     * });
     */
    isInside(clientX: number, clientY: number): boolean;
    /**
     * If the width, height, left, and top of all elements change, update the shape of the moveable.
     * @method Moveable#updateRect
     * @example
     * import Moveable from "moveable";
     *
     * const moveable = new Moveable(document.body);
     *
     * window.addEventListener("resize", e => {
     *     moveable.updateRect();
     * });
     */
    updateRect(type?: "Start" | "" | "End", isTarget?: boolean, isSetState?: boolean): void;
    /**
     * Check if the moveable state is being dragged.
     * @method Moveable#isDragging
     * @example
     * import Moveable from "moveable";
     *
     * const moveable = new Moveable(document.body);
     *
     * // false
     * console.log(moveable.isDragging());
     *
     * moveable.on("drag", () => {
     *   // true
     *   console.log(moveable.isDragging());
     * });
     */
    isDragging(): boolean;
    /**
     * If the width, height, left, and top of the only target change, update the shape of the moveable.
     * @method Moveable#updateTarget
     * @example
     * import Moveable from "moveable";
     *
     * const moveable = new Moveable(document.body);
     *
     * moveable.updateTarget();
     */
    updateTarget(type?: "Start" | "" | "End"): void;
    /**
     * You can get the vertex information, position and offset size information of the target based on the container.
     * @method Moveable#getRect
     * @return - The Rect Info
     * @example
     * import Moveable from "moveable";
     *
     * const moveable = new Moveable(document.body);
     *
     * const rectInfo = moveable.getRect();
     */
    getRect(): RectInfo;
    /**
     * Get a manager that manages the moveable's state and props.
     * @method Moveable#getManager
     * @return - The Rect Info
     * @example
     * import Moveable from "moveable";
     *
     * const moveable = new Moveable(document.body);
     *
     * const manager = moveable.getManager(); // real moveable class instance
     */
    getManager(): MoveableManagerInterface<any, any>;
    getRotation(): number;
    /**
     * Request able through a method rather than an event.
     * At the moment of execution, requestStart is executed,
     * and then request and requestEnd can be executed through Requester.
     * @method Moveable#request
     * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Draggable.html#request|Draggable Requester}
     * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Resizable.html#request|Resizable Requester}
     * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Scalable.html#request|Scalable Requester}
     * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.Rotatable.html#request|Rotatable Requester}
     * @see {@link https://daybrush.com/moveable/release/latest/doc/Moveable.OriginDraggable.html#request|OriginDraggable Requester}
     * @param - ableName
     * @param - request to be able params.
     * @param - If isInstant is true, request and requestEnd are executed immediately.
     * @return - Able Requester. If there is no request in able, nothing will work.
     * @example
     * import Moveable from "moveable";
     *
     * const moveable = new Moveable(document.body);
     *
     * // Instantly Request (requestStart - request - requestEnd)
     * moveable.request("draggable", { deltaX: 10, deltaY: 10 }, true);
     *
     * // Start move
     * const requester = moveable.request("draggable");
     * requester.request({ deltaX: 10, deltaY: 10 });
     * requester.request({ deltaX: 10, deltaY: 10 });
     * requester.request({ deltaX: 10, deltaY: 10 });
     * requester.requestEnd();
     */
    request(ableName: string, param?: IObject<any>, isInstant?: boolean): Requester;
    /**
     * Remove the Moveable object and the events.
     * @method Moveable#destroy
     * @example
     * import Moveable from "moveable";
     *
     * const moveable = new Moveable(document.body);
     *
     * moveable.destroy();
     */
    destroy(): void;
    updateRenderPoses(): void;
    checkUpdate(): void;
    triggerEvent(name: string, e: any): any;
    useCSS(tag: string, css: string): any;
    onPreventClick: (e: any) => void;
    checkUpdateRect: () => void;
    protected unsetAbles(): void;
    protected updateAbles(ables?: Able[], eventAffix?: string): void;
    protected updateState(nextState: any, isSetState?: boolean): void;
    protected getEnabledAbles(): Able<IObject<any>, IObject<any>>[];
    protected renderAbles(): any[];
    protected updateCheckInput(): void;
    protected _updateObserver(prevProps: MoveableDefaultOptions): void;
    protected _updateEvents(): void;
    protected _updateTargets(): void;
    private _renderLines;
    private _isTargetChanged;
    private _updateNativeEvents;
}
/**
 * The target to indicate Moveable Control Box.
 * @name Moveable#target
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body);
 * moveable.target = document.querySelector(".target");
 */
/**
 * Zooms in the elements of a moveable.
 * @name Moveable#zoom
 * @default 1
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body);
 * moveable.zoom = 2;
 */
/**
 * Whether the target size is detected and updated whenever it changes.
 * @name Moveable#useResizeObserver
 * @default false
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body);
 * moveable.useResizeObserver = true;
 */
/**
 * Resize, Scale Events at edges
 * @name Moveable#edge
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body);
 * moveable.edge = true;
 */
/**
 * You can specify the className of the moveable controlbox.
 * @name Moveable#className
 * @default ""
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *   className: "",
 * });
 *
 * moveable.className = "moveable1";
 */
/**
 * The target(s) to drag Moveable target(s)
 * @name Moveable#dragTarget
 * @default target
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body);
 * moveable.target = document.querySelector(".target");
 * moveable.dragTarget = document.querySelector(".dragTarget");
 */
/**
 * `renderStart` event occurs at the first start of all events.
 * @memberof Moveable
 * @event renderStart
 * @param {Moveable.OnRenderStart} - Parameters for the `renderStart` event
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *     target: document.querySelector(".target"),
 * });
 * moveable.on("renderStart", ({ target }) => {
 *     console.log("onRenderStart", target);
 * });
 */
/**
 * `render` event occurs before the target is drawn on the screen.
 * @memberof Moveable
 * @event render
 * @param {Moveable.OnRender} - Parameters for the `render` event
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *     target: document.querySelector(".target"),
 * });
 * moveable.on("render", ({ target }) => {
 *     console.log("onRender", target);
 * });
 */
/**
 * `renderEnd` event occurs at the end of all events.
 * @memberof Moveable
 * @event renderEnd
 * @param {Moveable.OnRenderEnd} - Parameters for the `renderEnd` event
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *     target: document.querySelector(".target"),
 * });
 * moveable.on("renderEnd", ({ target }) => {
 *     console.log("onRenderEnd", target);
 * });
 */
/**
 * `renderGroupStart` event occurs at the first start of all events in group.
 * @memberof Moveable
 * @event renderGroupStart
 * @param {Moveable.OnRenderGroupStart} - Parameters for the `renderGroupStart` event
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *     target: [].slice.call(document.querySelectorAll(".target")),
 * });
 * moveable.on("renderGroupStart", ({ targets }) => {
 *     console.log("onRenderGroupStart", targets);
 * });
 */
/**
 * `renderGroup` event occurs before the target is drawn on the screen in group.
 * @memberof Moveable
 * @event renderGroup
 * @param {Moveable.OnRenderGroup} - Parameters for the `renderGroup` event
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *     target: [].slice.call(document.querySelectorAll(".target")),
 * });
 * moveable.on("renderGroup", ({ targets }) => {
 *     console.log("onRenderGroup", targets);
 * });
 */
/**
 * `renderGroupEnd` event occurs at the end of all events in group.
 * @memberof Moveable
 * @event renderGroupEnd
 * @param {Moveable.OnRenderGroupEnd} - Parameters for the `renderGroupEnd` event
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *     target: [].slice.call(document.querySelectorAll(".target")),
 * });
 * moveable.on("renderGroupEnd", ({ targets }) => {
 *     console.log("onRenderGroupEnd", targets);
 * });
 */
