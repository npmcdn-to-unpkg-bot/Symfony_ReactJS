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
    public getData(url: string) {
        var ajax = new XMLHttpRequest();
        ajax.open("GET", url);
        ajax.send(null);
        var articles = JSON.parse(ajax.responseText);

        return articles;
    }
}