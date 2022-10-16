const webApiUrl = "http://localhost:7070/api/services";

class ServerRequest {
    get = async (urlParams) => {
        const options = {
            method: "GET",
        }
        const response = await fetch(webApiUrl + "/" + urlParams, options);
        return response.json();
    }
}

export default ServerRequest;