/*
 * 2024-08-27 version
 */
import instance from "../hooks/AxiosInterceptor";

// get
export const get_normal = (url: string, json?: any, headers?: string) => {
	url = url.replace(/ /gi, "%20");
	let queryString = "";
	if (json && Object.entries(json).length > 0) {
		queryString += "?";
		for (let key in json) {
			if (queryString.indexOf("?") !== queryString.length - 1) {
				queryString += "&";
			}
			queryString += `${key}=${json[key]}`;
		}
	}
	const headersObj: any = {};
	if (headers) headersObj.headers = headers;
	return instance.get(url + queryString, headersObj);
};

// put urlFormData
export const put_urlFormData = (url: string, params: any, headers: string) => {
	const url_form_data = new URLSearchParams(params);
	const headersObj: any = {};
	if (headers) headersObj.headers = headers;
	return instance.put(url, url_form_data, headersObj);
};

// download
export const get_download = (url: string, json: any, headers: string) => {
	url = url.replace(/ /gi, "%20");
	let queryString = "";
	if (json && Object.entries(json).length > 0) {
		queryString += "?";
		for (let key in json) {
			if (queryString.indexOf("?") !== queryString.length - 1) {
				queryString += "&";
			}
			queryString += `${key}=${json[key]}`;
		}
	}
	const headersObj: any = { responseType: "blob" };
	if (headers) headersObj.headers = headers;
	return instance.get(url + queryString, headersObj);
};

// post body
export const post_json = (url: string, params: any, headers: string) => {
	const headersObj: any = {};
	if (headers) headersObj.headers = headers;
	return instance.post(url, params, headersObj);
};

// post formData
export const post_formData = (url: string, params: any, headers: string) => {
	const formData = new FormData();
	Object.entries(params).map((v: [string, any]) => {
		if (v[1] instanceof Array || v[1] instanceof FileList) {
			for (let value of v[1]) {
				formData.append(v[0], value);
			}
		} else {
			formData.append(v[0], v[1]);
		}
	});
	const headersObj: any = {};
	if (headers) headersObj.headers = headers;
	return instance.post(url, formData, headersObj);
};

// post urlFormData
export const post_urlFormData = (url: string, params: any, headers: string) => {
	const url_form_data = new URLSearchParams(params);
	const headersObj: any = {};
	if (headers) headersObj.headers = headers;
	return instance.post(url, url_form_data, headersObj);
};

// delete
export const delete_normal = (url: string, json: any) => {
	url = url.replace(/ /gi, "%20");
	let queryString = "";
	if (json && Object.entries(json).length > 0) {
		queryString += "?";
		for (let key in json) {
			if (queryString.indexOf("?") !== queryString.length - 1) {
				queryString += "&";
			}
			queryString += `${key}=${json[key]}`;
		}
	}
	return instance.delete(url + queryString);
};
