import { Helmet } from 'react-helmet-async';

import { BlogView } from 'src/material-kit/sections/blog/view';

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Blog | Minimal UI </title>
      </Helmet>

      <BlogView />
    </>
  );
}
