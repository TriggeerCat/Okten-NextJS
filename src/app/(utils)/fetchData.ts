export const fetchData = async <T>(url: string) => {
    const promise = await fetch(url);
    const data: T = await promise.json();
    return data;
}