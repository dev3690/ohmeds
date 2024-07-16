// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Breadcrumb } from 'react-bootstrap';

// const Breadcrumbs = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split('/').filter((x) => x);

//   return (
//     <Breadcrumb>
//       <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
//         Home
//       </Breadcrumb.Item>
//       {pathnames.map((value, index) => {
//         const to = `/${pathnames.slice(0, index + 1).join('/')}`;
//         return (
//           <Breadcrumb.Item key={to} linkAs={Link} linkProps={{ to }}>
//             {value}
//           </Breadcrumb.Item>
//         );
//       })}
//     </Breadcrumb>
//   );
// };

// export default Breadcrumbs;



import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../styles/Breadcrumbs.css';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="breadcrumb-container">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
          <HomeIcon /> Home
        </Breadcrumb.Item>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <Breadcrumb.Item key={to} linkAs={Link} linkProps={{ to }}>
              {index !== pathnames.length - 1 && <ArrowForwardIosIcon className="breadcrumb-icon" />}
              {value}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
