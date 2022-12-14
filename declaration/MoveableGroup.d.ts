import MoveableManager from "./MoveableManager";
import { GroupableProps, RectInfo } from "./types";
import ChildrenDiffer from "@egjs/children-differ";
/**
 * @namespace Moveable.Group
 * @description You can make targets moveable.
 */
declare class MoveableGroup extends MoveableManager<GroupableProps> {
    static defaultProps: {
        transformOrigin: string[];
        groupable: boolean;
        dragArea: boolean;
        keepRatio: boolean;
        targets: never[];
        defaultGroupRotate: number;
        defaultGroupOrigin: string;
        cssStyled: any;
        customStyledMap: Record<string, any>;
        wrapperMoveable: import("./types").MoveableManagerInterface<{}, {}> | null;
        parentMoveable: import("./types").MoveableManagerInterface<{}, {}> | null;
        parentPosition: {
            left: number;
            top: number;
        } | null;
        target: HTMLElement | SVGElement | null;
        dragTarget: HTMLElement | SVGElement | null;
        container: HTMLElement | SVGElement | null;
        portalContainer: HTMLElement | null;
        rootContainer: HTMLElement | null;
        useResizeObserver: boolean;
        zoom: number;
        ables: import("./types").Able<import("@daybrush/utils").IObject<any>, import("@daybrush/utils").IObject<any>>[];
        className: string;
        pinchThreshold: number;
        pinchOutside: boolean;
        triggerAblesSimultaneously: boolean;
        checkInput: boolean;
        cspNonce: string;
        translateZ: string | number;
        hideDefaultLines: boolean;
        stopPropagation: boolean;
        preventClickEventOnDrag: boolean;
        preventClickDefault: boolean;
        props: Record<string, any>;
        flushSync: (callback: () => void) => void;
        passDragArea: boolean;
        origin: boolean;
        padding: import("./types").PaddingBox;
    };
    differ: ChildrenDiffer<HTMLElement | SVGElement>;
    moveables: MoveableManager[];
    transformOrigin: string;
    checkUpdate(): void;
    updateRect(type?: "Start" | "" | "End", isTarget?: boolean, isSetState?: boolean): void;
    getRect(): RectInfo;
    triggerEvent(name: string, e: any, isManager?: boolean): any;
    protected updateAbles(): void;
    protected _updateTargets(): void;
    protected _updateEvents(): void;
    protected _updateObserver(): void;
}
/**
 * Sets the initial rotation of the group.
 * @name Moveable.Group#defaultGroupRotate
 * @default 0
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *   target: [].slice.call(document.querySelectorAll(".target")),
 *   defaultGroupRotate: 0,
 * });
 *
 * moveable.defaultGroupRotate = 40;
 */
/**
 * Sets the initial origin of the group.
 * @name Moveable.Group#defaultGroupOrigin
 * @default 0
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *   target: [].slice.call(document.querySelectorAll(".target")),
 *   defaultGroupOrigin: "50% 50%",
 * });
 *
 * moveable.defaultGroupOrigin = "20% 40%";
 */
/**
 * Whether to hide the line in child moveable for group corresponding to the rect of the target.
 * @name Moveable.Group#hideChildMoveableDefaultLines
 * @default false
 * @example
 * import Moveable from "moveable";
 *
 * const moveable = new Moveable(document.body, {
 *   target: [].slice.call(document.querySelectorAll(".target")),
 *   hideChildMoveableDefaultLines: false,
 * });
 *
 * moveable.hideChildMoveableDefaultLines = true;
 */
export default MoveableGroup;
