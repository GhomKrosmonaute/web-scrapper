import * as webScrapper from ".."

test("scrap npm", (done) => {
  webScrapper.scrap("https://www.npmjs.com", null, (data, err) => {
    expect(err).toBeNull()
    expect(data).not.toBeNull()

    const h1 = data.window.document.getElementsByTagName("h1")[0]

    expect(h1).not.toBeNull()
    expect(h1.textContent).toBe("Build amazing things")

    done()
  })
}, 20000)

test("scrap npm asynchronously", async () => {
  const data = await webScrapper.scrap("https://www.npmjs.com")
  expect(data).not.toBeNull()

  const h1 = data.window.document.getElementsByTagName("h1")[0]

  expect(h1).not.toBeNull()
  expect(h1.textContent).toBe("Build amazing things")
}, 20000)
