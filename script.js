function beginLaunch() {
    // remove the launch container
    document.querySelector('.container').removeChild(document.querySelector('.container #launch'));

    window.location.href = 'launch.html';
}