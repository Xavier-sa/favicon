var AppModel = {
    colors: {
        blue: "#253573",
        sky: "#00a3e0",
        gold: "#f2c111",
        green: "#3ca35d",
        cyan: "#00afec"
    },

    icons: [
        { key: "A", name: "Letra A", category: "Marca" },
        { key: "Q", name: "Letra Q", category: "Marca" },
        { key: "church", name: "Igreja", category: "História" },
        { key: "fisherman", name: "Pescador", category: "Turismo" },
        { key: "pot", name: "Cerâmica", category: "Cultura" },
        { key: "kadiweu", name: "Arte Kadiwéu", category: "Cultura" },
        { key: "cyclist", name: "Cicloturismo", category: "Turismo" },
        { key: "sun", name: "Sol", category: "Natureza" },
        { key: "bridge", name: "Ponte", category: "História" },
        { key: "anteater", name: "Tamanduá", category: "Natureza" },
        { key: "river", name: "Rio", category: "Natureza" },
        { key: "arara", name: "Arara", category: "Natureza" },
        { key: "palm", name: "Coqueiros", category: "Natureza" },
        { key: "hat", name: "Chapéu", category: "Cultura" }
    ]
};

AppModel.createBackground = function (bgColor, shape) {
    if (shape === "rounded") {
        return '<rect width="512" height="512" rx="80" fill="' + bgColor + '" />';
    }

    if (shape === "circle") {
        return '<circle cx="256" cy="256" r="256" fill="' + bgColor + '" />';
    }

    return "";
};

AppModel.getSvg = function (iconKey, bgColor, shape, strokeColor) {
    var template = AppModel.templates[iconKey];

    if (!template) {
        template = AppModel.templates.A;
    }

    return template(bgColor, shape, strokeColor);
};

AppModel.templates = {};

AppModel.templates.A = function (bgColor, shape, strokeColor) {
    var color = strokeColor || AppModel.colors.blue;
    var background = AppModel.createBackground(bgColor, shape);

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">' +
        background +
        '<g>' +
        '<path d="M305,140 C305,140 305,370 305,370 C305,385 315,395 330,395 C345,395 355,385 355,370 L355,140 C355,140 305,140 305,140 Z" fill="' + color + '" />' +
        '<path d="M220,175 C145,175 85,235 85,310 C85,385 145,445 220,445 C270,445 310,415 330,370 L330,250 C310,205 270,175 220,175 Z" fill="' + color + '" />' +
        '<circle cx="215" cy="310" r="72" fill="' + AppModel.colors.sky + '" />' +
        '</g>' +
        '</svg>';
};

AppModel.templates.Q = function (bgColor, shape, strokeColor) {
    var color = strokeColor || AppModel.colors.blue;
    var background = AppModel.createBackground(bgColor, shape);

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">' +
        background +
        '<g>' +
        '<path d="M220,115 C145,115 85,175 85,250 C85,325 145,385 220,385 C270,385 310,355 330,310 L330,190 C310,145 270,115 220,115 Z" fill="' + color + '" />' +
        '<circle cx="215" cy="250" r="72" fill="' + AppModel.colors.gold + '" />' +
        '<path d="M305,180 L305,410 C305,425 315,435 330,435 C345,435 355,425 355,410 L355,180 Z" fill="' + color + '" />' +
        '</g>' +
        '</svg>';
};

AppModel.templates.church = function (bgColor, shape, strokeColor) {
    var color = strokeColor || AppModel.colors.blue;
    var background = AppModel.createBackground(bgColor, shape);

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">' +
        background +
        '<g transform="translate(106, 60)" stroke="' + color + '" stroke-width="24" fill="none" stroke-linecap="round" stroke-linejoin="round">' +
        '<rect x="20" y="100" width="60" height="260" rx="10" />' +
        '<path d="M10,100 L50,10 L90,100 Z" />' +
        '<path d="M50,10 L50,-15" />' +
        '<path d="M35,-5 L65,-5" />' +
        '<rect x="220" y="100" width="60" height="260" rx="10" />' +
        '<path d="M210,100 L250,10 L290,100 Z" />' +
        '<path d="M250,10 L250,-15" />' +
        '<path d="M235,-5 L265,-5" />' +
        '<path d="M80,180 L220,180 L220,360 L80,360 Z" />' +
        '<path d="M80,180 L150,110 L220,180" />' +
        '<circle cx="150" cy="220" r="25" fill="' + AppModel.colors.gold + '" stroke="none" />' +
        '<path d="M125,360 L125,300 C125,285 175,285 175,300 L175,360 Z" fill="' + AppModel.colors.sky + '" stroke-width="16" />' +
        '</g>' +
        '</svg>';
};

AppModel.templates.fisherman = function (bgColor, shape, strokeColor) {
    var color = strokeColor || AppModel.colors.blue;
    var background = AppModel.createBackground(bgColor, shape);

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">' +
        background +
        '<g transform="translate(50, 50)" stroke="' + color + '" stroke-width="20" fill="none" stroke-linecap="round" stroke-linejoin="round">' +
        '<circle cx="150" cy="130" r="30" fill="none" stroke-width="24" />' +
        '<path d="M150,160 L150,230 M150,190 L100,210 M150,190 L210,210" />' +
        '<path d="M210,210 L340,60" stroke="' + AppModel.colors.gold + '" stroke-width="14" />' +
        '<path d="M340,60 L340,310" stroke-width="10" stroke-dasharray="10,10" />' +
        '<path d="M60,250 L260,250 L300,210 L20,210 Z" fill="' + AppModel.colors.sky + '" stroke-width="16" />' +
        '<path d="M20,310 C60,290 100,330 140,310 C180,290 220,330 260,310 C300,290 340,330 380,310" stroke="' + AppModel.colors.cyan + '" stroke-width="24" />' +
        '<path d="M20,360 C60,340 100,380 140,360 C180,340 220,380 260,360 C300,340 340,380 380,360" stroke="' + AppModel.colors.cyan + '" stroke-width="16" />' +
        '</g>' +
        '</svg>';
};

AppModel.templates.pot = function (bgColor, shape, strokeColor) {
    var color = strokeColor || AppModel.colors.blue;
    var background = AppModel.createBackground(bgColor, shape);

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">' +
        background +
        '<g stroke="' + color + '" stroke-width="20" fill="none" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M206,100 L306,100 C306,100 350,140 370,220 C390,300 340,412 256,412 C172,412 122,300 142,220 C162,140 206,100 206,100 Z" stroke-width="24" />' +
        '<path d="M190,130 L322,130" stroke-width="12" />' +
        '<path d="M170,170 L342,170" stroke-width="12" />' +
        '<circle cx="256" cy="270" r="24" fill="' + AppModel.colors.gold + '" stroke="none" />' +
        '<circle cx="216" cy="270" r="14" fill="' + AppModel.colors.sky + '" stroke="none" />' +
        '<circle cx="296" cy="270" r="14" fill="' + AppModel.colors.sky + '" stroke="none" />' +
        '<circle cx="256" cy="230" r="14" fill="' + AppModel.colors.sky + '" stroke="none" />' +
        '<circle cx="256" cy="310" r="14" fill="' + AppModel.colors.sky + '" stroke="none" />' +
        '</g>' +
        '</svg>';
};

AppModel.templates.kadiweu = function (bgColor, shape, strokeColor) {
    var color = strokeColor || AppModel.colors.blue;
    var background = AppModel.createBackground(bgColor, shape);

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">' +
        background +
        '<g transform="translate(100, 80)" stroke="' + color + '" stroke-width="20" fill="none" stroke-linecap="round" stroke-linejoin="round">' +
        '<circle cx="156" cy="50" r="30" stroke-width="26" />' +
        '<path d="M156,80 L156,180" stroke-width="26" />' +
        '<path d="M46,140 L116,140 C116,140 156,140 156,180" />' +
        '<path d="M266,140 L196,140 C196,140 156,140 156,180" />' +
        '<path d="M156,180 L106,260 L156,340 L206,260 Z" fill="' + AppModel.colors.gold + '" stroke-width="16" />' +
        '<path d="M156,220 L131,260 L156,300 L181,260 Z" fill="' + AppModel.colors.sky + '" stroke="none" />' +
        '<path d="M106,340 L86,400" stroke-width="24" />' +
        '<path d="M206,340 L226,400" stroke-width="24" />' +
        '</g>' +
        '</svg>';
};

AppModel.templates.cyclist = function (bgColor, shape, strokeColor) {
    var color = strokeColor || AppModel.colors.blue;
    var background = AppModel.createBackground(bgColor, shape);

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">' +
        background +
        '<g transform="translate(50, 80)" stroke="' + color + '" stroke-width="18" fill="none" stroke-linecap="round" stroke-linejoin="round">' +
        '<circle cx="100" cy="300" r="60" stroke-width="20" />' +
        '<circle cx="312" cy="300" r="60" stroke-width="20" />' +
        '<path d="M100,300 L180,300 L240,200 L140,200 L100,300 M180,300 L220,160 L312,300" />' +
        '<path d="M220,160 L300,160 M280,120 L320,200" stroke-width="14" />' +
        '<circle cx="210" cy="70" r="24" stroke-width="24" />' +
        '<path d="M210,94 L170,160 L140,240 M170,160 L240,160 L290,170" stroke="' + AppModel.colors.green + '" stroke-width="22" />' +
        '<path d="M10,360 L120,280 L230,360 L340,220 L420,360" stroke="' + AppModel.colors.gold + '" stroke-width="14" />' +
        '</g>' +
        '</svg>';
};

AppModel.templates.sun = function (bgColor, shape, strokeColor) {
    var color = strokeColor || AppModel.colors.blue;
    var background = AppModel.createBackground(bgColor, shape);

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">' +
        background +
        '<g>' +
        '<circle cx="256" cy="256" r="100" fill="' + AppModel.colors.gold + '" stroke="' + color + '" stroke-width="20" />' +
        '<g stroke="' + color + '" stroke-width="18" stroke-linecap="round">' +
        '<line x1="256" y1="100" x2="256" y2="50" />' +
        '<line x1="256" y1="412" x2="256" y2="362" />' +
        '<line x1="100" y1="256" x2="50" y2="256" />' +
        '<line x1="412" y1="256" x2="362" y2="256" />' +
        '<line x1="146" y1="146" x2="110" y2="110" />' +
        '<line x1="366" y1="366" x2="402" y2="402" />' +
        '<line x1="146" y1="366" x2="110" y2="402" />' +
        '<line x1="366" y1="146" x2="402" y2="110" />' +
        '</g>' +
        '</g>' +
        '</svg>';
};

AppModel.templates.bridge = function (bgColor, shape, strokeColor) {
    var color = strokeColor || AppModel.colors.blue;
    var background = AppModel.createBackground(bgColor, shape);

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">' +
        background +
        '<g transform="translate(0, 50)" stroke="' + color + '" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M60,300 C60,120 452,120 452,300" stroke-width="24" />' +
        '<path d="M100,300 C100,160 412,160 412,300" stroke-width="12" />' +
        '<line x1="30" y1="300" x2="482" y2="300" stroke-width="20" />' +
        '<line x1="120" y1="230" x2="120" y2="300" />' +
        '<line x1="180" y1="190" x2="180" y2="300" />' +
        '<line x1="256" y1="175" x2="256" y2="300" stroke="' + AppModel.colors.gold + '" stroke-width="20" />' +
        '<line x1="332" y1="190" x2="332" y2="300" />' +
        '<line x1="392" y1="230" x2="392" y2="300" />' +
        '<line x1="120" y1="230" x2="180" y2="300" />' +
        '<line x1="180" y1="190" x2="256" y2="300" />' +
        '<line x1="332" y1="190" x2="256" y2="300" />' +
        '<line x1="392" y1="230" x2="332" y2="300" />' +
        '</g>' +
        '</svg>';
};

AppModel.templates.anteater = function (bgColor, shape, strokeColor) {
    var color = strokeColor || AppModel.colors.blue;
    var background = AppModel.createBackground(bgColor, shape);

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">' +
        background +
        '<g transform="translate(50, 100)" stroke="' + color + '" stroke-width="18" fill="none" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M300,220 C240,160 180,180 140,200 L60,200 L40,210 L60,220 L130,230" stroke-width="22" />' +
        '<path d="M140,200 C180,140 280,120 340,180" stroke-width="22" />' +
        '<path d="M340,180 C400,140 460,200 440,260 C400,300 320,280 300,220" fill="' + AppModel.colors.gold + '" stroke-width="16" />' +
        '<path d="M180,210 L160,300 L180,310" stroke-width="20" />' +
        '<path d="M220,210 L210,290 L230,300" stroke-width="16" />' +
        '<path d="M300,210 L310,300 M330,200 L340,290" />' +
        '</g>' +
        '</svg>';
};

AppModel.templates.river = function (bgColor, shape, strokeColor) {
    var color = strokeColor || AppModel.colors.blue;
    var background = AppModel.createBackground(bgColor, shape);

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">' +
        background +
        '<g stroke="' + color + '" stroke-width="24" fill="none" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M80,120 C180,80 100,220 256,180 C412,140 320,320 432,280" stroke="' + AppModel.colors.sky + '" stroke-width="36" />' +
        '<path d="M80,240 C180,200 100,340 256,300 C412,260 320,440 432,400" stroke="' + AppModel.colors.cyan + '" stroke-width="24" />' +
        '<path d="M80,360 C180,320 100,460 256,420 C412,380 320,500 432,460" stroke-width="12" />' +
        '</g>' +
        '</svg>';
};

AppModel.templates.arara = function (bgColor, shape, strokeColor) {
    var color = strokeColor || AppModel.colors.blue;
    var background = AppModel.createBackground(bgColor, shape);

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">' +
        background +
        '<g transform="translate(50, 50)" stroke="' + color + '" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M260,100 C280,80 320,80 330,120 L310,140 Z" fill="' + AppModel.colors.sky + '" stroke-width="18" />' +
        '<circle cx="290" cy="110" r="4" fill="black" stroke="none" />' +
        '<path d="M260,130 L100,80 C120,150 180,200 240,180 L260,130" fill="' + AppModel.colors.gold + '" stroke-width="14" />' +
        '<path d="M280,130 L412,220 C380,260 310,240 280,180 L280,130" fill="' + AppModel.colors.sky + '" stroke-width="14" />' +
        '<path d="M260,180 L220,380 L280,380 L280,180 Z" stroke="' + AppModel.colors.sky + '" stroke-width="12" />' +
        '</g>' +
        '</svg>';
};

AppModel.templates.palm = function (bgColor, shape, strokeColor) {
    var color = strokeColor || AppModel.colors.blue;
    var background = AppModel.createBackground(bgColor, shape);

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">' +
        background +
        '<g transform="translate(80, 50)" stroke="' + color + '" stroke-width="20" fill="none" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M120,400 Q150,280 180,180" stroke-width="24" />' +
        '<path d="M240,400 Q220,300 240,220" stroke-width="16" />' +
        '<g stroke="' + AppModel.colors.green + '" stroke-width="16">' +
        '<path d="M180,180 C140,140 80,160 80,160" />' +
        '<path d="M180,180 C160,120 120,100 120,100" />' +
        '<path d="M180,180 C200,120 240,110 240,110" />' +
        '<path d="M180,180 C220,150 260,170 260,170" />' +
        '<path d="M180,180 C200,210 220,250 220,250" />' +
        '<path d="M240,220 C210,180 180,200 180,200" />' +
        '<path d="M240,220 C250,170 290,180 290,180" />' +
        '<path d="M240,220 C270,240 300,260 300,260" />' +
        '</g>' +
        '</g>' +
        '</svg>';
};

AppModel.templates.hat = function (bgColor, shape, strokeColor) {
    var color = strokeColor || AppModel.colors.blue;
    var background = AppModel.createBackground(bgColor, shape);

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">' +
        background +
        '<g>' +
        '<path d="M156,260 C156,150 200,100 256,100 C312,100 356,150 356,260 Z" fill="' + AppModel.colors.gold + '" />' +
        '<path d="M156,250 C190,270 322,270 356,250 L356,265 C322,285 190,285 156,265 Z" fill="' + color + '" />' +
        '<path d="M70,270 C130,250 382,250 442,270 C465,278 465,292 442,300 C382,320 130,320 70,300 C47,292 47,278 70,270 Z" fill="' + AppModel.colors.gold + '" />' +
        '</g>' +
        '</svg>';
};
