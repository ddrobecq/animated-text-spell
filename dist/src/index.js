import { useEffect, useState, } from "react";
import React from "react";
export default function AnimatedText(props) {
    var text = props.text;
    var frequency = props.frequency || 100;
    var inc = props.inc || 1;
    var _a = useState(''), textToDisplay = _a[0], setTextToDisplay = _a[1];
    var _b = useState(0), counter = _b[0], setCounter = _b[1];
    var timer;
    if (text) {
        timer = setTimeout(increment, frequency);
    }
    function increment() {
        setCounter(counter + inc);
        if (counter >= text.length) {
            clearTimeout(timer);
        }
    }
    useEffect(function () {
        if (text) {
            var sub = text.substring(0, counter);
            setTextToDisplay(sub);
        }
    }, [counter, text]);
    return (React.createElement(React.Fragment, null, textToDisplay));
}
//# sourceMappingURL=index.js.map