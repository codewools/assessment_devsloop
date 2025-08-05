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
  const [message, setMessage] = useState('Type at least 3 characters to search...');

  //     Fetch all learners once
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
    } catch {
      toast.error('Error loading learners');
    } finally {
      setLoading(false);
    }
  };

  //     Search filter (debounced-like behavior)
  const handleSearch = useCallback((e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.length < 3) {
      setFiltered([]);
      setMessage('Type at least 3 characters to search...');
      return;
    }

    const results = learners.filter(user =>
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(value.toLowerCase()) ||
      user.username.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(results);
    setMessage(results.length > 0 ? '' : 'No learners found');
  }, [learners]);

  //     Memoized function: Select a learner
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
    setSearch('');
    setFiltered([]);
  }, [onSelect]);

  //     Memoized function: Remove a learner
  const handleRemove = useCallback((id) => {
    setSelected(prev => prev.filter(item => item.id !== id));
  }, []);

  //     Memoized function: Select all learners
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
      {/* Selected Tags */}
      <div className="rounded-sm bg-neutral-100 p-1 flex flex-wrap gap-2 mb-2 max-h-20 overflow-y-auto">
        {selected.map(user => (
          <span
            key={user.id}
            className="flex items-center bg-gray-200 text-black px-2 rounded text-sm"
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
        <div className="flex-grow min-w-[120px]">
          <input
            type="text"
            value={search}
            autoFocus
            autoCorrect="on"
            onChange={handleSearch}
            placeholder="Search learners..."
            className="w-full p-1 border-none outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Search Results */}
      {loading && <Spinner />}
      {!loading && search.length >= 3 && filtered.length > 0 && (
        <ul className="shadow-2xl max-h-48 overflow-y-auto rounded-sm p-2 mt-1">
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={handleSelectAll}
              className="mb-2 px-3 py-1 text-black hover:text-purple-600 text-sm rounded"
            >
              <i className="fa fa-folder mr-2"></i>
              Select Everyone
            </button>
            <div>{learners.length} results found</div>
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

      {/* Fallback message */}
      {!loading && message && (
        <p className="text-black p-2 rounded shadow-xl text-sm mt-1">{message}</p>
      )}
    </div>
  );
}
