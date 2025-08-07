import { useEffect, useState, useCallback } from 'react';
import Spinner from '@/components/atoms/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'sonner';

export default function LearnersList({ onSelect }) {
  const [learners, setLearners] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState([]);
  const [message, setMessage] = useState(''); // ✅ Empty initially

  // ✅ Fetch learners once on mount
  useEffect(() => {
    fetchLearners();
  }, []);

  const fetchLearners = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/users?limit=10000&skip=0');
      if (!response.ok) throw new Error('Failed to fetch learners');
      const data = await response.json();
      setLearners(data.users || []);
      setFiltered(data.users || []);
    } catch {
      toast.error('Error loading learners');
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handles live search with feedback
  const handleSearch = useCallback((e) => {
    const value = e.target.value.trim();
    setSearch(value);
    
      // ✅ Hide default learners if 1 learner is selected


  // ✅ Default list if no learner selected and input empty
 
  

    // Show hint message only after user starts typing
    if (value.length > 0 && value.length < 3) {
      setFiltered([]);
      setMessage('Type 3 letters or more');
      return;
    }

    if (value.length >= 3) {
      const results = learners.filter(user =>
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(value.toLowerCase()) ||
        user.username.toLowerCase().includes(value.toLowerCase())
      );

      setFiltered(results);
      setMessage(results.length > 0 ? '' : 'No learners found');
      return;
    }

    // If input is cleared
    setFiltered([]);
    setMessage('');
  }, [learners]);

  // ✅ Handles selecting a learner
  const handleSelect = useCallback((user) => {
    setSelected(prev => {
      if (!prev.find(item => item.id === user.id)) {
        onSelect(user);
        return [...prev, user];
      } else {
        toast.warning('Already selected');
        return prev;
      }
    });
    // setSearch('');
    // if( selected.length > 0) {
    //   setFiltered(prev => prev.filter(item => item.id !== user.id));
    // }
    setSearch(''); // Clear search after selection
    setFiltered([]);
  }, [onSelect]);

  // ✅ Handles removing a learner
  const handleRemove = useCallback((id) => {
    setSelected(prev => prev.filter(item => item.id !== id));
  }, []);

  // ✅ Handles selecting all learners
  const handleSelectAll = useCallback(() => {
    if (learners.length === 0) {
      toast.error("No learners available to select");
      return;
    }
    setSelected(learners);
    learners.forEach(user => onSelect(user));
    setSearch('');
    toast.success("All learners selected");
  }, [learners, onSelect]);

  return (
    <div className="rounded p-2 w-full">
      {/* Selected Learner Tags */}
      <div  className="rounded-sm bg-neutral-100  p-1 flex flex-wrap gap-2 mb-2 max-h-20 overflow-y-auto">
        {selected.map(user => (
          <span
            key={user.id}
            style={{border: '1px solid  #E0E0E0'}}
            className=" flex w-[fit-content] h-[30px] self-center items-center bg-white text-black px-2 rounded text-[12px]"
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="mr-2 cursor-pointer text-gray-500 hover:text-red-500"
              onClick={() => handleRemove(user.id)}
            />
            {user.firstName} {user.lastName}
          </span>
        ))}
        {/* Input field */}
        <div className="flex-grow min-w-[120px] p-1">
          <input
            type="text"
            value={search}
            autoFocus
            autoCorrect="on"
            onChange={handleSearch}
            
            placeholder="Start typing here"
            className="placeholder-neutral-400 pl-4 pr-2 w-full p-1 border-none outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Search Results */}
      {loading && <Spinner />}
      {!loading &&  filtered.length > 0 && (
       <ul className="absolute left-0 right-0 z-50 shadow-2xl max-h-50 md:max-h-60 overflow-y-auto rounded-sm p-2 mt-1 bg-white border border-gray-200">
  <div className="flex justify-between items-center mb-2  top-0 bg-white z-10">
    <button
      onClick={handleSelectAll}
      className="mb-2 px-3 py-1 text-black hover:text-purple-600 text-sm rounded"
    >
      <i className="fa fa-folder mr-2"></i>
      Select Everyone
    </button>
    <div>{learners.length} matching user</div>
  </div>

  {filtered.map(user => (
    <li
      key={user.id}
      className="p-3 font-light hover:bg-gray-100 cursor-pointer rounded"
      onClick={() => handleSelect(user)}
    >
      <i className="fa-regular fa-user"></i> {user.firstName} {user.lastName}
    </li>
  ))}
</ul>

      )}

      {/* Message shown only after typing */}
      {!loading && message && search.length > 0 && (
        <p className="text-black p-2 rounded shadow-xl text-sm mt-1">{message}</p>
      )}
    </div>
  );
}
