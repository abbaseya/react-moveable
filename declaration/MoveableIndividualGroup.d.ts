/// <reference types="react" />
import MoveableManager from "./MoveableManager";
import { GroupableProps, RectInfo } from "./types";
/**
 * @namespace Moveable.IndividualGroup
 * @description Create targets individually, not as a group.Create targets individually, not as a group.
 */
declare class MoveableIndividualGroup extends MoveableManager<GroupableProps> {
    moveables: MoveableManager[];
    render(): JSX.Element;
    componentDidUpdate(): void;
    updateRect(type?: "Start" | "" | "End", isTarget?: boolean, isSetState?: boolean): void;
    getRect(): RectInfo;
    request(): {
        request(): any;
        requestEnd(): any;
    };
    dragStart(): this;
    hitTest(): number;
    isInside(): boolean;
    isDragging(): boolean;
    updateRenderPoses(): void;
    checkUpdate(): void;
    triggerEvent(): void;
    protected updateAbles(): void;
    protected _updateEvents(): void;
    protected _updateObserver(): void;
}
/**
 * Create targets individually, not as a group.
 * @name Moveable.IndividualGroup#individualGroupable
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *   target: [].slice.call(document.querySelectorAll(".target")),
 *   individualGroupable: true,
 * });
 */
export default MoveableIndividualGroup;
