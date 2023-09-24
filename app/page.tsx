

export default function Page() {
  return(<div>{`${metadata.title} ${metadata.description}`}</div>);
}

export const metadata = {
  title: 'PokèGram',
  description: 'Pokemon browsing made easy | Search',
}