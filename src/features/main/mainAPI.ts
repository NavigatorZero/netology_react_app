// A mock function to mimic making an async request for data
export function fetchList(): Promise<any> {
    return fetch('https://raw.githubusercontent.com/netology-code/react-task/master/netology.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response
        });
}
