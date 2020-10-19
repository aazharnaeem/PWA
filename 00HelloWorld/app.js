if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function () {
            console.log('service Worker Registered Sucessfully');
        })
        .cathch(function (error) {
            console.error('Somthing went wromg whilr registering Service worker');
            console.log(error);
        });
} else {
    console.log('service Worker not Available')
}