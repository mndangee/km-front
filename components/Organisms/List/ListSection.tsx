import { useRecoilValueLoadable } from 'recoil';

import ListCard from 'components/Organisms/List/ListCard';
import { ListState } from 'states';

export default function ListSection() {
  const data = useRecoilValueLoadable(ListState);

  switch (data.state) {
    case 'hasValue':
      return (
        <>
          {data.contents.contents.map((content, index) => (
            <ListCard key={content?.id ?? index} content={content} />
          ))}
        </>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw data.contents;
  }
}
