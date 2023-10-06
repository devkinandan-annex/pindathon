"use strict";
import { colors} from "../../theme"
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_svg_1 = require("react-native-svg");
const GradientCircularProgress = ({ size, progress, strokeWidth = 6, emptyColor, startColor, endColor, middleColor, withSnail = false, children, }) => {
    const DIAMETER = 50;
    const WIDTH = DIAMETER + strokeWidth;
    const firstHalfProg = progress > DIAMETER ? 1 : progress / DIAMETER;
    const secondHalfProg = progress <= DIAMETER ? 0 : (progress - DIAMETER) / DIAMETER;
    const halfCircumference = ((Math.PI * 2) * (DIAMETER / 2) / 2);
    const halfCircumference1 = progress === 100 ? halfCircumference :   ((Math.PI * 2) * (DIAMETER / 2) / 2.14);
    return (react_1.default.createElement(react_native_1.View, { style: { width: size, height: size, position: "relative" } },
        react_1.default.createElement(react_native_svg_1.Svg, { viewBox: `0 0 ${WIDTH} ${WIDTH}`, stroke:colors.connectDeviceButton },
            react_1.default.createElement(react_native_svg_1.Defs, null,
                react_1.default.createElement(react_native_svg_1.LinearGradient, { id: "firstHalfGradient", x1: "50%", y1: "0%", x2: "0%", y2: "100%" },
                    react_1.default.createElement(react_native_svg_1.Stop, { offset: "0%", stopColor: startColor }),
                    react_1.default.createElement(react_native_svg_1.Stop, { offset: "90%", stopColor: middleColor })),
                react_1.default.createElement(react_native_svg_1.LinearGradient, { id: "secondHalfGradient", x1: "0%", y1: "0%", x2: "50%", y2: "100%" },
                    react_1.default.createElement(react_native_svg_1.Stop, { offset: "0%", stopColor: endColor }),
                    react_1.default.createElement(react_native_svg_1.Stop, { offset: "90%", stopColor: middleColor }))),
            react_1.default.createElement(react_native_svg_1.Path, { fill: "none", stroke: emptyColor, d: `
              M ${strokeWidth / 2} ${WIDTH / 2}
              a ${DIAMETER / 2} ${DIAMETER / 2} 0 1 1 ${DIAMETER} 0
              a ${DIAMETER / 2} ${DIAMETER / 2} 0 1 1 -${DIAMETER} 0
            `, strokeWidth: strokeWidth }),
            progress > 0 &&
                react_1.default.createElement(react_native_svg_1.Path, { fill: "none", stroke: "url(#firstHalfGradient)", strokeDasharray: `${firstHalfProg * halfCircumference},${halfCircumference}`, strokeLinecap: "round", d: `
                M ${WIDTH / 2} ${strokeWidth / 2}
                a ${DIAMETER / 2} ${DIAMETER / 2} 0 1 1 0 ${DIAMETER}
              `, strokeWidth: strokeWidth }),
            progress >= 50 &&
                react_1.default.createElement(react_native_svg_1.Path, { fill: "none", stroke: "url(#secondHalfGradient)", strokeDasharray: `${secondHalfProg * halfCircumference1},${halfCircumference}`, strokeLinecap: "round", d: `
              M ${WIDTH / 2} ${WIDTH - strokeWidth / 2}
              a ${DIAMETER / 2} ${DIAMETER / 2} 0 0 1 0 -${DIAMETER}
            `, strokeWidth: strokeWidth }),
            withSnail &&
                react_1.default.createElement(react_native_svg_1.Circle, { cx: WIDTH / 2, cy: strokeWidth / 2, r: strokeWidth / 4, fill: "white", transform: `rotate(${360 * (progress / 100)}, ${WIDTH / 2}, ${WIDTH / 2})` })),
        children));
};
exports.default = GradientCircularProgress;
