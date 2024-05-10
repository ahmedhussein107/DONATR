import { Helmet } from 'react-helmet-async';

import { UserView } from 'src/material-kit/sections/user/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <UserView />
    </>
  );
}
