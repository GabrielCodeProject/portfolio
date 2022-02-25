window.addEventListener(
  'load',
  function loaded (e) {
    window.removeEventListener('load', loaded)

    const competanceContainer1 = document.getElementById('competance1-id')
    const competanceContainer2 = document.getElementById('competance2-id')
    const competanceContainer3 = document.getElementById('competance3-id')
    this.document.getElementsByClassName('light')

    //const competanceTitle = document.getElementById('title-competance-light')

    competanceContainer1.addEventListener('mouseover', mouseOverLightText)
    competanceContainer1.addEventListener('mouseout', mouseOutCloseLightText)
    competanceContainer1.addClass('light')

    competanceContainer2.addEventListener('mouseover', mouseOverLightText)
    competanceContainer2.addEventListener('mouseout', mouseOutCloseLightText)
    competanceContainer2.addClass('light')

    competanceContainer3.addEventListener('mouseover', mouseOverLightText)
    competanceContainer3.addEventListener('mouseout', mouseOutCloseLightText)
    competanceContainer3.addClass('light')

    function mouseOverLightText (event) {
      console.log(event.target)
      event.target.style.textShadow =
        '0px 0px 5px #fff, #fff 0px 0px 10px, #fff 0px 0px 15px'
      /*document.getElementsByClassName('light').style.textShadow =
        '0px 0px 5px #fff, #fff 0px 0px 10px, #fff 0px 0px 15px'*/
    }
    function mouseOutCloseLightText (event) {
      event.target.style.textShadow = 'none'
      /* document.getElementsByClassName('light').style.textShadow = 'none'*/
    }
  },
  false
)
