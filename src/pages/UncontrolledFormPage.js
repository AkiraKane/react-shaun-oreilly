import React, { useState } from "react"
import { Button } from "../Button"

export const UncontrolledFormPage = () => {
    const nameInput = React.createRef()
    const emailInput = React.createRef()
    const favoriteColorInput = React.createRef()


    return (
        <form>
            <h3>Please enter your information:</h3>
             <div>
                 <input 
                 ref={nameInput}
                 type="text" 
                 placeholder="Name" 
                 />
             </div>
             <div>
                 <input 
                 ref={emailInput}
                 type="text" 
                 placeholder="Email" 
                 />
             </div>
             <div>
                 <input 
                 ref={favoriteColorInput}
                 type="text" 
                 placeholder="Favorite Color" 
                 />
             </div>
             <Button 
             buttonColor="pink"
             onClick={e => {
                 alert(`
                    Your name is ${nameInput.current.value},
                    your email is ${emailInput.current.value}, 
                    and your favorite color is ${favoriteColorInput.current.value}!
                 `)
                 e.preventDefault()  // to prevent this event from bubbling up to higher components
             }}>Submit</Button>
        </form>
    )
}