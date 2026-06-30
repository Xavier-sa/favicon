var AccessCounter = {
    config: {
        initialViews: 0,
        storageKey: "aquidauana_favicon_views",
        label: "Acessos neste navegador"
    }
};

AccessCounter.init = function () {
    AccessCounter.labelElement = document.getElementById("access-counter-label");
    AccessCounter.valueElement = document.getElementById("access-counter-value");
    AccessCounter.loadConfig();
};

AccessCounter.loadConfig = function () {
    fetch("src/data/access.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (config) {
            AccessCounter.config = config;
            AccessCounter.countView();
        })
        .catch(function () {
            AccessCounter.countView();
        });
};

AccessCounter.countView = function () {
    var accessData = AccessCounter.getSavedData();

    accessData.views = accessData.views + 1;
    accessData.lastAccess = new Date().toISOString();

    AccessCounter.saveData(accessData);
    AccessCounter.showViews(accessData.views);
};

AccessCounter.getSavedData = function () {
    var savedData = localStorage.getItem(AccessCounter.config.storageKey);
    var accessData;

    try {
        if (savedData) {
            accessData = JSON.parse(savedData);
        }
    } catch (error) {
        accessData = null;
    }

    if (!accessData || isNaN(accessData.views)) {
        accessData = {
            views: AccessCounter.config.initialViews,
            lastAccess: AccessCounter.config.lastAccess
        };
    }

    return accessData;
};

AccessCounter.saveData = function (accessData) {
    localStorage.setItem(AccessCounter.config.storageKey, JSON.stringify(accessData));
};

AccessCounter.showViews = function (totalViews) {
    AccessCounter.labelElement.textContent = AccessCounter.config.label;
    AccessCounter.valueElement.textContent = totalViews;
};

window.addEventListener("load", function () {
    AccessCounter.init();
});
