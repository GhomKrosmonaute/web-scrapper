import * as jsdom from "jsdom"
import * as axios from "axios"

export async function scrap(
  url: string,
  options?: {
    request?: axios.AxiosRequestConfig
    parsing?: jsdom.ConstructorOptions
  },
  fn?: (dom: jsdom.JSDOM | null, err: Error | null) => any,
): Promise<jsdom.JSDOM> {
  return axios.default
    .get(url, options?.request)
    .then(({ data }) => new jsdom.JSDOM(data, options?.parsing))
    .then((dom) => {
      if (fn) return fn(dom, null)
      return dom
    })
    .catch((err) => {
      if (fn) return fn(null, err)
      throw err
    })
}
