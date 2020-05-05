import styled  from '@emotion/styled';

import tw from 'tailwind.macro';

const StyledLoginPage  = styled.div`${tw `flex justify-center items-center  h-screen`} ${ props => ({  backgroundImage: `url(${props.image})`,backgroundRepeat: 'no-repeat',backgroundPosition: 'center', backgroundSize: 'cover'})}`;

const StyledLoginComponent = styled.div `${tw `flex p-16 shadow-2xl flex-col justify-center bg-white`}`

const UserINput = styled.input `${tw `flex  w-40 p-3 rounded-md border border-solid border-black`}`;

const UserPassword = styled.input `${tw `flex mt-4 w-40 p-3 rounded-md border border-solid border-black`}`;


const LoginButton = styled.button `${tw `flex cursor-pointer mt-4 flex justify-center items-center rounded-md p-4 bg-black border-none outline-none text-white `}`;

export {StyledLoginComponent,UserINput,UserPassword,LoginButton,StyledLoginPage};