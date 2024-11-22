import type { MenuProps } from "../types";
export const defaultMenuProps: MenuProps = {
    list: () => [
        {
            name: "下班",
            fn: () => {
                console.log("我到点下班啦！~ ");
            },
        },
        {
            name: "吃啥",
            fn: () => {
                console.log("这餐吃炸鸡~ ");
            },
        },
    ],
    model: "click",
    stopPropagation: true,
    preventDefault: true,
    beforeCreateFn: () => true,
    position: null,
    style: {},
    menuContainerStyle: {},
    nameKey: "name",
    fnKey: "fn",
};
