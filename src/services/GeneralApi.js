const URL_BASE = "https://2z3crp9mqj.execute-api.us-east-1.amazonaws.com";

export async function request({
    url_base = URL_BASE,
    params,
    method,
    data = undefined,
}) {
    console.log(params);

    let headers = {
        "Content-Type": "application/JSON",
    };

    try {
        const response = await fetch(`${url_base}${params}`, {
            method,
            headers,
            body: data,
        });
        const response_json = await response.json();
        return response_json;
    } catch (error) {
        if (error.message === "Unexpected end of JSON input") {
            return {};
        } else {
            throw error;
        }
    }
}
