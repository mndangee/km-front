import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Box } from 'components/Atoms';
import NoLoginPage from 'components/Molecules/LoginPage';
import ArchiveUpdateHome from 'components/Organisms/ArchiveUpdate/ArchiveUpdateHome';
import theme from 'styles/theme';
import { UserProps, useUserProps } from 'utils/authentication/useUser';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const ArchiveUpdate: NextPage<UserProps> = ({ user }) => {
  const router = useRouter();

  useInitHeader({
    headerLeft: 'default',
    title: '아카이브 수정하기',
    headerRight: 'disabled',
    headerLeftAction: () => router.back(),
  });

  if (!user.isLogin) {
    return <NoLoginPage />;
  }

  return (
    <Box padding="0 15px" background={theme.colors.white}>
      <ArchiveUpdateHome />
      <Box height="60px" />
    </Box>
  );
};

export const getServerSideProps = useUserProps;
export default ArchiveUpdate;
