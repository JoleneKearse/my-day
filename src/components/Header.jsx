import getDate from "../utils/getDate"

const Header = (props) => {
  const { hours } = getDate()
  console.log(hours)
  const greeting = (hours) => {
    if (hours <= 12) return 'Good morning,'
    if (hours <= 18) return 'Good afternoon,'
    if (hours <= 24) return 'Good evening,'
  }
  console.log(greeting)
  return (
    <header className='h-8 w mx-auto min-w-full bg-purple-500'>
      <h1>
        {greeting}{props.user}!
      </h1>
    </header>
  )
}

export default Header