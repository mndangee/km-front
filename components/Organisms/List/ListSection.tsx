import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import ListCard from 'components/Organisms/List/ListCard';
import NoFilterList from 'components/Organisms/List/NoFilterList';
import NoItemList from 'components/Organisms/List/NoItemList';
import { ListState } from 'states';
import { setFilterState } from 'states/filter';

export default function ListSection() {
  const data = useRecoilValueLoadable(ListState);
  const setFilter = useRecoilValue(setFilterState);

  switch (data.state) {
    case 'hasValue':
      if (data.contents.contents.length === 0 && setFilter === false) {
        return <NoItemList />;
      } else if (data.contents.contents.length === 0 && setFilter === true) {
        return <NoFilterList />;
      }
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
