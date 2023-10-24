import * as endpoint from "./endpoints.ts";
import { User } from "./user.ts";

type HTTPMethod = "GET" | "PUT";

export async function fetchWebApi(
  token: string,
  endpoint: string,
  method: HTTPMethod,
  body?: string,
): Promise<Response> {
  const url = `https://api.spotify.com/${endpoint}`;
  // const res = await fetch(url, {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  //   method,
  //   body: JSON.stringify(body),
  // });
  console.log(url);

  return await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
}

export async function getUserProfile(token: string) {
  return (await fetchWebApi(token, endpoint.me, "GET"));
}
