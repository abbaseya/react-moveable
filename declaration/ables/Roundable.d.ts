import { Renderer, RoundableProps, RoundableState, MoveableManagerInterface } from "../types";
declare const _default: {
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
    render(moveable: MoveableManagerInterface<RoundableProps, RoundableState>, React: Renderer): any;
    dragControlCondition(moveable: any, e: any): boolean;
    dragControlStart(moveable: MoveableManagerInterface<RoundableProps, RoundableState>, e: any): boolean;
    dragControl(moveable: MoveableManagerInterface<RoundableProps, RoundableState>, e: any): boolean;
    dragControlEnd(moveable: MoveableManagerInterface<RoundableProps, RoundableState>, e: any): boolean;
    unset(moveable: MoveableManagerInterface<RoundableProps, RoundableState>): void;
};
/**
 * @namespace Moveable.Roundable
 * @description Whether to show and drag or double click border-radius
 */
export default _default;
/**
 * Whether to show and drag or double click border-radius, (default: false)
 * @name Moveable.Roundable#roundable
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *     roundable: true,
 *     roundRelative: false,
 * });
 * moveable.on("roundStart", e => {
 *     console.log(e);
 * }).on("round", e => {
 *     e.target.style.borderRadius = e.borderRadius;
 * }).on("roundEnd", e => {
 *     console.log(e);
 * });
 */
/**
 * % Can be used instead of the absolute px
 * @name Moveable.Roundable#roundRelative
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *     roundable: true,
 *     roundRelative: false,
 * });
 * moveable.on("roundStart", e => {
 *     console.log(e);
 * }).on("round", e => {
 *     e.target.style.borderRadius = e.borderRadius;
 * }).on("roundEnd", e => {
 *     console.log(e);
 * });
 */
/**
 * Minimum number of round controls. It moves in proportion by control. [horizontal, vertical] (default: [0, 0])
 * @name Moveable.Roundable#minRoundControls
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *     roundable: true,
 *     roundRelative: false,
 *     minRoundControls: [0, 0],
 * });
 * moveable.maxRoundControls = [1, 0];
 */
/**
 * Maximum number of round controls. It moves in proportion by control. [horizontal, vertical] (default: [4, 4])
 * @name Moveable.Roundable#maxRoundControls
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *     roundable: true,
 *     roundRelative: false,
 *     maxRoundControls: [4, 4],
 * });
 * moveable.maxRoundControls = [1, 0];
 */
/**
 * @property - Whether you can add/delete round controls by double-clicking a line or control. (default: true)
 * @name Moveable.Roundable#roundClickable
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *     roundable: true,
 *     roundRelative: false,
 *     roundClickable: true,
 * });
 * moveable.roundClickable = false;
 */
/**
 * When drag start the clip area or controls, the `roundStart` event is called.
 * @memberof Moveable.Roundable
 * @event roundStart
 * @param {Moveable.Roundable.OnRoundStart} - Parameters for the `roundStart` event
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *     roundable: true,
 *     roundRelative: false,
 * });
 * moveable.on("roundStart", e => {
 *     console.log(e);
 * }).on("round", e => {
 *     e.target.style.borderRadius = e.borderRadius;
 * }).on("roundEnd", e => {
 *     console.log(e);
 * });
 */
/**
 * When drag or double click the border area or controls, the `round` event is called.
 * @memberof Moveable.Roundable
 * @event round
 * @param {Moveable.Roundable.OnRound} - Parameters for the `round` event
 * @example
  * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *     roundable: true,
 *     roundRelative: false,
 * });
 * moveable.on("roundStart", e => {
 *     console.log(e);
 * }).on("round", e => {
 *     e.target.style.borderRadius = e.borderRadius;
 * }).on("roundEnd", e => {
 *     console.log(e);
 * });
 */
/**
 * When drag end the border area or controls, the `roundEnd` event is called.
 * @memberof Moveable.Roundable
 * @event roundEnd
 * @param {Moveable.Roundable.onRoundEnd} - Parameters for the `roundEnd` event
 * @example
  * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *     roundable: true,
 *     roundRelative: false,
 * });
 * moveable.on("roundStart", e => {
 *     console.log(e);
 * }).on("round", e => {
 *     e.target.style.borderRadius = e.borderRadius;
 * }).on("roundEnd", e => {
 *     console.log(e);
 * });
 */
