import React from 'react'
import {useRef} from 'react'
import iconOne from '../Assets/images/plan-icon-1.png'
import iconTwo from '../Assets/images/plan-icon-2.png'
import iconThree from '../Assets/images/plan-icon-3.png'

function Forms() {
  const carousel = useRef(null);
  let imgNum = 1;

  const navBarHandle = (n) => {
    carousel.current.scrollLeft = (carousel.current.offsetWidth * (n - 1));
    imgNum = n;
    if(imgNum === 3){
      document.getElementById("btTxtNext").innerHTML = 'Submit'
    }else{
      document.getElementById("btTxtNext").innerHTML = 'Next Step'
    }
  }

  const navHandleNext = () =>{
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    if(imgNum < 3){
      imgNum = imgNum + 1;
    }
    if(imgNum === 3){
      document.getElementById("btTxtNext").innerHTML = 'Submit'
    }else{
      document.getElementById("btTxtNext").innerHTML = 'Next Step'
    }
  }

  const navHandleBack = () =>{
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    if(imgNum > 1){
      imgNum--;
    }
    if(imgNum === 3){
      document.getElementById("btTxtNext").innerHTML = 'Submit'
    }else{
      document.getElementById("btTxtNext").innerHTML = 'Next Step'
    }
  }

  return (
    <section id='formsSec'>

      {/* Left side nav bar */}

      <div id='formsBody'>
        <div id='formsNavContainer'>
            <div id='optionContainer'>
              <label className='navRadioContainer'>
                <input type='radio' name='sideNavOpt' onClick={() => navBarHandle(1)} value={1} defaultChecked/>
                <div className='option checkmark'>

                  <div className='optionSelect'>1</div>

                  <div className='optionText'>
                    <h4>STEP 1</h4>
                    <p>YOUR INFO</p>
                  </div>

                </div>
              </label>

              <label className='navRadioContainer'>
                <input type='radio' name='sideNavOpt' onClick={() => navBarHandle(2)} value={2}/>
                <div className='option checkmark'>

                  <div className='optionSelect'>2</div>

                  <div className='optionText'>
                    <h4>STEP 2</h4>
                    <p>SELECT PLAN</p>
                  </div>

                </div>
              </label>

              <label className='navRadioContainer'>
                <input type='radio' name='sideNavOpt' onClick={() => navBarHandle(3)} value={3}/>
                <div className='option checkmark'>
          
                  <div className='optionSelect'>3</div>

                  <div className='optionText'>
                    <h4>STEP 3</h4>
                    <p>ADD-ONS</p>
                  </div>

                </div>
              </label>
            </div>

            <div id='decorationSquare'>
              <div id='decoSquareOne'></div>
              <div id='decoSquareTwo'></div>
              <div id='decoSquareThree'></div>
              <div id='decoSquareFour'></div>
              <div id='decoSquareFive'></div>
            </div>

        </div>

        {/* Main text area */}

        <div id='infoBodyContainer'>

          <div className='carousel' ref={carousel}>
              <div className='image'>
                  <div className='imageContainer'>
                    <div className='textContainer'>
                      <h4>Personal info</h4>
                      <p>Please provide your name,email address,and phone number</p>
                    </div>
                    <div id='informationContainer'>  
                      <label for='name' className='labelInp'>Name</label>
                      <input type='text' id='name' name='name' placeholder='e.g John Doe'/>
                      <label for='email' className='labelInp'>Email Address</label>
                      <input type='email' id='email' name='email' placeholder='e.g johnDoe260@email.com'/>
                      <label for='phone' className='labelInp'>Phone Number</label>
                      <input type='number' id='number' name='number' placeholder='e.g +1 555-555-555'/>
                    </div>
                  </div>
              </div>

              <div className='image'>
                  <div className='imageContainer'>
                    <div className='textContainer'>
                      <h4>Select your plan</h4>
                      <p>You have the option of monthly or yearly billing</p>
                      <div id='cardsContainer'>
                        <label className='billingCardContainer'>
                          <input type='radio' id='card-1' name='card'/>
                          <div id='billingCard' className='checkmark'>
                            <img src={iconOne} className='billingIcon' alt='icon-1'/>
                            <h4>Arcade</h4>
                            <p>$9/mo</p>
                          </div>
                        </label>
                        
                        <label className='billingCardContainer'>
                          <input type='radio' id='card-2' name='card'/>
                          <div id='billingCard' className='checkmark'>
                            <img src={iconTwo} className='billingIcon' alt='icon-2'/>
                            <h4>Advanced</h4>
                            <p>$17/mo</p>
                          </div>
                        </label>

                        <label className='billingCardContainer'>
                          <input type='radio' id='card-3' name='card'/>
                          <div id='billingCard' className='checkmark'>
                            <img src={iconThree} className='billingIcon' alt='icon-3'/>
                            <h4>Pro</h4>
                            <p>$20/mo</p>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div id='slideContainer'>
                      <label id='slideButton'>
                        <input type="checkbox" name="slideButton"/>
                        <p id='slideP1'>Monthly</p>
                        <span className='checkmark'>
                          <div id='slideBall'/>
                        </span>
                        <p id='slideP2'>Yearly</p>
                      </label>
                    </div>
                  </div>
              </div>

              <div className='image'>
                  <div className='imageContainer'>
                    <div className='textContainer'>
                      <h4>Pick add-ons</h4>
                      <p>Add-ons help enhance your gaming experience</p>
                        <label className='addContainer'>
                        <input type='checkbox' name='addCheckBox' id='addCheckBoxOne'/>
                        <div className='addCheck checkmark'>
                          <div className='checkMarkContainer'>
                            <div className='checkMarkIndicator'></div>
                          </div>
                          <div>
                            <h4>Online service</h4>
                            <p>Access to multiple games</p>  
                          </div>
                          <div className='addMoney'>
                            <p>+1$/mo</p>
                          </div>
                        </div>
                      </label>

                      <label className='addContainer'>
                        <input type='checkbox' name='addCheckBox' id='addCheckBoxTwo'/>
                        <div className='addCheck checkmark'>
                          <div className='checkMarkContainer'>
                            <div className='checkMarkIndicator'></div>
                          </div>
                          <div>
                            <h4>Larger storage</h4>
                            <p>Extra 1TB of cloud save</p>  
                          </div>
                          <div className='addMoney'>
                            <p>+2$/mo</p>
                          </div>
                        </div>
                      </label>

                      <label className='addContainer'>
                        <input type='checkbox' name='addCheckBox' id='addCheckBoxThree'/>
                        <div className='addCheck checkmark'>
                          <div className='checkMarkContainer'>
                            <div className='checkMarkIndicator'></div>
                          </div>
                          <div>
                            <h4>Customizable profile</h4>
                            <p>Custom theme on your profile</p>  
                          </div>
                          <div className='addMoney'>
                            <p>+2$/mo</p>
                          </div>
                        </div>
                      </label>

                    </div>
                  </div>
              </div>
          </div>

          <div id='navBottom'>
            <button id='navBottomLeft' onClick={navHandleBack}><p>Go Back</p></button>
            <button id='navBottomRight' onClick={navHandleNext}><p id='btTxtNext'>Next Step</p></button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Forms