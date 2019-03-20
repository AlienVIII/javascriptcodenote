//function for credit card input 
// using RegExr
handleID = (value) => {
    let formattedCardNumber = value.replace(/[^\d]/g, '')
    formattedCardNumber = formattedCardNumber.substring(0, 16)
    const cardNumberSections = formattedCardNumber.match(/\d{1,4}/g)
    if (cardNumberSections !== null) {
      formattedCardNumber = cardNumberSections.join(' ')
    }
    this.setState({ id: formattedCardNumber })
  }

  handleEXP = (value) => {
    let formattedEXP = value.replace(/[^\d]/g, '')
    formattedEXP = formattedEXP.substring(0, 4)
    const expSections = formattedEXP.match(/\d{1,2}/g)
    if (expSections !== null) {
      formattedEXP = expSections.join('/')
    }
    this.setState({ exp: formattedEXP })
  }

  handleCCV = (value) => {
    let formattedCCV = value.replace(/[^\d]/g, '')
    formattedCCV = formattedCCV.substring(0, 3)
    this.setState({ ccv: formattedCCV })
  }
