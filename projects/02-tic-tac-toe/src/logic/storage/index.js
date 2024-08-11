export const saveGameStorage = ({ board, turn }) => {
  localStorage.setItem('board', JSON.stringify(board))
  localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}
