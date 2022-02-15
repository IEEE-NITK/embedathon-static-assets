fillCircle = function () {
    var valueTo = $('.progress-text').data('progress');
    var value = parseInt(document.querySelector('.progress-text').innerHTML);
    document.querySelector('.progress-circle-prog').style.strokeDasharray = (valueTo * 4.65) + ' 999';
    var el = document.querySelector('.progress-text');
    var from = 0;
    var start = new Date().getTime();

    setTimeout(function () {
        var now = (new Date().getTime()) - start;
        var progress = now / 700;
        result = Math.floor(value * progress);
        el.innerHTML = progress < 1 ? result : value;
        if (progress < 1) setTimeout(arguments.callee, 10);
    }, 10);
}

setTimeout(fillCircle, 50);
