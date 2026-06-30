var AppView = {
    toastTimer: null
};

AppView.init = function () {
    AppView.iconList = document.getElementById("icon-list");
    AppView.previewMain = document.getElementById("main-preview");
    AppView.previewLight = document.getElementById("preview-tab-light");
    AppView.previewDark = document.getElementById("preview-tab-dark");
    AppView.bgColorArea = document.getElementById("bg-color-area");
    AppView.bgColorValue = document.getElementById("bg-color-value");
    AppView.htmlCode = document.getElementById("html-code");
    AppView.toast = document.getElementById("toast");
    AppView.toastMessage = document.getElementById("toast-message");
    AppView.canvas = document.getElementById("export-canvas");
};

AppView.renderIconButtons = function (icons, activeIcon) {
    AppView.iconList.innerHTML = "";

    for (var i = 0; i < icons.length; i++) {
        var icon = icons[i];
        var button = document.createElement("button");
        var previewSvg = AppModel.getSvg(icon.key, "transparent", "transparent", AppModel.colors.blue);

        button.type = "button";
        button.id = "icon-button-" + icon.key;
        button.className = "icon-button";
        button.setAttribute("data-icon", icon.key);
        button.setAttribute("aria-pressed", "false");

        if (icon.key === activeIcon) {
            button.classList.add("icon-button--active");
            button.setAttribute("aria-pressed", "true");
        }

        button.innerHTML =
            '<span class="icon-button__image">' + previewSvg + '</span>' +
            '<span class="icon-button__info">' +
            '<span class="icon-button__name">' + icon.name + '</span>' +
            '<span class="icon-button__category">' + icon.category + '</span>' +
            '</span>';

        AppView.iconList.appendChild(button);
    }
};

AppView.updateIconButtons = function (activeIcon) {
    var buttons = document.querySelectorAll(".icon-button");

    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        var isActive = button.getAttribute("data-icon") === activeIcon;

        button.classList.toggle("icon-button--active", isActive);
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
    }
};

AppView.updateShapeButtons = function (activeShape) {
    var buttons = document.querySelectorAll(".shape-button");

    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        var isActive = button.getAttribute("data-shape") === activeShape;

        button.classList.toggle("shape-button--active", isActive);
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
    }
};

AppView.renderPreviews = function (svg) {
    AppView.previewMain.innerHTML = svg;
    AppView.previewLight.innerHTML = svg;
    AppView.previewDark.innerHTML = svg;
};

AppView.showBackgroundField = function (showField) {
    AppView.bgColorArea.classList.toggle("field--hidden", !showField);
};

AppView.updateBackgroundColorText = function (color) {
    AppView.bgColorValue.textContent = color;
};

AppView.updateCode = function (codeText) {
    AppView.htmlCode.textContent = codeText;
};

AppView.setActiveTab = function (tabName) {
    var panels = document.querySelectorAll(".tab-panel");
    var buttons = document.querySelectorAll(".tab-button");

    for (var i = 0; i < panels.length; i++) {
        panels[i].classList.add("tab-panel--hidden");
    }

    for (var j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove("tab-button--active");
    }

    document.getElementById("tab-" + tabName).classList.remove("tab-panel--hidden");
    document.getElementById("tab-button-" + tabName).classList.add("tab-button--active");
};

AppView.copyText = function (text) {
    var field = document.createElement("textarea");

    field.value = text;
    document.body.appendChild(field);
    field.select();
    document.execCommand("copy");
    document.body.removeChild(field);
};

AppView.downloadTextFile = function (fileName, fileContent, fileType) {
    var blob = new Blob([fileContent], { type: fileType });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");

    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

AppView.downloadPng = function (size, fileName, svg, callback) {
    var blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var image = new Image();

    image.onload = function () {
        var context = AppView.canvas.getContext("2d");
        var pngUrl;
        var link;

        AppView.canvas.width = size;
        AppView.canvas.height = size;
        context.clearRect(0, 0, size, size);
        context.drawImage(image, 0, 0, size, size);

        pngUrl = AppView.canvas.toDataURL("image/png");
        link = document.createElement("a");
        link.href = pngUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        if (callback) {
            callback();
        }
    };

    image.src = url;
};

AppView.showToast = function (message) {
    AppView.toastMessage.textContent = message;
    AppView.toast.classList.add("toast--visible");

    clearTimeout(AppView.toastTimer);
    AppView.toastTimer = setTimeout(function () {
        AppView.toast.classList.remove("toast--visible");
    }, 2400);
};
