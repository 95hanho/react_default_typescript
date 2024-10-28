import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name: string, value: string, minutes: number, secure: boolean = false) => {
	cookies.set(name, value, {
		maxAge: 60 * minutes,
		secure,
		path: "/",
	});
};

export const getCookie = (name: string) => {
	return cookies.get(name);
};

export const removeCookie = (name: string) => {
	cookies.remove(name, { path: "/" });
};
