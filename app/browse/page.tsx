export default function Page() {
  return(<div>{`${metadata.title}${metadata.description}`}</div>);
}

export const metadata = {
  title: 'PokèGram | Browse',
  description: 'Pokemon browsing made easy | Pokèmon Gallery',
}