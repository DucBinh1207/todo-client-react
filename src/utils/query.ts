type Params = {
  [key: string]: string | boolean;
};

export default function getQueryString(params: Params): string {
  let queryString = "";

  Object.keys(params).forEach((key) => {
    if (params[key]) {
      queryString += `${key}=${params[key]}&`;
    }
  });

  return queryString;
}
