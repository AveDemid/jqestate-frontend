export type Method = "GET" | "POST" | "PUT" | "DELLETE";

export const requiest = <T>(method: Method, url: string): Promise<T> => {
  const baseUri = "https://api.jqestate.ru/v1";
  const uri = `${baseUri}${url}`;

  const config = new Request(uri, {
    method: method
  });

  return fetch(config).then(response => response.json());
};
