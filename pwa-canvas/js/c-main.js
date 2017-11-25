"use strict";
import {BlueBlock, RedBlock, Rect} from "./c-rect.js";
import {randNotSmall, getWindowSize, __, sizeFactor, getVMIN, isNaN} from './utils.js'

(w => {
    const VMIN = getVMIN();
    const halfVMIN = VMIN / 2;
    const halfWidth = halfVMIN;
    const halfHeight = halfVMIN;


    const canvasElement = w.document.createElement('canvas');
    w.document.body.appendChild(canvasElement);
    canvasElement.width = VMIN;
    canvasElement.height = VMIN;
    const ctx = canvasElement.getContext('2d');


    const paddingSize = VMIN * .03;
    const playZoneViewPort = {
        top: halfHeight - (halfVMIN - paddingSize),
        left: halfWidth - (halfVMIN - paddingSize),
        right: halfWidth + (halfVMIN - paddingSize),
        bottom: halfHeight + (halfVMIN - paddingSize)
    };

    const blueBlocks = [
        new BlueBlock(ctx, {
            top: playZoneViewPort.top + sizeFactor(20),
            left: playZoneViewPort.left + sizeFactor(20),
            width: sizeFactor(100),
            height: sizeFactor(100)
        }),
        new BlueBlock(ctx, {
            top: playZoneViewPort.top + sizeFactor(50),
            left: playZoneViewPort.right - sizeFactor(200),
            width: sizeFactor(100),
            height: sizeFactor(85)
        }),
        new BlueBlock(ctx, {
            top: playZoneViewPort.bottom - sizeFactor(120),
            left: playZoneViewPort.left + sizeFactor(20),
            width: sizeFactor(45),
            height: sizeFactor(100)
        }),
        new BlueBlock(ctx, {
            top: playZoneViewPort.bottom - sizeFactor(100),
            left: playZoneViewPort.right - sizeFactor(171),
            width: sizeFactor(170),
            height: sizeFactor(35)
        })
    ].map(e => {
        return e.setSpeed(sizeFactor(1))
            .setDelta(randNotSmall(-4, 4), randNotSmall(-3, 3))
            .setViewport(playZoneViewPort)
    });

    const redBlock = new RedBlock(ctx, {
        bgc: 'red',
        top: halfHeight,
        left: halfWidth,
        width: sizeFactor(80),
        height: sizeFactor(80),
        stopGame: () => {
            stopGame(__('outViewport'));
        }
    }).setViewport(playZoneViewPort);


    const playZone = new Rect(ctx, {
        top: playZoneViewPort.top,
        left: playZoneViewPort.left,
        width: playZoneViewPort.right - playZoneViewPort.left,
        height: playZoneViewPort.bottom - playZoneViewPort.top,
        bgc: '#eee'
    });


    let redBlockPosXY = [halfWidth, halfHeight];
    if ('ontouchstart' in document.documentElement) {
        canvasElement.addEventListener("touchmove", e => {
            e.preventDefault();

            const touch = e.touches[0];
            const rect = canvasElement.getBoundingClientRect();
            redBlockPosXY = [
                touch.clientX - rect.left,
                touch.clientY - rect.top
            ];
        }, {
            capture: false,
            passive: false
        });
    } else {
        canvasElement.addEventListener('mousemove', e => {
            e.preventDefault();
            const rect = canvasElement.getBoundingClientRect();
            redBlockPosXY = [
                e.clientX - rect.left,
                e.clientY - rect.top
            ];
        }, {
            capture: false,
            passive: false
        });
    }

    let timeStart = 0;

    function draw(t) {
        ctx.clearRect(0, 0, ...getWindowSize());
        playZone.draw();
        blueBlocks.map(block => {
            block.moveInViewport();
            if (block.intersects(redBlock)) {
                stopGame(__('blueBlockTouch'));
            }
            // upd speed
            const timeLeft = t - timeStart;
            if (timeLeft > 1500) {
                block.setSpeed(sizeFactor(Math.min(1 + timeLeft / 18000, 2)));
            }
        });
        redBlock.moveXY(redBlockPosXY);
    }

    let reqID = true;

    function render() {
        draw(Date.now());
        reqID = reqID ? w.requestAnimationFrame(render) : false;
    }

    draw(0); // firstPaint


    canvasElement.onclick = () => {
        if (reqID === true) {
            timeStart = Date.now();
            render(); // start Game
        }
    };


    function stopGame(message) {
        w.cancelAnimationFrame(reqID);
        reqID = false;
        const currentTime = (Date.now() - timeStart) / 1000;
        const bestTime = parseFloat(localStorage.getItem('bestTime'));
        if (isNaN(bestTime) || bestTime < currentTime) {
            localStorage.setItem('bestTime', currentTime);
        }

        alert([
            `Game over, you time: ${currentTime}s`,
            isNaN(bestTime) ? false : `Best time:${bestTime}s`,
            message
        ].filter(e => Boolean(e)).join('\n'));

        location.reload();
    }
})(window);


(() => {
    //If serviceWorker supports, then register it.
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register('/pwa-canvas/sw.js?v=2', {scope: "./"}) //setting scope of sw
            .then(registration => {
                console.info('Service worker is registered!');
                checkForPageUpdate(registration); // To check if new content is updated or not
            })
            .catch(error => {
                console.error('Service worker failed ', error);
            });
    }

    // To content update on service worker state change
    function checkForPageUpdate(registration) {
        // onupdatefound will fire on first time install and when serviceWorker.js file changes
        registration.addEventListener("updatefound", () => {
            // To check if service worker is already installed and controlling the page or not
            if (navigator.serviceWorker.controller) {
                const installingSW = registration.installing;
                installingSW.onstatechange = function () {
                    console.info("Service Worker State :", installingSW.state);
                    switch (installingSW.state) {
                        case 'installed':
                            // Now new contents will be added to cache and old contents will be remove so
                            // this is perfect time to show user that page content is updated.
                            toast('Site is updated. Refresh the page.', 5000);
                            break;
                        case 'redundant':
                            throw new Error('The installing service worker became redundant.');
                    }
                }
            }
        });
    }
})();
