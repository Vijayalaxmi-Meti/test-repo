 
describe ('Demo Tests', function () {
    it ('Launch application', async () => {
        await browser.url('https://www.polestar.com/se')
        //browser.pause(5000)
        const label = $('.css-17kd6cj')
        let text = label.getText()
        console.log(text)
        const elementById = $('#CI2U8EIPRDmNVTVRAr4P5Q')
        elementById.click()
        
})
    it('Assert the option', function () {
        const label = $('css-zqm6uc')
        let text = label.getText()
        console.log(text)
    })
})




  

