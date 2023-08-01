import LoginComponent from '@/components/LoginComponent';
import React from 'react';

interface ILoginPageProps {
  property1: any;
}

const Login = ({ property1 }: ILoginPageProps) => {
  return (
    <div>
      <LoginComponent /> 
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  try {
    // Fetch data from an API or any other data source
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Return the fetched data as props
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: null, // or handle the error case differently
      },
    };
  }
}
