import { CountUp } from "../../node_modules/countup.js/dist/countUp";
export function countUpValue(elementId, endValue, options) {
    const countUp = new CountUp(elementId, endValue, options);
    if (!countUp.error) {
        countUp.start();
    }
    else {
        console.error(countUp.error);
    }
}
//# sourceMappingURL=countupjs-lib.js.map