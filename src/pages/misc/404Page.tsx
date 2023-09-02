import _404 from 'src/assets/404.svg'
import Title from '@components/utils/Title'

function _404Page () {
  return (
    <>
    <Title title='404 Not Found'></Title>
    <div className="flex flex-col items-center justify-center h-full no-select pointer-events-none">
      <img className="md:w-1/2 h-auto" color='gray' src={_404}/>
      <h1 className="md:text-5xl font-bold">404 - Not Found</h1>
    </div>
    </>
  )
}

export default _404Page
