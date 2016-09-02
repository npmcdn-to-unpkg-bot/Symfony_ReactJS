export class Data {

    /**
     * The url used in order to get the data.
     */
    public url: string;

    constructor(url: string) {
        this.getData(url);
    }

    /**
     * Allow to fetch the data from the api.
     *
     * @param url
     *
     * @returns {XMLHttpRequest}
     */
    getData(url: string) {
        var ajax = new XMLHttpRequest();
        ajax.open("GET", url);
        ajax.addEventListener("load", function () {
            console.log(ajax)
        });
        ajax.send(null);

        return ajax;
    }

    /**
     * Allow to return the array.
     */
    returnData() {

    }
}