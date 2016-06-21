import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "webkitTouchCallout": "none",
        "WebkitUserSelect": "none",
        "KhtmlUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "html": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "height": "100%",
        "width": "100%",
        "display": "block",
        "backgroundColor": "#182C38",
        "background": "linear-gradient(to bottom right, rgb(16, 39, 68) , #354E5D)",
        "overflow": "hidden",
        "cursor": "none"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "height": "100%",
        "width": "100%",
        "display": "block",
        "backgroundColor": "#182C38",
        "background": "linear-gradient(to bottom right, rgb(16, 39, 68) , #354E5D)",
        "overflow": "hidden",
        "cursor": "none"
    },
    "canvas": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "zIndex": 0
    },
    "assets": {
        "display": "none"
    },
    "score": {
        "position": "fixed",
        "left": 0,
        "top": 0,
        "color": "white",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "background": "black",
        "width": 120,
        "height": 50,
        "backgroundSize": "100% 100%",
        "boxSizing": "border-box",
        "textAlign": "center",
        "paddingTop": 5,
        "fontFamily": "'Myriad Pro', 'arial'",
        "fontSize": 10,
        "textShadow": "0px 0px 3px rgba(0,0,0,0.9)"
    },
    "score span": {
        "display": "block",
        "textAlign": "center",
        "fontSize": 20,
        "fontWeight": "bold"
    },
    "angle-title": {
        "fontFamily": "'Myriad Pro', 'arial'",
        "fontSize": 100,
        "textAlign": "center",
        "marginBottom": 30,
        "color": "white"
    },
    "screen-angle": {
        "fontFamily": "'Myriad Pro', 'arial'",
        "width": "100%",
        "fontSize": 80,
        "textAlign": "center",
        "color": "white"
    }
});