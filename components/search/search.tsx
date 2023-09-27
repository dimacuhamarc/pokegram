import Image from "next/image";
const Search = () => {
  

  return (
    <div>
      <input type="text" placeholder="Search 'Em All" className="input input-bordered shadow text-neutral" />
      <div className="stats bg-primary text-neutral-content">
        <div className="stat">
          <div className="stat-title text-xs">Total Pokèmons Discovered</div>
          <div className="stat-value">89,400</div>
        </div>
        
      </div>
    </div>
  );
}

export default Search;