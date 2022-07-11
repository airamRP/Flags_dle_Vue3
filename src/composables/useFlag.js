import { countriesData } from '@/data/flags.js'

import { ref } from 'vue'

const currentContinent = ref('Europa')
const continentsList = ref([])
const flagsList = ref([])
const countriesToGuess = ref([])
const board = ref([])
const boardStyles = ref([])

const currentRow = ref(0)
const currentColumn = ref(0)

const endGame = ref('false')

const showModalInfo = ref('')
const showSolution = ref(false)

export function useFlag() {
  const numCountriesGuess = ref(5)
  const MAX_TRIES = 5

  const newGame = () => {
    endGame.value = false
    currentRow.value = 0
    currentColumn.value = 0
    showSolution.value = false
    initContinentsList()
    initFlagsList()
    initBoard()
    initCountriesToGuess()
    initBoardStyles()
  }

  const initContinentsList = () => {
    continentsList.value =  Object.keys(countriesData)
  }

  const initFlagsList = () => {
    flagsList.value = shuffle(countriesData[currentContinent.value])
  }

  const initBoard = () => {
    board.value = Array.from({ length: MAX_TRIES }, () => Array.from({ length: numCountriesGuess.value }, () => ''))
  }

  const initCountriesToGuess = () => {
    const temp = new Set([])
    while (temp.size < numCountriesGuess.value) {
      let auxRandom = Math.floor(Math.random() * countriesData[currentContinent.value].length)
      temp.add(countriesData[currentContinent.value][auxRandom])
    }
    countriesToGuess.value = Array.from(temp)
  }

  const initBoardStyles = () => {
    boardStyles.value = Array.from({ length: MAX_TRIES }, () => Array.from({ length: numCountriesGuess.value }, () => 'empty'))
    boardStyles.value[currentRow.value][currentColumn.value] = 'pending'
  }

  const getUrl = (country = '') => {
    return country ?
      require(`@/assets/Images/${currentContinent.value}/Bandera de ${country}.svg`) :
      require('@/assets/Images/BaseFlag.svg')
  }

  const getStyleLetter = (row, col) => {
    return boardStyles.value[row] ? boardStyles.value[row][col] : 'empty'
  }

  const sendFlag = (country) => {
    if (endGame.value) {
      animationModalInfo('Juego terminado')
      return
    }
    if (currentColumn.value < numCountriesGuess.value) {
      board.value[currentRow.value][currentColumn.value] = country
      boardStyles.value[currentRow.value][currentColumn.value] = 'empty'
      currentColumn.value++
      boardStyles.value[currentRow.value][currentColumn.value] = 'pending'
    }
  }

  const back = () => {
    if (endGame.value) {
      animationModalInfo('Juego terminado')
      return
    }
    if (currentColumn.value > 0) {
      boardStyles.value[currentRow.value][currentColumn.value] = 'empty'
      currentColumn.value--
      board.value[currentRow.value][currentColumn.value] = ''
      boardStyles.value[currentRow.value][currentColumn.value] = 'pending'
    }
  }

  const sendSolution = () => {
    if (endGame.value) {
      animationModalInfo('Juego terminado')
      return
    }
    if (currentColumn.value < numCountriesGuess.value) {
      animationModalInfo('Banderas insuficientes')
      return
    }

    if (success()) {
      animationModalInfo('Enhorabuena')
      endGame.value = true
      return
    }

    // Señalar aciertos y fallos
    const partialOk = []
    const partialPresent = []
    board.value[currentRow.value].forEach((country, index) => {
      if (countriesToGuess.value[index] === country) {
        boardStyles.value[currentRow.value][index] = 'success'
        partialOk.push(country)
      } else {
        if (countriesToGuess.value.includes(country)) {
          boardStyles.value[currentRow.value][index] = 'present'
          partialPresent.push(country)
        } else {
          boardStyles.value[currentRow.value][index] = 'error'
          deleteCountry(country)
        }
      }
    })

    // Actualizar filas y columnas
    currentColumn.value = 0
    currentRow.value++

    if (currentRow.value >= MAX_TRIES) {
      // Fin juego con error. Mostrar resultado
      showSolution.value = true
      endGame.value = true
      return
    }
    boardStyles.value[currentRow.value][currentColumn.value] = 'pending'
  }

  const success = () => {
    return JSON.stringify(board.value[currentRow.value]) === JSON.stringify(countriesToGuess.value)
  }

  const deleteCountry = (country) => {
    flagsList.value = flagsList.value.filter(item => {
      return item !== country
    })
  }

  const animationModalInfo = ((info = '') => {
    setTimeout(() => {
      showModalInfo.value = ''
    }, 2500)
    showModalInfo.value = info
  })
  
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  return {
    newGame, flagsList, board, getUrl, getStyleLetter,
    sendFlag, sendSolution, back,
    countriesToGuess,
    showModalInfo,
    showSolution,
    continentsList,
    currentContinent
  }
}