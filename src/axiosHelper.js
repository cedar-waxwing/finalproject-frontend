import axios from 'axios'


export function axiosHelper(props) {
	const {
		method = 'get',
		route = '/',
		data = {},
		token = '',
		successMethod = r => console.log(r),
		failureMethod = e => console.log(e)
	} = props; // setting default prop values

	const API_URL = 'https://finalprojectbackend-rachelehlers1288217.codeanyapp.com'

	return axios({
		method,
		url: API_URL + route,
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			'Access-Control-Allow-Origin': '*',
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + token
		},
		data
	})
		.then(successMethod)
		.catch(failureMethod)
}