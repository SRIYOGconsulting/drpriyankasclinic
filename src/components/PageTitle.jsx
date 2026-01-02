import { useEffect } from 'react';

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = `${title} | Dr. Priyanka's Clinic`;
    // Reset the title when the component unmounts
    return () => {
      document.title = "Dr. Priyanka's Clinic";
    };
  }, [title]);

  return null;
};

export default PageTitle;
