const webApiUrl = "http://localhost:7070/api/services";

class ServerRequest {
    get = async (urlParams) => {
        const options = {
            method: "GET",
        }
        const request = new Request(webApiUrl + "/" + urlParams, options);
        const response = await fetch(request);
        return response.json();
    }
}

export default ServerRequest;