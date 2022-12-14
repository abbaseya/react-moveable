import { Renderer, MoveableGroupInterface, GroupableProps } from "../types";
declare const _default: {
    name: string;
    props: {
        readonly defaultGroupRotate: NumberConstructor;
        readonly defaultGroupOrigin: StringConstructor;
        readonly groupable: BooleanConstructor;
        readonly hideChildMoveableDefaultLines: BooleanConstructor;
    };
    events: {};
    render(moveable: MoveableGroupInterface<GroupableProps>, React: Renderer): any[];
};
export default _default;
