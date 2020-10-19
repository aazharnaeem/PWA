if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register("service-worker.js")
        .then(function () {
            console.log("serviceWorker Registered Sucessfully");
        })
        .catch(function (error) {
            console.error('somthing went wrong');
            console.log(error);
        });
} else {
    console.log('serviceWorker is not available');
}