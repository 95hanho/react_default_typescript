import { useEffect } from "react";

export default function Notice() {
	console.log("Notice");

	useEffect(() => {
		// noticeAPI().then(({ data }) => {
		// 	console.log(data);
		// });
		// console.log(data);
	}, []);

	return (
		<>
			<h2>Notice</h2>
			<div>
				<table>
					<thead>
						<tr>
							<th>아이디</th>
							<th>닉네임</th>
							<th>비번</th>
							<th>생성날짜</th>
							<th>토큰</th>
						</tr>
					</thead>
					<tbody>
						{/* {noticeList &&
							noticeList.map(
								(v: {
									id: string;
									nickName: string;
									password: string;
									createDate: string;
									refreshToken: string;
								}) => (
									<tr key={"noticeList" + v.id}>
										<td>{v.id}</td>
										<td>{v.nickName}</td>
										<td>{v.password}</td>
										<td>{v.createDate}</td>
										<td>{v.refreshToken}</td>
									</tr>
								)
							)} */}
					</tbody>
				</table>
			</div>
		</>
	);
}
