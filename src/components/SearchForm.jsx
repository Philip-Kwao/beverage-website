import { GoSearch } from 'react-icons/go'

const SearchForm = () => {
    const handleSearchSubmit = () =>{
        console.log("Search Submit Clicked")
    }
  return (
    <>
        {/* Search Form */}
        <form onSubmit={handleSearchSubmit()} className="border w-[30rem] flex items-center justify-center bg-white px-6 rounded-full">
        <input type="text" placeholder="search for product" className='w-full h-9 bg-transparent outline-none text-gray-800' />
        <span className='text-green-900 cursor-pointer' onClick={handleSearchSubmit()}><GoSearch /></span>
        </form>
    </>
  )
}

export default SearchForm