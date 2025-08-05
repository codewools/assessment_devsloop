import { useEffect, useState } from 'react'
import Spinner from '@/components/atoms/Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'sonner'

export default function LearnersList({ onSelect }) {
  const [learners, setLearners] = useState([])
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState([])
  const [message, setMessage] = useState('Type at least 3 characters to search...')

  // ✅ Fetch learners only once
  useEffect(() => {
    fetchLearners()
  }, [])

  async function fetchLearners() {
    try {
      setLoading(true)
      const response = await fetch('https://dummyjson.com/users?limit=10000&skip=0')
      if (!response.ok) throw new Error('Failed to fetch learners')

      const data = await response.json()
      setLearners(data.users || [])
    } catch (err) {
      toast.error('Error loading learners')
    } finally {
      setLoading(false)
    }
  }

  // ✅ Search only if 3 or more characters
  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)

    if (value.length < 3) {
      setFiltered([])
      setMessage('Type at least 3 characters to search...')
      return
    }

    const results = learners.filter(user =>
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(value.toLowerCase()) ||
      user.username.toLowerCase().includes(value.toLowerCase())
    )

    if (results.length > 0) {
      setFiltered(results)
      setMessage('')
    } else {
      setFiltered([])
      setMessage('No learners found')
    }
  }

  //  Add selected user as a tag
  const handleSelect = (user) => {
    if (!selected.find(item => item.id === user.id)) {
      setSelected([...selected, user])
      onSelect(user)
      setSearch('')
      setFiltered([])
    } else {
      toast.warning('Already selected')
    }
  }

  //  Remove user tag
  const handleRemove = (id) => {
    setSelected(selected.filter(item => item.id !== id))
  }

  return (
    <div className=" rounded p-2 w-full">
      {/*  Selected Tags in a Single Row */}
      <div className="  rounded-sm bg-neutral-100 p-1 flex flex-wrap gap-2 mb-2">
        {selected.map(user => (
          <span
            key={user.id}
            className="flex items-center bg-gray-200 text-black px-2  rounded text-sm"
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="mr-2 cursor-pointer text-gray-500 hover:text-red-500"
              onClick={() => handleRemove(user.id)}
            />
            {user.firstName} {user.lastName}

          </span>
        ))}
        {/*  Input Field stays in row */}
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search learners..."
          className="flex-grow min-w-[120px] p-1 border-none outline-none bg-transparent"
        />
      </div>
      {/* Show search results */}
      {loading && <Spinner />}
      {!loading && search.length >= 3 && filtered.length > 0 && (
        <ul className="shadow-2xl w-max-h-48 overflow-y-auto rounded-sm p-2 mt-1">
          {filtered.map(user => (
            <li
              key={user.id}
              className="p-2 hover:bg-gray-100 cursor-pointer  rounded"
              onClick={() => handleSelect(user)}
            >
              <i className='fa-regular fa-user'></i> {user.firstName} {user.lastName} <span className="text-gray-500"></span>
            </li>
          ))}
        </ul>
      )}

      {/* Fallback message */}
      {!loading && message && (
        <p className="text-black p-2  rounded shadow-xl text-sm mt-1">{message}</p>
      )}
    </div>
  )
}
