import Search from '../components/search/search';

export default function Page() {
  return(
    <div>
      <div>
        What Pokemon are you looking for?
      </div>
      <div>
        <Search />
      </div>
    </div>
  )
}

export const metadata = {
  title: 'PokèGram',
  description: 'Pokemon browsing made easy | Search',
}