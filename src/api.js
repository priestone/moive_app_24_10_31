const fetch =require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";

const options = {
    method: "GET",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTQyZGRkODVkZjBjNWM4MGZiYzU5NmUwMGVlOTZiMyIsIm5iZiI6MTczMDI2NjE3Ny4zNzM1OTU3LCJzdWIiOiI2NzIxYjQ2ODk3NGE2NzZjNmRmMzNiNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nAclr972JkfTrNpc1xw0KnqMkFZp8vx1bVfBNZr0Jkk'
    },
};

const url = (urlName) => {
    return baseUrl + `${urlName}?language=ko-kr`
}

export const nowPlaying = () => fetch(url("movie/now_playing"),options).then((res)=>res.json());

export const popular = () => fetch(url("movie/popular"),options).then(res => res.json());