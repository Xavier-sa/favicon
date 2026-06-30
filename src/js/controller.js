var AppController = {
    state: {
        icon: "A",
        shape: "transparent",
        bgColor: "#ffffff"
    }
};

AppController.init = function () {
    AppView.init();
    AppView.renderIconButtons(AppModel.icons, AppController.state.icon);
    AppView.updateShapeButtons(AppController.state.shape);
    AppView.showBackgroundField(false);
    AppView.updateBackgroundColorText(AppController.state.bgColor);
    AppController.bindEvents();
    AppController.updateScreen();
};

AppController.bindEvents = function () {
    var iconButtons = document.querySelectorAll(".icon-button");
    var shapeButtons = document.querySelectorAll(".shape-button");
    var tabButtons = document.querySelectorAll(".tab-button");
    var pngButtons = document.querySelectorAll("[data-size]");
    var bgColorInput = document.getElementById("bg-color-input");
    var downloadSvgButton = document.getElementById("download-svg");
    var copyCodeButton = document.getElementById("copy-code");

    for (var i = 0; i < iconButtons.length; i++) {
        iconButtons[i].addEventListener("click", function () {
            AppController.selectIcon(this.getAttribute("data-icon"));
        });
    }

    for (var j = 0; j < shapeButtons.length; j++) {
        shapeButtons[j].addEventListener("click", function () {
            AppController.selectShape(this.getAttribute("data-shape"));
        });
    }

    for (var k = 0; k < tabButtons.length; k++) {
        tabButtons[k].addEventListener("click", function () {
            AppController.changeTab(this.getAttribute("data-tab"));
        });
    }

    for (var l = 0; l < pngButtons.length; l++) {
        pngButtons[l].addEventListener("click", function () {
            AppController.downloadPng(parseInt(this.getAttribute("data-size"), 10));
        });
    }

    bgColorInput.addEventListener("input", function () {
        AppController.changeBackgroundColor(this.value);
    });

    downloadSvgButton.addEventListener("click", function () {
        AppController.downloadSvg();
    });

    copyCodeButton.addEventListener("click", function () {
        AppController.copyCode();
    });
};

AppController.selectIcon = function (iconKey) {
    AppController.state.icon = iconKey;
    AppView.updateIconButtons(iconKey);
    AppController.updateScreen();
};

AppController.selectShape = function (shape) {
    AppController.state.shape = shape;
    AppView.updateShapeButtons(shape);
    AppView.showBackgroundField(shape !== "transparent");
    AppController.updateScreen();
};

AppController.changeBackgroundColor = function (color) {
    AppController.state.bgColor = color;
    AppView.updateBackgroundColorText(color);
    AppController.updateScreen();
};

AppController.changeTab = function (tabName) {
    AppView.setActiveTab(tabName);
};

AppController.getCurrentSvg = function () {
    return AppModel.getSvg(
        AppController.state.icon,
        AppController.state.bgColor,
        AppController.state.shape
    );
};

AppController.getHtmlCode = function () {
    return '<link rel="icon" type="image/svg+xml" href="favicon.svg">';
};

AppController.updateScreen = function () {
    var svg = AppController.getCurrentSvg();

    AppView.renderPreviews(svg);
    AppView.updateCode(AppController.getHtmlCode());
};

AppController.copyCode = function () {
    AppView.copyText(AppController.getHtmlCode());
    AppView.showToast("Código copiado.");
};

AppController.downloadSvg = function () {
    var fileName = "favicon-aquidauana-" + AppController.state.icon + ".svg";

    AppView.downloadTextFile(fileName, AppController.getCurrentSvg(), "image/svg+xml;charset=utf-8");
    AppView.showToast("SVG baixado.");
};

AppController.downloadPng = function (size) {
    var fileName = "favicon-aquidauana-" + size + "x" + size + ".png";

    AppView.downloadPng(size, fileName, AppController.getCurrentSvg(), function () {
        AppView.showToast("PNG baixado.");
    });
};

window.addEventListener("load", function () {
    AppController.init();
});
