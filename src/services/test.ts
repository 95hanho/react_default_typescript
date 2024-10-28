import { get_normal } from "./apiDOC";

export const testAPI = () => {
	return get_normal("http://localhost:9367/api/list").then((res: any) => res.data);
};
export const noticeAPI = () => {
	return get_normal("/notice.json");
};
export const boardAPI = () => {
	return get_normal("/board.json");
};
export const communityAPI = () => {
	return get_normal("/community.json");
};
