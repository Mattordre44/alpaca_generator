import { Category } from "../types/category";

type CategoryPropertiesType = {
    [key: string]: string;
}

type utilsType = {
    [key in Category]: CategoryPropertiesType
}

/**
 * Utils object load image resources for each property
 */
export const utils: utilsType = {
    [Category.accessories]: {
        earrings: require ("../alpaca_resources/accessories/earings.png"),
        flower: require("../alpaca_resources/accessories/flower.png"),
        glasses: require("../alpaca_resources/accessories/glasses.png"),
        headphone: require("../alpaca_resources/accessories/headphone.png"),
    },
    [Category.backgrounds]: {
        blue50: require("../alpaca_resources/backgrounds/blue50.png"),
        blue60: require("../alpaca_resources/backgrounds/blue60.png"),
        blue70: require("../alpaca_resources/backgrounds/blue70.png"),
        darkBlue30: require("../alpaca_resources/backgrounds/darkblue30.png"),
        darkBlue50: require("../alpaca_resources/backgrounds/darkblue50.png"),
        darkBlue70: require("../alpaca_resources/backgrounds/darkblue70.png"),
        green50: require("../alpaca_resources/backgrounds/green50.png"),
        green60: require("../alpaca_resources/backgrounds/green60.png"),
        green70: require("../alpaca_resources/backgrounds/green70.png"),
        grey40: require("../alpaca_resources/backgrounds/grey40.png"),
        grey70: require("../alpaca_resources/backgrounds/grey70.png"),
        grey80: require("../alpaca_resources/backgrounds/grey80.png"),
        red50: require("../alpaca_resources/backgrounds/red50.png"),
        red60: require("../alpaca_resources/backgrounds/red60.png"),
        red70: require("../alpaca_resources/backgrounds/red70.png"),
        yellow50: require("../alpaca_resources/backgrounds/yellow50.png"),
        yellow60: require("../alpaca_resources/backgrounds/yellow60.png"),
        yellow70: require("../alpaca_resources/backgrounds/yellow70.png")
    },
    [Category.ears]: {
        default: require("../alpaca_resources/ears/default.png"),
        backward: require("../alpaca_resources/ears/tilt-backward.png"),
        forward: require("../alpaca_resources/ears/tilt-forward.png"),
    },
    [Category.eyes]: {
        angry: require("../alpaca_resources/eyes/angry.png"),
        default: require("../alpaca_resources/eyes/default.png"),
        naughty: require("../alpaca_resources/eyes/naughty.png"),
        panda: require("../alpaca_resources/eyes/panda.png"),
        smart: require("../alpaca_resources/eyes/smart.png"),
        star: require("../alpaca_resources/eyes/star.png"),
    },
    [Category.hair]: {
        bang: require("../alpaca_resources/hair/bang.png"),
        curls: require("../alpaca_resources/hair/curls.png"),
        default: require("../alpaca_resources/hair/default.png"),
        elegant: require("../alpaca_resources/hair/elegant.png"),
        fancy: require("../alpaca_resources/hair/fancy.png"),
        quiff: require("../alpaca_resources/hair/quiff.png"),
        short: require("../alpaca_resources/hair/short.png"),
    },
    [Category.leg]: {
        bubbleTea: require("../alpaca_resources/leg/bubble-tea.png"),
        cookie: require("../alpaca_resources/leg/cookie.png"),
        default: require("../alpaca_resources/leg/default.png"),
        gameConsole: require("../alpaca_resources/leg/game-console.png"),
        backward: require("../alpaca_resources/leg/tilt-backward.png"),
        forward: require("../alpaca_resources/leg/tilt-forward.png"),
    },
    [Category.mouth]: {
        astonished: require("../alpaca_resources/mouth/astonished.png"),
        default: require("../alpaca_resources/mouth/default.png"),
        eating: require("../alpaca_resources/mouth/eating.png"),
        laugh: require("../alpaca_resources/mouth/laugh.png"),
        tongue: require("../alpaca_resources/mouth/tongue.png"),
    },
    [Category.neck]: {
        backward: require("../alpaca_resources/neck/bend-backward.png"),
        forward: require("../alpaca_resources/neck/bend-forward.png"),
        default: require("../alpaca_resources/neck/default.png"),
        thick: require("../alpaca_resources/neck/thick.png"),
    },
    [Category.nose]: {
        default: require("../alpaca_resources/nose/nose.png")
    }
}
