import { CountUp } from "./countUp.js";


window.onload = function () {
    const options = {
        enableScrollSpy: true,
        duration: 2.2,
        separator: '',
    };

    let count_1 = new CountUp('total_case', 12, options);
    count_1.handleScroll();
    // if (!count_1.error) {
    //     // count_1.start();
    //     // count_2.start();
    // } else {
    //     console.error(count_1.error);
    // }
}