window.onload = function () {
    let array = []

    let buttons = document.querySelectorAll(".counter")
   //this is my loop, going through all the buttons and 
   //adding the events on each button whenever anyone clicks my function gets called//
    for(let i = 0; i<buttons.length; i++){

        buttons[i].addEventListener("click", function(event){
            let High = document.querySelector('#High')
            

            let Low = document.querySelector('#Low')

            

            if (array.length === 2){
                array = []
                
            }
            array.push(Number(event.target.innerHTML))
            if (array.length === 2){
                if (array[0] > array[1]){
                console.log('#1')
                console.log('BEFORE array =', array.toString())
                High.textContent = array[0]
                Low.textContent = array[1]
                console.log('AFTER array =', array.toString())
                }
                else if (array[1] > array[0]){
                console.log('#2')
                console.log('BEFORE array =', array.toString())
                High.textContent = array[1]
                Low.textContent = array[0]
                console.log('AFTER array =', array.toString())
                }
                else if (array[0] <= array[1]){
                console.log('#3')
                console.log('BEFORE array =', array.toString())
                High.textContent = array[1]
                Low.textContent = array[0]
                console.log('AFTER array =', array.toString())
                }
                else {
                console.log('#4')
                console.log('BEFORE array =', array.toString())
                Low.textContent = array[0]
                High.textContent = array[1]
                console.log('AFTER array =', array.toString())
                }
                }
                console.log(event.target.innerHTML)
                })
                }
                


   

}