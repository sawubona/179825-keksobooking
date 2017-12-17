'use strict';

window.utils = (() => {
    const randomInteger = (arr) => {
        let rand = arr[0] + Math.random() * (arr[1] + 1 - arr[0]);
        rand = Math.floor(rand);
        return rand;
    };

    const randomStrings = (arr) => {
        let startIndex = Math.floor(Math.random() * arr.length);
        return arr.slice(startIndex);
    };

    const randomString = (arr) => {
        let startIndex = Math.floor(Math.random() * arr.length);
        let targetType = arr[startIndex];
        if (targetType === 'flat') {
            return 'Квартира';
        } else if (targetType === 'house') {
            return 'Дом';
        } else if (targetType === 'bungalo') {
            return 'Бунгало';
        } else {
            return targetType;
        }
    };

    const syncroTime = (master, slave) => {
        slave.selectedIndex = -1;
        for (let i = 0; i < master.options.length; i++) {
            const element = master.options[i];
            if (element.selected) {
                slave.selectedIndex = element.index;
            }
        }
    };

    return {
        randomInteger: randomInteger,
        randomStrings: randomStrings,
        randomString: randomString,
        syncroTime: syncroTime
    };

})();
