const {Builder, By, Key, Options, Capabilities, until} = require("selenium-webdriver");

const chrome = require('selenium-webdriver/chrome')
const webdriver = require('selenium-webdriver')



async function example(){
    let options = new chrome.Options()
    let nextPort = 9222 //for example
    options.addArguments(["--remote-debugging-port=" + nextPort])
    let driver = new webdriver.Builder()
     .withCapabilities(webdriver.Capabilities.chrome())
     .setChromeOptions(options)
     .build()
//let driver = await new Builder().forBrowser("chrome").build()
await driver.get("https://www.google.com/")
await driver.findElement(By.xpath("//textarea")).sendKeys("India")
await driver.sleep(10000)
await driver.findElement(By.xpath("//textarea")).sendKeys("India123")
await driver.sleep(10000)
await driver.close()


}

example()