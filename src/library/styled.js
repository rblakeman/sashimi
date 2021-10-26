import React, { useState } from "react";

/**
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr', // SVG
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'marker',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan'
 */

export const Styled = (tag, styles) => {
    let Element = null;
    switch (tag) {
        case "abbr":
            Element = <abbr />;
            break;
        case "address":
            Element = <address />;
            break;
        case "area":
            Element = <area />;
            break;
        case "article":
            Element = <article />;
            break;
        case "aside":
            Element = <aside />;
            break;
        case "audio":
            Element = <audio />;
            break;
        case "b":
            Element = <b />;
            break;
        case "base":
            Element = <base />;
            break;
        case "bdi":
            Element = <bdi />;
            break;
        case "bdo":
            Element = <bdo />;
            break;
        case "big":
            Element = <big />;
            break;
        case "blockquote":
            Element = <blockquote />;
            break;
        case "body":
            Element = <body />;
            break;
        case "br":
            Element = <br />;
            break;
        case "button":
            Element = <button />;
            break;
        case "canvas":
            Element = <canvas />;
            break;
        case "caption":
            Element = <caption />;
            break;
        case "cite":
            Element = <cite />;
            break;
        case "code":
            Element = <code />;
            break;
        case "col":
            Element = <col />;
            break;
        case "colgroup":
            Element = <colgroup />;
            break;
        case "data":
            Element = <data />;
            break;
        case "datalist":
            Element = <datalist />;
            break;
        case "dd":
            Element = <dd />;
            break;
        case "del":
            Element = <del />;
            break;
        case "details":
            Element = <details />;
            break;
        case "dfn":
            Element = <dfn />;
            break;
        case "dialog":
            Element = <dialog />;
            break;
        case "div":
            Element = <div />;
            break;
        case "dl":
            Element = <dl />;
            break;
        case "dt":
            Element = <dt />;
            break;
        case "em":
            Element = <em />;
            break;
        case "embed":
            Element = <embed />;
            break;
        case "fieldset":
            Element = <fieldset />;
            break;
        case "figcaption":
            Element = <figcaption />;
            break;
        case "figure":
            Element = <figure />;
            break;
        case "footer":
            Element = <footer />;
            break;
        case "form":
            Element = <form />;
            break;
        case "h1":
            Element = <h1 />;
            break;
        case "h2":
            Element = <h2 />;
            break;
        case "h3":
            Element = <h3 />;
            break;
        case "h4":
            Element = <h4 />;
            break;
        case "h5":
            Element = <h5 />;
            break;
        case "h6":
            Element = <h6 />;
            break;
        case "head":
            Element = <head />;
            break;
        case "header":
            Element = <header />;
            break;
        case "hgroup":
            Element = <hgroup />;
            break;
        case "hr":
            Element = <hr />;
            break;
        case "html":
            Element = <html />;
            break;
        case "i":
            Element = <i />;
            break;
        case "iframe":
            Element = <iframe />;
            break;
        case "img":
            Element = <img />;
            break;
        case "input":
            Element = <input />;
            break;
        case "ins":
            Element = <ins />;
            break;
        case "kbd":
            Element = <kbd />;
            break;
        case "keygen":
            Element = <keygen />;
            break;
        case "label":
            Element = <label />;
            break;
        case "legend":
            Element = <legend />;
            break;
        case "li":
            Element = <li />;
            break;
        case "link":
            Element = <link />;
            break;
        case "main":
            Element = <main />;
            break;
        case "map":
            Element = <map />;
            break;
        case "mark":
            Element = <mark />;
            break;
        case "menu":
            Element = <menu />;
            break;
        case "menuitem":
            Element = <menuitem />;
            break;
        case "meta":
            Element = <meta />;
            break;
        case "meter":
            Element = <meter />;
            break;
        case "nav":
            Element = <nav />;
            break;
        case "noscript":
            Element = <noscript />;
            break;
        case "object":
            Element = <object />;
            break;
        case "ol":
            Element = <ol />;
            break;
        case "optgroup":
            Element = <optgroup />;
            break;
        case "option":
            Element = <option />;
            break;
        case "output":
            Element = <output />;
            break;
        case "p":
            Element = <p />;
            break;
        case "param":
            Element = <param />;
            break;
        case "picture":
            Element = <picture />;
            break;
        case "pre":
            Element = <pre />;
            break;
        case "progress":
            Element = <progress />;
            break;
        case "q":
            Element = <q />;
            break;
        case "rp":
            Element = <rp />;
            break;
        case "rt":
            Element = <rt />;
            break;
        case "ruby":
            Element = <ruby />;
            break;
        case "s":
            Element = <s />;
            break;
        case "samp":
            Element = <samp />;
            break;
        case "script":
            Element = <script />;
            break;
        case "section":
            Element = <section />;
            break;
        case "select":
            Element = <select />;
            break;
        case "small":
            Element = <small />;
            break;
        case "source":
            Element = <source />;
            break;
        default:
        case "span":
            Element = <span />;
            break;
        case "strong":
            Element = <strong />;
            break;
        case "style":
            Element = <style />;
            break;
        case "sub":
            Element = <sub />;
            break;
        case "summary":
            Element = <summary />;
            break;
        case "sup":
            Element = <sup />;
            break;
        case "table":
            Element = <table />;
            break;
        case "tbody":
            Element = <tbody />;
            break;
        case "td":
            Element = <td />;
            break;
        case "textarea":
            Element = <textarea />;
            break;
        case "tfoot":
            Element = <tfoot />;
            break;
        case "th":
            Element = <th />;
            break;
        case "thead":
            Element = <thead />;
            break;
        case "time":
            Element = <time />;
            break;
        case "title":
            Element = <title />;
            break;
        case "tr":
            Element = <tr />;
            break;
        case "track":
            Element = <track />;
            break;
        case "u":
            Element = <u />;
            break;
        case "ul":
            Element = <ul />;
            break;
        case "var":
            Element = <var />;
            break;
        case "video":
            Element = <video />;
            break;
        case "wbr":
            Element = <wbr />;
            break;
        case "circle":
            Element = <circle />;
            break;
        case "clipPath":
            Element = <clipPath />;
            break;
        case "defs":
            Element = <defs />;
            break;
        case "ellipse":
            Element = <ellipse />;
            break;
        case "foreignObject":
            Element = <foreignObject />;
            break;
        case "g":
            Element = <g />;
            break;
        case "image":
            Element = <image />;
            break;
        case "line":
            Element = <line />;
            break;
        case "linearGradient":
            Element = <linearGradient />;
            break;
        case "marker":
            Element = <marker />;
            break;
        case "mask":
            Element = <mask />;
            break;
        case "path":
            Element = <path />;
            break;
        case "pattern":
            Element = <pattern />;
            break;
        case "polygon":
            Element = <polygon />;
            break;
        case "polyline":
            Element = <polyline />;
            break;
        case "radialGradient":
            Element = <radialGradient />;
            break;
        case "rect":
            Element = <rect />;
            break;
        case "stop":
            Element = <stop />;
            break;
        case "svg":
            Element = <svg />;
            break;
        case "text":
            Element = <text />;
            break;
        case "tspan":
            Element = <tspan />;
            break;
    }

    const [hover, setHover] = useState(false);

    let elementStyles = {};
    let hoverStyles = {};

    for (const [key, value] of Object.entries(styles)) {
        // console.log(`${key}: ${value}`);

        if (key.charAt(0) === "&") {
            switch (key.split(":")[1]) {
                case "hover":
                    console.log(value);
                    hoverStyles = {
                        ...hoverStyles,
                        ...value
                    };
                    break;
                default:
                    break;
            }
        } else {
            elementStyles = {
                ...elementStyles
            };
        }
    }

    if (hover) {
        elementStyles = {
            ...elementStyles,
            ...hoverStyles
        };
    }

    return (
        <Element
            onMouseEnter={() => setHover(true)}
            onMouseExit={() => setHover(false)}
            styles={styles} />
    );
};
